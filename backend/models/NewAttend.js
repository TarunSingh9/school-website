const mongoose = require('mongoose');

const newAttendanceSchema = new mongoose.Schema({
  class: Number,
  section: String,
  totalStudents: Number,
  students: [
    {
      name: String,
      status: {
        type: String,
        enum: ['Present', 'Absent'],
      },
    },
  ],
});

module.exports = mongoose.model('NewAttend', newAttendanceSchema);
