// Attendance.js
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student'
  },
  date: Date,
  status: String  // 'present', 'absent', 'half-day'
});

module.exports = mongoose.model('Attendance', attendanceSchema);
