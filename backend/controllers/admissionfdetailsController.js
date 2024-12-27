const AdmissionForm = require('../models/admissionfdetailsModel');

// Create Admission Form Entry
exports.createAdmissionForm = async (req, res) => {
    try {
        const newForm = new AdmissionForm(req.body);
        await newForm.save();
        res.status(201).json({ message: 'Form submitted successfully!', data: newForm });
    } catch (error) {
        console.error('Error submitting the form:', error);
        res.status(500).json({ message: 'Failed to submit the form', error: error.message });
    }
};

// Get All Admission Forms
exports.getAllAdmissionForms = async (req, res) => {
    try {
        const forms = await AdmissionForm.find();
        res.status(200).json(forms);
    } catch (error) {
        console.error('Error fetching forms:', error);
        res.status(500).json({ message: 'Failed to fetch forms', error: error.message });
    }
};

// Get Single Admission Form by ID
exports.getAdmissionFormById = async (req, res) => {
    try {
        const form = await AdmissionForm.findById(req.params.id);
        if (!form) return res.status(404).json({ message: 'Form not found' });
        res.status(200).json(form);
    } catch (error) {
        console.error('Error fetching the form:', error);
        res.status(500).json({ message: 'Failed to fetch the form', error: error.message });
    }
};
