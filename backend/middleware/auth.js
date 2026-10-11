const jwt = require('jsonwebtoken');
const env = require('../env');
const User = require('../models/User');

function auth(req, res, next) {
  const authHeader = req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'No token, authorization denied' });
  }
  
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ success: false, error: 'Token is not valid' });
  }
}

function requireRoles(allowedRoles) {
  return async (req, res, next) => {
    if (!req.user) return res.status(401).json({ success: false, error: 'Not authenticated' });
    const user = await User.findById(req.user.id);
    if (!user) return res.status(401).json({ success: false, error: 'User not found' });
    
    const hasRole = user.roles.some(r => allowedRoles.includes(r));
    if (!hasRole) return res.status(403).json({ success: false, error: 'Access denied: insufficient permissions' });
    
    // Update req.user with fresh roles
    req.user.roles = user.roles;
    next();
  };
}

module.exports = { auth, requireRoles };
