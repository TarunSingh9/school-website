import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaBirthdayCake, FaUserGraduate, FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';
import "./css/Login.css"; // Import your CSS

const Login = () => {
  const [userType, setUserType] = useState('student'); // 'student', 'teacher', 'admin'
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // To disable the submit button during API call

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const loginData = {
      email,
      dateOfBirth,
      password,
    };

    console.log("Login data being sent:", loginData); // Log the data before sending

    let url = '';

    if (userType === 'student') {
      url = 'http://localhost:5000/api/student/login';
    } else if (userType === 'teacher') {
      url = 'http://localhost:5000/api/teacher/login';
    } else if (userType === 'admin') {
      url = 'http://localhost:5000/api/admin/login';
    }

    try {
      const res = await axios.post(url, loginData);
      alert('Login successful. Redirecting...');

      setTimeout(() => {
        if (userType === 'student') {
          navigate('/student-profile');
        } else if (userType === 'teacher') {
          navigate('/teacher-profile');
        } else if (userType === 'admin') {
          navigate('/admin-profile');
        }
      }, 1500); // Delay of 1.5 seconds

      if (userType !== 'admin') {
        localStorage.setItem('user', JSON.stringify(res.data.user));
      }
    } catch (error) {
      console.error('Error during login:', error);

      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);

        alert(error.response.data.message || 'Error: Something went wrong during login');
      } else if (error.request) {
        console.error('Request data:', error.request);
        alert('Error: No response from the server. Please try again later.');
      } else {
        console.error('Error message:', error.message);
        alert('Error: Failed to make the request. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="user-type-buttons">
        <button className={`login-btn ${userType === 'student' ? 'active' : ''}`} onClick={() => handleUserTypeChange('student')}>
          <FaUserGraduate /> Student Login
        </button>
        <button className={`login-btn ${userType === 'teacher' ? 'active' : ''}`} onClick={() => handleUserTypeChange('teacher')}>
          <FaChalkboardTeacher /> Teacher Login
        </button>
        <button className={`login-btn ${userType === 'admin' ? 'active' : ''}`} onClick={() => handleUserTypeChange('admin')}>
          <FaUserShield /> Admin Login
        </button>
      </div>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="input-group">
          <FaBirthdayCake className="icon" />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" disabled={loading} className="submit-btn">
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
