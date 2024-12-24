const express = require('express');
const bcrypt = require('bcrypt');
const Teacher = require('../models/Teacher');
const router = express.Router();

// Teacher Signup Route
router.post('/signup', async (req, res) => {
  const { name, email, dateOfBirth, coreSubject, phoneNumber, password } = req.body;
  try {
    const teacher = new Teacher({ name, email, dateOfBirth, coreSubject, phoneNumber, password });
    await teacher.save();
    res.status(201).json({ message: 'Teacher registered successfully', user: teacher });
  } catch (error) {
    console.error('Error during teacher signup:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Teacher Login Route
router.post('/login', async (req, res) => {
  const { email, dateOfBirth, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) return res.status(400).json({ message: 'Email not registered' });

    const dob = new Date(teacher.dateOfBirth).toISOString().split('T')[0];
    if (dob !== dateOfBirth) return res.status(400).json({ message: 'Invalid Date of Birth' });

    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user: teacher });
  } catch (error) {
    console.error('Error during teacher login:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
