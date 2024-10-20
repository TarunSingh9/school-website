import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Attendance.css';
import { IoMdCheckmarkCircleOutline, IoIosLogIn } from 'react-icons/io'; // Example icons
import { BiArrowBack } from 'react-icons/bi'; // Back icon

const Attendance = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/api/classes').then(res => setClasses(res.data));
  }, []);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    axios.get(`/api/students?class=${e.target.value}`).then(res => setStudents(res.data));
  };

  const markAttendance = (studentId, status) => {
    axios.post(`/api/attendance/mark`, { studentId, status })
      .then(() => alert('Attendance marked'));
  };

  return (
    <div className="attendance-container">
      <h2 className="attendance-title">Student Attendance Tracker</h2>
      <p className="attendance-subtitle">Keep track of attendance records effortlessly, ensuring every student’s presence is accounted for.</p>
      <select className="class-selector" onChange={handleClassChange} value={selectedClass}>
        {classes.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
      </select>
      <table className="student-table">
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Student Name</th>
            <th>Phone Number</th>
            <th>Attendance</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id}>
              <td>{index + 1}</td>
              <td>{student.name}</td>
              <td>{student.phone}</td>
              <td>
                <button
                  className="mark-present"
                  onClick={() => markAttendance(student.id, 'present')}
                  title="Mark Present"
                >
                  <IoMdCheckmarkCircleOutline style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  Mark Present
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="submit-attendance"
        onClick={() => alert('Attendance submitted')}
        title="Submit Attendance"
      >
        <IoIosLogIn style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        Submit
      </button>
      <button
        className="back-button"
        onClick={() => {/* navigation logic here */}}
        title="Go Back"
      >
        <BiArrowBack style={{ marginRight: '5px', verticalAlign: 'middle' }} />
        Back
      </button>
    </div>
  );
}

export default Attendance;
