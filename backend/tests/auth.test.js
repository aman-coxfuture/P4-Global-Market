require('dotenv').config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);
const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const User = require('../models/User');
const UserProfile = require('../models/UserProfile');
const Session = require('../models/Session');
const env = require('../env');

describe('Auth Endpoints', () => {
  beforeAll(async () => {
    await mongoose.connect(env.MONGODB_URI);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    await User.deleteMany({});
    await UserProfile.deleteMany({});
    await Session.deleteMany({});
  });

  const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    password: 'Password123!'
  };

  let cookies = [];
  let accessToken = '';

  it('should signup a new user', async () => {
    const res = await request(app).post('/api/v1/auth/signup').send(testUser);
    expect(res.statusCode).toEqual(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
    
    // Check DB
    const u = await User.findOne({ email: testUser.email });
    expect(u).toBeDefined();
    const p = await UserProfile.findOne({ userId: u._id });
    expect(p.clientId).toBeDefined();
  });

  it('should prevent duplicate signup', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const res = await request(app).post('/api/v1/auth/signup').send(testUser);
    expect(res.statusCode).toEqual(400);
    expect(res.body.success).toBe(false);
  });

  it('should login and return tokens', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const res = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.headers['set-cookie']).toBeDefined();
    cookies = res.headers['set-cookie'];
    accessToken = res.body.data.accessToken;
  });

  it('should lockout after 5 failed logins', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    for (let i = 0; i < 5; i++) {
      await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: 'wrong' });
    }
    const res = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    expect(res.statusCode).toEqual(403);
    expect(res.body.error).toContain('Account locked');
  });

  it('should refresh token and rotate', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const loginRes = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    
    const res = await request(app).post('/api/v1/auth/refresh').set('Cookie', loginRes.headers['set-cookie']);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.headers['set-cookie']).toBeDefined();
    expect(res.headers['set-cookie'][0]).not.toEqual(loginRes.headers['set-cookie'][0]);
  });

  it('should detect token reuse and revoke family', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const loginRes = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    
    // Refresh once
    await request(app).post('/api/v1/auth/refresh').set('Cookie', loginRes.headers['set-cookie']);
    
    // Reuse old token
    const res = await request(app).post('/api/v1/auth/refresh').set('Cookie', loginRes.headers['set-cookie']);
    expect(res.statusCode).toEqual(403);
    expect(res.body.error).toContain('Session compromised');
  });

  it('should return user profile on /me', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const loginRes = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    const token = loginRes.body.data.accessToken;

    const res = await request(app).get('/api/v1/auth/me').set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body.data.email).toEqual(testUser.email);
    expect(res.body.data.profile.firstName).toEqual(testUser.firstName);
    expect(res.body.data.password).toBeUndefined(); // Should not return hash
  });

  it('should logout and clear cookie', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const loginRes = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    const res = await request(app).post('/api/v1/auth/logout').set('Cookie', loginRes.headers['set-cookie']);
    expect(res.statusCode).toEqual(200);
    expect(res.headers['set-cookie'][0]).toContain('refreshToken=;');
  });

  it('should block non-admin from /admin/ping', async () => {
    await request(app).post('/api/v1/auth/signup').send(testUser);
    const loginRes = await request(app).post('/api/v1/auth/login').send({ email: testUser.email, password: testUser.password });
    const res = await request(app).get('/api/v1/admin/ping').set('Authorization', `Bearer ${loginRes.body.data.accessToken}`);
    expect(res.statusCode).toEqual(403);
  });
});
