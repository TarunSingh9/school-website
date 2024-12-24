const express = require('express');
const { saveContactMessage } = require('../controllers/contactUsController'); // Ensure this is correct

const router = express.Router();

// POST route to save contact message
router.post('/', saveContactMessage);

module.exports = router;
