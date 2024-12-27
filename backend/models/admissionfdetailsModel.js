const mongoose = require('mongoose');

const AdmissionFormSchema = new mongoose.Schema({
    studentName: { type: String, required: true },
    dateOfBirth: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    contactNumber: { type: String, required: true },
    email: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    occupation: { type: String, required: true },
    parentContactNumber: { type: String, required: true },
    parentEmail: { type: String, required: true },
    lastSchool: { type: String, required: true },
    lastGrade: { type: String, required: true },
    academicPerformance: { type: String, required: true },
    classApplied: { type: String, required: true },
    preferredStream: { type: String, required: true },
    transportMode: { type: String, required: true },
    submissionDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AdmissionForm', AdmissionFormSchema, 'admissiondb');
