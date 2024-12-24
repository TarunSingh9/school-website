const ContactUs = require('../models/ContactUs');

// Controller function to handle saving contact messages
exports.saveContactMessage = async (req, res) => {
  try {
    const { email, name, message } = req.body;

    // Validate the input
    if (!email || !name || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save the message to the database
    const newMessage = new ContactUs({ email, name, message });
    await newMessage.save();

    res.status(201).json({ message: 'Your message has been saved successfully!' });
  } catch (error) {
    console.error('Error saving contact message:', error);
    res.status(500).json({ message: 'Failed to save the message.' });
  }
};
