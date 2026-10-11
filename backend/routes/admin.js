const express = require('express');
const router = express.Router();
const { auth, requireRoles } = require('../middleware/auth');

router.get('/ping', auth, requireRoles(['admin']), (req, res) => {
  res.json({ success: true, data: { message: 'pong' } });
});

module.exports = router;
