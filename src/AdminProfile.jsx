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
    try {
      const resLogs = await axios.get('http://localhost:5000/api/admin/logs');
      const logs = resLogs.data.logs;
      setStudentLogs(logs.filter(log => log.userType === 'student'));
      setTeacherLogs(logs.filter(log => log.userType === 'teacher'));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const { name, class: className, section } = searchTerm;
      const res = await axios.post('http://localhost:5000/api/admin/search', { name, class: className, section });
      setStudentLogs(res.data);
    } catch (error) {
      console.error('Error searching student:', error.response ? error.response.data.message : error.message);
    }
  };

  const deleteLog = async (email, userType) => {
    try {
      const response = await axios.delete(`http://localhost:5000/api/admin/${userType}/email/${email}`);
      if (response.status === 200) {
        if (userType === 'student') {
          setStudentLogs(studentLogs.filter(log => log.email !== email));
        } else {
          setTeacherLogs(teacherLogs.filter(log => log.email !== email));
        }
      } else {
        console.error('Failed to delete log:', response.data.message);
      }
    } catch (error) {
      console.error('Error deleting log:', error.response ? error.response.data.message : error.message);
    }
  };

  const startEditing = (log) => {
    setEditingLog(log);
  };

  const handleEditChange = (e) => {
    setEditingLog({ ...editingLog, [e.target.name]: e.target.value });
  };

  const saveEdit = async () => {
    try {
      const res = await axios.put(`http://localhost:5000/api/admin/${editingLog.userType}/email/${editingLog.email}`, editingLog);
      if (res.status === 200) {
        const updatedLog = res.data.user;
        if (editingLog.userType === 'student') {
          setStudentLogs(studentLogs.map(log => log.email === editingLog.email ? updatedLog : log));
        } else {
          setTeacherLogs(teacherLogs.map(log => log.email === editingLog.email ? updatedLog : log));
        }
        setEditingLog(null);
      } else {
        console.error('Failed to update log:', res.data.message);
      }
    } catch (error) {
      console.error('Error updating log:', error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="admin-container">
      <h1>Welcome Admin, here is the information</h1>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Name" 
          value={searchTerm.name} 
          onChange={(e) => setSearchTerm({ ...searchTerm, name: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Class" 
          value={searchTerm.class} 
          onChange={(e) => setSearchTerm({ ...searchTerm, class: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Section" 
          value={searchTerm.section} 
          onChange={(e) => setSearchTerm({ ...searchTerm, section: e.target.value })} 
        />
        <button onClick={handleSearch}><FaSearch /></button>
      </div>

      <div className="table-section">
        <h2><FaUserGraduate className="icon-large" /> Student Signups</h2>
        <table className="info-table">
          <thead>
            <tr>
              <th><FaUserGraduate className="icon" /> Name</th>
              <th><FaEnvelope className="icon" /> Email</th>
              <th><FaPhone className="icon" /> Phone Number</th>
              <th><FaCalendarAlt className="icon" /> Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {studentLogs.map((log) => (
              <tr key={log._id}>
                <td>{log.name}</td>
                <td>{log.email}</td>
                <td>{log.phoneNumber}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteLog(log.email, 'student')}>Delete</button>
                  <button className="update-btn" onClick={() => startEditing(log)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="table-section">
        <h2><FaChalkboardTeacher className="icon-large" /> Teacher Signups</h2>
        <table className="info-table">
          <thead>
            <tr>
              <th><FaChalkboardTeacher className="icon" /> Name</th>
              <th><FaEnvelope className="icon" /> Email</th>
              <th><FaPhone className="icon" /> Phone Number</th>
              <th><FaCalendarAlt className="icon" /> Timestamp</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {teacherLogs.map((log) => (
              <tr key={log._id}>
                <td>{log.name}</td>
                <td>{log.email}</td>
                <td>{log.phoneNumber}</td>
                <td>{new Date(log.timestamp).toLocaleString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteLog(log.email, 'teacher')}>Delete</button>
                  <button className="update-btn" onClick={() => startEditing(log)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingLog && (
        <div className="edit-form">
          <input type="text" name="name" value={editingLog.name} onChange={handleEditChange} />
          <input type="email" name="email" value={editingLog.email} onChange={handleEditChange} />
          <input type="text" name="phoneNumber" value={editingLog.phoneNumber} onChange={handleEditChange} />
          <button className="btn-save" onClick={saveEdit}>Save</button>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
