import React, { useState } from 'react';
import './AdmissionForm.css';

const AdmissionForm = () => {
    const [formData, setFormData] = useState({
        studentName: '',
        dateOfBirth: '',
        gender: '',
        address: '',
        contactNumber: '',
        email: '',
        fatherName: '',
        motherName: '',
        occupation: '',
        parentContactNumber: '',
        parentEmail: '',
        lastSchool: '',
        lastGrade: '',
        academicPerformance: '',
        classApplied: '',
        preferredStream: '',
        transportMode: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="admission-form-container">
            <h2 className='Fromheading'>School Admission Form</h2>
            <form onSubmit={handleSubmit} className="admission-form">
                <div className="form-group">
                    <label>Full Name of the Student<span className="required">*</span></label>
                    <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Date of Birth<span className="required">*</span></label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Gender<span className="required">*</span></label>
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Address<span className="required">*</span></label>
                    <textarea name="address" value={formData.address} onChange={handleChange} required></textarea>
                </div>

                <div className="form-group">
                    <label>Contact Number<span className="required">*</span></label>
                    <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Email Address<span className="required">*</span></label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Full Name of the Father<span className="required">*</span></label>
                    <input type="text" name="fatherName" value={formData.fatherName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Full Name of the Mother<span className="required">*</span></label>
                    <input type="text" name="motherName" value={formData.motherName} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Occupation<span className="required">*</span></label>
                    <input type="text" name="occupation" value={formData.occupation} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Parent's Contact Number<span className="required">*</span></label>
                    <input type="tel" name="parentContactNumber" value={formData.parentContactNumber} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Parent's Email Address<span className="required">*</span></label>
                    <input type="email" name="parentEmail" value={formData.parentEmail} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Name of the Last School Attended<span className="required">*</span></label>
                    <input type="text" name="lastSchool" value={formData.lastSchool} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Grade/Class Last Attended<span className="required">*</span></label>
                    <input type="text" name="lastGrade" value={formData.lastGrade} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Academic Performance (Grades/Marks)<span className="required">*</span></label>
                    <input type="text" name="academicPerformance" value={formData.academicPerformance} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label>Class/Grade Applied For</label>
                    <input type="text" name="classApplied" value={formData.classApplied} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Preferred Stream (if applicable)</label>
                    <input type="text" name="preferredStream" value={formData.preferredStream} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Mode of Transport<span className="required">*</span></label>
                    <select name="transportMode" value={formData.transportMode} onChange={handleChange} required>
                        <option value="">Select Mode</option>
                        <option value="School Bus">School Bus</option>
                        <option value="Private Vehicle">Private Vehicle</option>
                        <option value="Walking">Walking</option>
                    </select>
                </div>

                <button type="submit" className="submit-button">Submit</button>
            </form>
        </div>
    );
};

export default AdmissionForm;
