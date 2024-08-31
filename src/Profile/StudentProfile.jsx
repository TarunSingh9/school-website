import React, { useState } from 'react';
import './StudentProfile.css';

const StudentProfile = () => {
  const [studentData, setStudentData] = useState({
    name: '',
    className: '',
    rollNumber: '',
    year: '',
  });

  const [performanceData, setPerformanceData] = useState([
    { testName: 'Math Test 1', totalMarks: 100, obtainedMarks: 85 },
    { testName: 'Science Test 1', totalMarks: 100, obtainedMarks: 90 },
    // Add more performance data here
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData({ ...studentData, [name]: value });
  };

  const handleSearch = () => {
    // Logic for searching student data (e.g., fetch from API)
    console.log('Search button clicked');
  };

  return (
    <div className="student-profile-container">
      <h2 className="profile-header">Student Profile</h2>
      
      <div className="profile-form">
        <label>Student Name:</label>
        <input 
          type="text" 
          name="name" 
          value={studentData.name} 
          onChange={handleInputChange} 
          placeholder="Enter Student Name" 
        />

        <label>Class Name:</label>
        <input 
          type="text" 
          name="className" 
          value={studentData.className} 
          onChange={handleInputChange} 
          placeholder="Enter Class Name" 
        />

        <label>Roll Number:</label>
        <input 
          type="text" 
          name="rollNumber" 
          value={studentData.rollNumber} 
          onChange={handleInputChange} 
          placeholder="Enter Roll Number" 
        />

        <label>Year:</label>
        <select 
          name="year" 
          value={studentData.year} 
          onChange={handleInputChange}>
          <option value="">--Choose Year--</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          {/* Add more years if necessary */}
        </select>

        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      <div className="performance-table-container">
        <h3 className="performance-header">Performance</h3>
        <table className="performance-table">
          <thead>
            <tr>
              <th>Test Name</th>
              <th>Total Marks</th>
              <th>Obtained Marks</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((test, index) => (
              <tr key={index}>
                <td>{test.testName}</td>
                <td>{test.totalMarks}</td>
                <td>{test.obtainedMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentProfile;
