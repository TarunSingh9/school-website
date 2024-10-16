import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/Signup.css';
import { FaUserGraduate, FaChalkboardTeacher } from 'react-icons/fa';

const Signup = () => {
  const [userType, setUserType] = useState('student');
  const [studentFormData, setStudentFormData] = useState({
    name: '',
    classSection: '',
    rollNumber: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [teacherFormData, setTeacherFormData] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    coreSubject: '',
    phoneNumber: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUserTypeChange = (type) => {
    setUserType(type);
    setErrors({}); // Clear errors when switching types
  };

  const handleChange = (e, type) => {
    const { name, value } = e.target;

    // Only allow numbers for phoneNumber
    if (name === 'phoneNumber') {
      if (!/^\d*$/.test(value)) {
        return; // Return if non-numeric value is entered
      }
    }

    if (type === 'student') {
      setStudentFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setTeacherFormData(prev => ({ ...prev, [name]: value }));
    }
    setErrors(prev => ({ ...prev, [name]: '' })); // Clear specific field error on change
  };

  const validateForm = (data) => {
    const newErrors = {};
    if (!data.email.includes('@')) {
      newErrors.email = 'Invalid email address.';
    }
    if (data.password !== data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }
    if (!/^(?=.*[!@#$%^&*])/.test(data.password)) {
      newErrors.password = 'Password must contain at least one special character.';
    }
    if (!/^\d{10}$/.test(data.phoneNumber)) {
      newErrors.phoneNumber = 'Phone number must contain exactly 10 digits.';
    }
    return newErrors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = userType === 'student' ? studentFormData : teacherFormData;
    const formErrors = validateForm(formData);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:5000/api/${userType}s/signup`, // Corrected path
        formData
      );
      alert(response.data.message);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate(`/${userType}-profile`);
    } catch (error) {
      alert(error.response?.data?.message || 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <div className="signup-buttons">
        <button
          className={`signup-btn ${userType === 'student' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('student')}
          aria-label="Student Signup"
        >
          <FaUserGraduate /> Student Signup
        </button>
        <button
          className={`signup-btn ${userType === 'teacher' ? 'active' : ''}`}
          onClick={() => handleUserTypeChange('teacher')}
          aria-label="Teacher Signup"
        >
          <FaChalkboardTeacher /> Teacher Signup
        </button>
      </div>
      <form onSubmit={handleSignup} className="signup-form">
        {userType === 'student' ? (
          <>
            {/* Student form fields */}
            {Object.entries(studentFormData).map(([key, value]) => (
              key !== 'confirmPassword' ? (
                <div key={key}>
                  <input
                    type={key === 'password' ? 'password' : key === 'email' ? 'email' : key === 'dateOfBirth' ? 'date' : 'text'}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    name={key}
                    value={value}
                    onChange={e => handleChange(e, 'student')}
                    className="form-input"
                    required
                    aria-label={key}
                  />
                </div>
              ) : null
            ))}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={studentFormData.confirmPassword}
              onChange={e => handleChange(e, 'student')}
              className="form-input"
              required
              aria-label="Confirm Password"
            />
            {Object.keys(errors).map(key => (
              errors[key] && <div className="error" key={key}>{errors[key]}</div>
            ))}
          </>
        ) : (
          <>
            {/* Teacher form fields */}
            {Object.entries(teacherFormData).map(([key, value]) => (
              key !== 'confirmPassword' ? (
                <div key={key}>
                  <input
                    type={key === 'password' ? 'password' : key === 'email' ? 'email' : key === 'dateOfBirth' ? 'date' : 'text'}
                    placeholder={key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1').trim()}
                    name={key}
                    value={value}
                    onChange={e => handleChange(e, 'teacher')}
                    className="form-input"
                    required
                    aria-label={key}
                  />
                </div>
              ) : null
            ))}
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={teacherFormData.confirmPassword}
              onChange={e => handleChange(e, 'teacher')}
              className="form-input"
              required
              aria-label="Confirm Password"
            />
            {Object.keys(errors).map(key => (
              errors[key] && <div className="error" key={key}>{errors[key]}</div>
            ))}
          </>
        )}
        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </form>
    </div>
  );
};

export default Signup;
