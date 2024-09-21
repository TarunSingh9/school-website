import React, { useEffect, useState } from 'react';
import AttendanceGrid from './Profile/AttendanceGrid';
import StudentReportCard from './Profile/StudentReportCard';

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
    <div>
      <h2>Welcome to your Profile</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Roll No:</strong> {user.rollNumber}</p>
          <p><strong>Class & Section:</strong> {user.classSection}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}

      <AttendanceGrid/>
      <StudentReportCard/>
    </div>
  );
};

export default Profile;
