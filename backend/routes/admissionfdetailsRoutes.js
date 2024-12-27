const express = require('express');
const router = express.Router();
const {
    createAdmissionForm,
    getAllAdmissionForms,
    getAdmissionFormById
} = require('../controllers/admissionfdetailsController');

// Create a new Admission Form
router.post('/', createAdmissionForm);

// Get all Admission Forms
router.get('/', getAllAdmissionForms);

// Get a specific Admission Form by ID
router.get('/:id', getAdmissionFormById);

module.exports = router;
