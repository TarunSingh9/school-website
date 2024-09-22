import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import AttendanceGrid from './Profile/AttendanceGrid';
import StudentReportCard from './Profile/StudentReportCard';
import './Profile/Profile.css';

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch the user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  return (
    <div className="profile-container">
      <h2 className="profile-heading">Welcome to your Profile</h2>
      <div className="profile-card">
        <div className="profile-left">
          <div className="profile-image">
            <FaUserCircle size={150} />
          </div>
          <div className="profile-image-options">
            <button className="image-button">Insert from images</button>
            <button className="image-button">Take a photo</button>
          </div>
        </div>
        <div className="profile-right">
          {user ? (
            <div className="user-info">
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Roll No:</strong> {user.rollNumber}</p>
              <p><strong>Class & Section:</strong> {user.classSection}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
      </div>
      <StudentReportCard />
      <AttendanceGrid />
    </div>
  );
};

export default Profile;
