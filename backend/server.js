require('dotenv').config();
const env = require('./env');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');

const dns = require('dns');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();

// Authentication/profile responses are always dynamic. Disable Express ETags
// so conditional requests cannot turn /auth/me into a body-less 304 response.
app.set('etag', false);
app.use((req, res, next) => {
  if (req.path.startsWith('/api/v1/auth')) {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
  }
  next();
});

app.use(helmet());
app.use(cookieParser());
app.use(express.json());

// Express 5 compatible NoSQL Sanitizer
app.use((req, res, next) => {
  const sanitize = require('express-mongo-sanitize').sanitize;
  if (req.body) req.body = sanitize(req.body);
  if (req.params) req.params = sanitize(req.params);
  if (req.query) {
    const sanitizedQuery = sanitize(req.query);
    for (const key in req.query) delete req.query[key];
    Object.assign(req.query, sanitizedQuery);
  }
  next();
});

app.use(cors({
  origin: env.FRONTEND_URL,
  credentials: true,
}));

// Check origin on state-changing routes
app.use((req, res, next) => {
  if (['POST', 'PUT', 'PATCH', 'DELETE'].includes(req.method)) {
    const origin = req.headers.origin;
    if (origin && origin !== env.FRONTEND_URL) {
      return res.status(403).json({ success: false, error: 'Forbidden origin' });
    }
  }
  next();
});



const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { success: false, error: 'Too many requests' }
});
app.use('/api', apiLimiter);

// Routes
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/admin', require('./routes/admin')); // To test requireRoles

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

if (env.NODE_ENV !== 'test') {
  mongoose.connect(env.MONGODB_URI)
    .then(() => {
      console.log('MongoDB Connected...');
      app.listen(env.PORT, () => console.log(`Server running on port ${env.PORT}`));
    })
    .catch(err => console.error(err));
}

module.exports = app;
