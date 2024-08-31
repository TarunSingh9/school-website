import React, { useState } from 'react';
import "./css/Signup.css";

const Signup = () => {
  const [selectedRole, setSelectedRole] = useState('student'); // Default to 'student'

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <div className="signup-container">
      <h2 className='signuphead'>Signup & Registration Page</h2>
      <div className="role-selection">
        <button
          className={selectedRole === 'student' ? 'active' : ''}
          onClick={() => handleRoleSelection('student')}
        >
          Student Signup
        </button>
        <button
          className={selectedRole === 'teacher' ? 'active' : ''}
          onClick={() => handleRoleSelection('teacher')}
        >
          Teacher Signup
        </button>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        {selectedRole === 'student' && (
          <>
            <h3 className='subheadsign'>Name of the student</h3>
            <input type="text" name="name" placeholder="Name" required />
            <h3 className='subheadsign'>Enter Your Class and Section</h3>
            <input type="text" name="class" placeholder="Enter Your Class and Section" required />
            <h3 className='subheadsign'>Email</h3>
            <input type="email" name="email" placeholder="Email" required />
            <h3 className='subheadsign'>Enter your roll number</h3>
            <input typeo='number' name='enter your roll number' placeholder='roll number' required/>
            <h3 className='subheadsign'>Password</h3>
            <input type="password" name="password" placeholder="Password" required />
            <h3 className='subheadsign'>Confirm Password</h3>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          </>
        )}
        {selectedRole === 'teacher' && (
          <>
            <h3 className='subheadsign'>Name</h3>
            <input type="text" name="name" placeholder="Name" required />
            <h3 className='subheadsign'>Email</h3>
            <input type="email" name="email" placeholder="Email" required />
            <h3 className='subheadsign'>Password</h3>
            <input type="password" name="password" placeholder="Password" required />
            <h3 className='subheadsign'>Confirm Password</h3>
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
          </>
        )}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
