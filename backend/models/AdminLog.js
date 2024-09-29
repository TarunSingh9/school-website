// models/AdminLog.js

const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({
  userType: { type: String, required: true }, // 'student' or 'teacher'
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('AdminLog', adminLogSchema);
