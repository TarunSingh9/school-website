import React, { useEffect, useState } from 'react';
import './StudentProfile.css'; // Importing CSS file

const StudentProfile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setStudent(userData);
  }, []);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="StudentProfile-container">
      <h2 className="StudentProfile-heading">Student Profile</h2>
      <p className="StudentProfile-info">Name: {student.name}</p>
      <p className="StudentProfile-info">Class & Section: {student.classSection}</p>
      <p className="StudentProfile-info">Roll Number: {student.rollNumber}</p>
      <p className="StudentProfile-info">Email: {student.email}</p>
    </div>

    
  );
};

export default StudentProfile;
