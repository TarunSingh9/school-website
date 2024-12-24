const express = require('express');
const { saveAttendance, fetchAttendance } = require('../controllers/attendanceController');

const router = express.Router();

router.post('/save', saveAttendance);
router.get('/fetch', fetchAttendance); // API for fetching attendance

module.exports = router;
