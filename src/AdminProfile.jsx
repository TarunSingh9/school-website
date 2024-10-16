// File: src/components/AdminProfile.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUserGraduate, FaChalkboardTeacher, FaEnvelope, FaPhone, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import './Profile/AdminProfile.css';

const AdminProfile = () => {
  const [studentLogs, setStudentLogs] = useState([]);
  const [teacherLogs, setTeacherLogs] = useState([]);
  const [editingLog, setEditingLog] = useState(null);
  const [searchTerm, setSearchTerm] = useState({ name: '', class: '', section: '' });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await axios.get('http://localhost:5000/api/admin/logs');
    setStudentLogs(response.data.students);
    setTeacherLogs(response.data.teachers);
  };

  const handleSearch = async () => {
    // Implement search logic if needed
  };

  const handleEdit = (log) => {
    setEditingLog(log);
  };

  const handleEditChange = (event) => {
    const { name, value } = event.target;
    setEditingLog({ ...editingLog, [name]: value });
  };

  const saveEdit = async () => {
    const response = await axios.put(`http://localhost:5000/api/admin/${editingLog.userType}/${editingLog.email}`, editingLog);
    if (editingLog.userType === 'student') {
      setStudentLogs(studentLogs.map(log => log.email === editingLog.email ? response.data : log));
    } else {
      setTeacherLogs(teacherLogs.map(log => log.email === editingLog.email ? response.data : log));
    }
    setEditingLog(null);
  };

  const deleteLog = async (email, userType) => {
    await axios.delete(`http://localhost:5000/api/admin/${userType}/${email}`);
    if (userType === 'student') {
      setStudentLogs(studentLogs.filter(log => log.email !== email));
    } else {
      setTeacherLogs(teacherLogs.filter(log => log.email !== email));
    }
  };

  return (
    <div className="admin-container">
      <h1>Welcome Admin, here is the information</h1>
      <div className="search-bar">
        {/* Search inputs and button */}
      </div>
      <div className="table-section">
        {/* Student and teacher tables with edit and delete buttons */}
      </div>
      {editingLog && (
        <div className="edit-form">
          <input type="text" name="name" value={editingLog.name} onChange={handleEditChange} />
          <input type="email" name="email" value={editingLog.email} onChange={handleEditChange} />
          <input type="text" name="phoneNumber" value={editingLog.phoneNumber} onChange={handleEditChange} />
          <button onClick={saveEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
