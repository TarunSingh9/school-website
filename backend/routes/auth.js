const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Signup Route
router.post('/signup', async (req, res) => {
  const { name, classSection, rollNumber, email, password } = req.body;

  try {
    // Check if rollNumber is provided
    if (!rollNumber) {
      return res.status(400).json({ message: 'Roll number is required' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email is already registered' });
    }

    // Create a new user with hashed password
    const user = new User({ name, classSection, rollNumber, email, password });
    await user.save();

    // Return the user object upon successful registration
    res.status(201).json({ message: 'Registration successful', user });
  } catch (error) {
    console.error('Error during signup:', error); // Log the detailed error
    res.status(500).json({ message: 'Server error' });
  }
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the email is registered
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Email not registered' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Return the user object upon successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error); // Log the detailed error
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

