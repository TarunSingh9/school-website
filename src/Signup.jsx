import React, { useState } from 'react'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    classSection: '',
    rollNumber: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Check if rollNumber is not null
    if (!formData.rollNumber) {
      alert('Roll number cannot be null');
      return;
    }

    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
      alert(res.data.message);
      
      // Store user data in localStorage for the Profile page
      localStorage.setItem('user', JSON.stringify(res.data.user));
      
      // Redirect to Profile page after successful signup
      navigate('/profile');
    } catch (error) {
      console.error('Error during signup:', error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      } else {
        alert('An unexpected error occurred');
      }
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Class & Section"
          name="classSection"
          value={formData.classSection}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          placeholder="Roll No"
          name="rollNumber"
          value={formData.rollNumber}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
