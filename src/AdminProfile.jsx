import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminProfile.css';


const AdminProfile = () => {
    const [studentLogs, setStudentLogs] = useState([]);
    const [teacherLogs, setTeacherLogs] = useState([]);
    const [editingLog, setEditingLog] = useState(null);
    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const [logToDelete, setLogToDelete] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/admin/logs');
            setStudentLogs(response.data.students);
            setTeacherLogs(response.data.teachers);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleEditChange = (event) => {
        const { name, value } = event.target;
        setEditingLog({ ...editingLog, [name]: value });
    };

    const saveEdit = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/api/admin/${editingLog.userType}/${editingLog.email}`, editingLog);
            if (editingLog.userType === 'student') {
                setStudentLogs(prevLogs => prevLogs.map(log => log.email === editingLog.email ? { ...log, ...response.data } : log));
            } else {
                setTeacherLogs(prevLogs => prevLogs.map(log => log.email === editingLog.email ? { ...log, ...response.data } : log));
            }
            setEditingLog(null);
        } catch (error) {
            console.error('Error updating log:', error);
        }
    };

    const handleDelete = (log, userType) => {
        setShowDeletePopup(true);
        setLogToDelete({ ...log, userType });
    };

    const confirmDelete = async () => {
        try {
            const { email, userType } = logToDelete;
            await axios.delete(`http://localhost:5000/api/admin/${userType}/${email}`);
            if (userType === 'student') {
                setStudentLogs(prevLogs => prevLogs.filter(log => log.email !== email));
            } else {
                setTeacherLogs(prevLogs => prevLogs.filter(log => log.email !== email));
            }
        } catch (error) {
            console.error('Error deleting log:', error);
        } finally {
            setShowDeletePopup(false);
            setLogToDelete(null);
        }
    };

    return (
        <div className="admin-container">
            <h1>Welcome Admin, here is the information</h1>
            <div className="table-section">
                <h2>Student Signups</h2>
                <table className="info-table">
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Timestamp</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentLogs.map((log, index) => (
                            <tr key={log.email}>
                                <td>{index + 1}</td>
                                <td>{log.name}</td>
                                <td>{log.email}</td>
                                <td>{log.phoneNumber}</td>
                                <td>{new Date(log.timestamp).toLocaleString()}</td>
                                <td>
                                    <button className="adminBtn edit-btn" onClick={() => setEditingLog({ ...log, userType: 'student' })}>Update</button>
                                    <button className="adminBtn delete-btn" onClick={() => handleDelete(log, 'student')}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <h2>Teacher Signups</h2>
                <table className="info-table">
                    <thead>
                        <tr>
                            <th>S no.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Timestamp</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teacherLogs.map((log, index) => (
                            <tr key={log.email}>
                                <td>{index + 1}</td>
                                <td>{log.name}</td>
                                <td>{log.email}</td>
                                <td>{log.phoneNumber}</td>
                                <td>{new Date(log.timestamp).toLocaleString()}</td>
                                <td>
                                    <button className="adminBtn edit-btn" onClick={() => setEditingLog({ ...log, userType: 'teacher' })}>Update</button>
                                    <button className="adminBtn delete-btn" onClick={() => handleDelete(log, 'teacher')}>Delete</button>
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
                    <button onClick={() => setEditingLog(null)}>Cancel</button>
                </div>
            )}
            {showDeletePopup && (
                <div className="popup">
                    <div className="popup-content">
                        <p>Do you confirm to delete?</p>
                        <button onClick={confirmDelete}>OK</button>
                        <button onClick={() => setShowDeletePopup(false)}>Cancel</button>
                    </div>
                </div>
            )}
            <div className='goto-card'>
       <div className="">
    <a href="student-attendence" className="categories">
        <h3>Student Attendance Tracker</h3>
    </a>
    <p className="page">Keep track of attendance records effortlessly, ensuring every student’s presence is accounted for.</p>
    <a href="student-attendence" className="page">
        Manage Attendance
        <svg  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10" width="20" height="40">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
    </a>
</div>
</div>
        </div>
    );
};

export default AdminProfile;
