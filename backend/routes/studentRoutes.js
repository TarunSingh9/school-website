const express = require('express');
const bcrypt = require('bcrypt');
const Student = require('../models/Student');
const router = express.Router();

// Student Signup Route
router.post('/signup', async (req, res) => {
  const { name, classSection, rollNumber, dateOfBirth, phoneNumber, email, password } = req.body;
  try {
    const student = new Student({ name, classSection, rollNumber, dateOfBirth, phoneNumber, email, password });
    await student.save();
    res.status(201).json({ message: 'Student registered successfully', user: student });
  } catch (error) {
    console.error('Error during student signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Student Login Route
router.post('/login', async (req, res) => {
  const { email, dateOfBirth, password } = req.body;

  try {
    const student = await Student.findOne({ email });
    if (!student) return res.status(400).json({ message: 'Email not registered' });

    const dob = new Date(student.dateOfBirth).toISOString().split('T')[0];
    if (dob !== dateOfBirth) return res.status(400).json({ message: 'Invalid Date of Birth' });

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user: student });
  } catch (error) {
    console.error('Error during student login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
