const mongoose = require('mongoose');

const adminLogSchema = new mongoose.Schema({
  action: { type: String, required: true }, // Action performed by admin
  details: { type: String, required: true }, // Additional details about the action
  timestamp: { type: Date, default: Date.now }, // Timestamp of the action
});

module.exports = mongoose.model('AdminLog', adminLogSchema);
