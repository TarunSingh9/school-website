const NewAttend = require('../models/NewAttend');
const FullAttend = require('../models/FullAttend');

// Save Attendance Function
exports.saveAttendance = async (req, res) => {
  try {
    const { class: classNumber, section, totalStudents, students } = req.body;

    if (!classNumber || !section || !totalStudents || !students) {
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Save to NewAttend
    const newAttendance = new NewAttend({
      class: classNumber,
      section,
      totalStudents,
      students,
    });
    await newAttendance.save();

    // Save to FullAttend
    let fullAttendance = await FullAttend.findOne({ class: classNumber, section });
    if (!fullAttendance) {
      fullAttendance = new FullAttend({
        class: classNumber,
        section,
        attendanceRecords: [],
      });
    }

    fullAttendance.attendanceRecords.push({
      date: new Date(),
      students,
    });

    await fullAttendance.save();

    res.status(201).json({ message: 'Attendance saved successfully.' });
  } catch (error) {
    console.error('Error saving attendance:', error);
    res.status(500).json({ message: 'Error saving attendance data.', error: error.message });
  }
};

// Fetch Attendance Function
exports.fetchAttendance = async (req, res) => {
  try {
    const { class: classNumber, section } = req.query;

    if (!classNumber || !section) {
      return res.status(400).json({ message: 'Class and section are required.' });
    }

    const attendanceRecord = await NewAttend.findOne({ class: classNumber, section });

    if (!attendanceRecord) {
      return res.status(404).json({ message: 'Attendance record not found for the given class and section.' });
    }

    res.status(200).json({ students: attendanceRecord.students });
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ message: 'Error fetching attendance.', error: error.message });
  }
};
