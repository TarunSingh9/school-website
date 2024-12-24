const mongoose = require('mongoose');

const fullAttendanceSchema = new mongoose.Schema({
  class: Number,
  section: String,
  attendanceRecords: [
    {
      date: { type: Date, default: Date.now },
      students: [
        {
          name: String,
          status: {
            type: String,
            enum: ['Present', 'Absent'],
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('FullAttend', fullAttendanceSchema);
