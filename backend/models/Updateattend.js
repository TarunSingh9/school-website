// models/Updateattend.js
const mongoose = require('mongoose');

const UpdateAttendSchema = new mongoose.Schema({
  class: { type: Number, required: true },
  section: { type: String, required: true },
  students: [
    {
      name: { type: String, required: true },
      status: { type: String, enum: ['Present', 'Absent'], required: true }
    }
  ],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('UpdateAttend', UpdateAttendSchema);
