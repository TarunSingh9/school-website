import React, { useEffect, useState } from 'react';

const TeacherProfile = () => {
  const [teacher, setTeacher] = useState(null);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setTeacher(userData);
  }, []);

  if (!teacher) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Teacher Profile</h2>
      <p>Name: {teacher.name}</p>
      <p>Email: {teacher.email}</p>
      <p>Core Subject: {teacher.coreSubject}</p>
    </div>
  );
};

export default TeacherProfile;
