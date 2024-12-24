const express = require('express');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const AdminLog = require('../models/AdminLog');
const router = express.Router();

// Admin credentials
const adminEmail = 'admin@example.com';
const adminPassword = 'admin123';
const adminDob = '1990-01-01';

// Admin login route
router.post('/login', async (req, res) => {
    const { email, dateOfBirth, password } = req.body;

    if (email !== adminEmail || dateOfBirth !== adminDob || password !== adminPassword) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    const adminLog = new AdminLog({
        action: 'Admin login',
        details: `Admin with email ${email} logged in successfully`,
    });

    try {
        await adminLog.save();
        res.status(200).json({ message: 'Admin login successful', user: { email } });
    } catch (error) {
        res.status(500).json({ message: 'Failed to log admin action', error });
    }
});

// Get logs route
router.get('/logs', async (req, res) => {
    try {
        const students = await Student.find();
        const teachers = await Teacher.find();
        res.json({
            students,
            teachers,
            studentCount: students.length,
            teacherCount: teachers.length,
        });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch logs', error });
    }
});

// Update user info
router.put('/:userType/:email', async (req, res) => {
    const { userType, email } = req.params;
    const Model = userType === 'student' ? Student : Teacher;
    const updateData = {
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    };

    try {
        const updatedLog = await Model.findOneAndUpdate({ email }, updateData, { new: true });
        if (!updatedLog) {
            return res.status(404).json({ message: 'Log not found' });
        }
        res.json(updatedLog);
    } catch (error) {
        res.status(500).json({ message: 'Failed to update log', error });
    }
});

module.exports = router;
