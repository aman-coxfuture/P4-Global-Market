const mongoose = require('mongoose');

const UserProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  clientId: {
    type: Number,
    required: true,
    unique: true
  },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: String,
  country: String
}, { timestamps: true });

module.exports = mongoose.model('UserProfile', UserProfileSchema);
