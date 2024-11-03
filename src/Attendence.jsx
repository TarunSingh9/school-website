import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';

const Attendance = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/classes').then(res => {
      setClasses(res.data);
    }).catch(err => console.error("Failed to fetch classes:", err));
  }, []);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const fetchStudents = () => {
    axios.get(`http://localhost:3000/api/students?classId=${selectedClass}&option=${selectedOption}`).then(res => {
      setStudents(res.data);
    }).catch(err => console.error("Failed to fetch students:", err));
  };

  const addNewClass = () => {
    axios.post('http://localhost:3000/api/classes/new', { classId: selectedClass, option: selectedOption })
      .then(() => {
        alert('New class added');
        fetchStudents(); // Refresh student list
      }).catch(err => console.error("Failed to add new class:", err));
  };

  const markAttendance = (studentId, status) => {
    axios.post('http://localhost:3000/api/attendance/mark', { studentId, status })
      .then(response => {
        alert(`Attendance marked as ${status}`);
        fetchStudents(); // Optionally refresh student list
      })
      .catch(error => console.error('Failed to mark attendance:', error));
  };

  return (
    <div className="attendance-container">
      <h1>Student Attendance Tracker</h1>
      <div>
        <select value={selectedClass} onChange={handleClassChange}>
          {classes.map(c => (
            <option key={c._id} value={c._id}>{`Class ${c.number} - Option ${c.option}`}</option>
          ))}
        </select>
        <select value={selectedOption} onChange={handleOptionChange}>
          <option value="A">Option A</option>
          <option value="B">Option B</option>
        </select>
        <button onClick={fetchStudents}>Search</button>
        <button onClick={addNewClass}>Add New Class</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>
                <button onClick={() => markAttendance(student._id, 'present')}>Present</button>
                <button onClick={() => markAttendance(student._id, 'absent')}>Absent</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
