const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Importing routes
const attendanceRoutes = require('./routes/attendanceRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const adminRoutes = require('./routes/adminRoutes');
const contactUsRoutes = require('./routes/contactUsRoutes');



const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/contact', contactUsRoutes);
app.use('/api/attendance', attendanceRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/admin', adminRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/studentdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB Connected');
  })
  .catch((err) => {
    console.error('Connection error:', err);
  });

// Add models (optional for initializing if required)
const NewAttend = require('./models/NewAttend');
const FullAttend = require('./models/FullAttend');

// Example handler for testing database connection (Optional)
app.get('/test-connection', async (req, res) => {
  try {
    const result = await NewAttend.find(); // Test query (replace with any collection name)
    res.status(200).json({ message: "Database connection successful", data: result });
  } catch (err) {
    console.error("Database test error:", err);
    res.status(500).json({ message: "Error connecting to database", error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
