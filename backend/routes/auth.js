const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const cors = require('cors');

// Models
const Student = require('./models/Student');
const Teacher = require('./models/Teacher');
const AdminLog = require('./models/AdminLog');

// Initialize the Express application
const app = express();
const port = process.env.PORT || 5000;  // Default port or environment port

// Middleware
app.use(cors());  // Enable all CORS requests
app.use(express.json());  // for parsing application/json

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/schoolDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
.then(() => console.log('MongoDB connected successfully!'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes in the same file for simplicity
app.post('/api/auth/student/signup', async (req, res) => {
  const { name, classSection, rollNumber, dateOfBirth, phoneNumber, email, password } = req.body;
  try {
    const existingUser = await Student.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({
      name, classSection, rollNumber, dateOfBirth, phoneNumber, email, password: hashedPassword,
    });
    await student.save();
    const adminLog = new AdminLog({ userType: 'student', name, email, phoneNumber });
    await adminLog.save();
    res.status(201).json({ message: 'Student registration successful', user: student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/teacher/signup', async (req, res) => {
  const { name, email, dateOfBirth, coreSubject, phoneNumber, password } = req.body;
  try {
    const existingUser = await Teacher.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'This email is already registered' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const teacher = new Teacher({
      name, email, dateOfBirth, coreSubject, phoneNumber, password: hashedPassword,
    });
    await teacher.save();
    const adminLog = new AdminLog({ userType: 'teacher', name, email, phoneNumber });
    await adminLog.save();
    res.status(201).json({ message: 'Teacher registration successful', user: teacher });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/student/login', async (req, res) => {
  const { email, dateOfBirth, password } = req.body;
  try {
    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(404).json({ message: 'Email not registered' });
    }
    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user: student });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

app.post('/api/auth/teacher/login', async (req, res) => {
  const { email, dateOfBirth, password } = req.body;
  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(404).json({ message: 'Email not registered' });
    }
    const isMatch = await bcrypt.compare(password, teacher.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ message: 'Login successful', user: teacher });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
