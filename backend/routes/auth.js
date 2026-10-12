const express = require('express');
const router = express.Router();
const { z } = require('zod');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');
const Session = require('../models/Session');
const env = require('../env');
const validate = require('../middleware/validate');
const { auth } = require('../middleware/auth');
const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 20, message: { success: false, error: 'Too many attempts' } });

const signupSchema = z.object({
  firstName: z.string().min(1, 'First name required'),
  lastName: z.string().min(1, 'Last name required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password must be at least 8 chars'),
  phone: z.string().optional(),
  country: z.string().optional(),
});

const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z.string()
});

const hashToken = (token) => crypto.createHash('sha256').update(token).digest('hex');

const issueTokens = async (user, res, existingFamilyId = null) => {
  const accessToken = jwt.sign({ user: { id: user.id, roles: user.roles } }, env.JWT_SECRET, { expiresIn: '15m' });
  const refreshToken = crypto.randomBytes(40).toString('hex');
  const familyId = existingFamilyId || crypto.randomBytes(16).toString('hex');
  
  await Session.create({
    userId: user.id,
    tokenHash: hashToken(refreshToken),
    familyId,
    expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
  });

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: env.NODE_ENV === 'production' ? 'Strict' : 'Lax',
    path: '/api/v1/auth',
    maxAge: 7 * 24 * 60 * 60 * 1000
  });

  return accessToken;
};

const INVALID_CREDS = 'Invalid email or password';

router.post('/register', authLimiter, validate(signupSchema), async (req, res) => {
  const { firstName, lastName, email, password, phone, country } = req.body;
  if (await User.findOne({ email })) return res.status(400).json({ success: false, error: 'User already exists' });
  
  const user = await User.create({ email, password });
  
  // Gen unique 7 digit clientId
  let clientId;
  while (true) {
    clientId = Math.floor(1000000 + Math.random() * 9000000);
    if (!(await UserProfile.findOne({ clientId }))) break;
  }

  await UserProfile.create({ userId: user.id, clientId, firstName, lastName, phone, country });
  const accessToken = await issueTokens(user, res);
  res.status(201).json({ success: true, data: { accessToken } });
});

router.post('/login', authLimiter, validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ success: false, error: INVALID_CREDS });

  if (user.lockUntil && user.lockUntil > Date.now()) {
    return res.status(403).json({ success: false, error: 'Account locked. Try again later.' });
  }

  if (!(await user.comparePassword(password))) {
    user.loginAttempts += 1;
    if (user.loginAttempts >= 5) user.lockUntil = Date.now() + 15 * 60 * 1000;
    await user.save();
    return res.status(401).json({ success: false, error: INVALID_CREDS });
  }

  user.loginAttempts = 0;
  user.lockUntil = undefined;
  await user.save();

  const accessToken = await issueTokens(user, res);
  res.json({ success: true, data: { accessToken } });
});

router.post('/refresh', async (req, res) => {
  const token = req.cookies.refreshToken;
  if (!token) return res.status(401).json({ success: false, error: 'No refresh token' });

  const session = await Session.findOne({ tokenHash: hashToken(token) }).populate('userId');
  
  if (!session) {
    res.clearCookie('refreshToken', { path: '/api/v1/auth' });
    return res.status(401).json({ success: false, error: 'Invalid token' });
  }

  if (session.revokedAt) {
    await Session.updateMany({ familyId: session.familyId }, { $set: { revokedAt: new Date() } });
    res.clearCookie('refreshToken', { path: '/api/v1/auth' });
    return res.status(403).json({ success: false, error: 'Session compromised. Please login again.' });
  }

  if (session.expiresAt < Date.now()) {
    res.clearCookie('refreshToken', { path: '/api/v1/auth' });
    return res.status(401).json({ success: false, error: 'Session expired' });
  }

  session.revokedAt = new Date();
  await session.save();

  const accessToken = await issueTokens(session.userId, res, session.familyId);
  res.json({ success: true, data: { accessToken } });
});

router.post('/logout', async (req, res) => {
  const token = req.cookies.refreshToken;
  if (token) {
    const session = await Session.findOne({ tokenHash: hashToken(token) });
    if (session) await Session.updateMany({ familyId: session.familyId }, { $set: { revokedAt: new Date() } });
  }
  res.clearCookie('refreshToken', { path: '/api/v1/auth' });
  res.json({ success: true, data: null });
});

router.get('/me', auth, async (req, res) => {
  const user = await User.findById(req.user.id).select('-password -__v -loginAttempts -lockUntil');
  if (!user) return res.status(404).json({ success: false, error: 'User not found' });
  const profile = await UserProfile.findOne({ userId: user.id }).select('-__v -_id -userId');
  res.json({ success: true, data: { ...user.toObject(), profile } });
});

module.exports = router;
