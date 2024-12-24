import React, { useState, useEffect } from 'react';
import { FaCheck, FaPlus, FaSadTear, FaSmile } from 'react-icons/fa';
import './Attendance.css';

const Attendance = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);
  const [attendanceStatus, setAttendanceStatus] = useState(Array(12).fill(false));
  const [showNewAttendance, setShowNewAttendance] = useState(false);
  const [studentCount, setStudentCount] = useState(1);
  const [studentList, setStudentList] = useState([{ id: 1, name: '', status: 'Present' }]);
  const [attendanceData, setAttendanceData] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAttendanceStatus(Array(12).fill(false));
    }, 86400000); // Reset every 24 hours

    return () => clearInterval(interval);
  }, []);

  const handleClassSelect = (classNumber) => {
    setSelectedClass(classNumber);
    setSelectedSection(null);
    setShowNewAttendance(false);
    setAttendanceData(null);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setShowNewAttendance(false);
    setAttendanceData(null);
  };

  const handleTakeAttendance = async () => {
    try {
      const response = await fetch(`/api/attendance/fetch?class=${selectedClass}&section=${selectedSection}`);
      if (response.ok) {
        const data = await response.json();
        setAttendanceData(data);
        let updatedStatus = [...attendanceStatus];
        updatedStatus[selectedClass - 1] = true;
        setAttendanceStatus(updatedStatus);
      } else {
        alert("No attendance record found for this class and section.");
      }
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const handleNewAttendance = () => {
    setShowNewAttendance(true);
    setStudentCount(1);
    setStudentList([{ id: 1, name: '', status: 'Present' }]);
  };

  const handleAddRow = () => {
    setStudentCount(studentCount + 1);
    setStudentList([...studentList, { id: studentCount + 1, name: '', status: 'Present' }]);
  };

  const handleSave = async () => {
    try {
      const attendanceData = {
        class: selectedClass,
        section: selectedSection,
        totalStudents: studentList.length,
        students: studentList.map(({ name, status }) => ({ name, status }))
      };

      const response = await fetch('/api/attendance/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(attendanceData)
      });

      if (response.ok) {
        alert("Attendance saved in both Newattend and Fullattend logs.");
        setShowNewAttendance(false);
      } else {
        alert("Failed to save attendance.");
      }
    } catch (error) {
      console.error("Error saving attendance:", error);
    }
  };

  return (
    <div className="attendance-container">
      <h1>Admin, Choose Your Classes</h1>
      
      <div className="class-grid">
        {[...Array(12).keys()].map((i) => (
          <div 
            key={i} 
            className={`class-card ${selectedClass === i + 1 ? 'selected' : ''}`} 
            onClick={() => handleClassSelect(i + 1)}
          >
            <h4>Class {i + 1}</h4>
            <span className="attendance-emoji">
              {attendanceStatus[i] ? <FaSmile color="green" /> : <FaSadTear color="red" />}
            </span>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div className="section-buttons">
          <button 
            className={`section-button ${selectedSection === 'A' ? 'active' : ''}`} 
            onClick={() => handleSectionSelect('A')}
          >
            Section A
          </button>
          <button 
            className={`section-button ${selectedSection === 'B' ? 'active' : ''}`} 
            onClick={() => handleSectionSelect('B')}
          >
            Section B
          </button>
        </div>
      )}

      {selectedClass && selectedSection && (
        <div className="action-buttons">
          <button className="action-button" onClick={handleTakeAttendance}>
            <FaCheck /> Take Attendance
          </button>
          <button className="action-button" onClick={handleNewAttendance}>
            <FaPlus /> New Attendance
          </button>
        </div>
      )}

      <div className="tables-container">
        {showNewAttendance && (
          <div className="attendance-table">
            <h3>Class {selectedClass}, Section {selectedSection}</h3>
            <h3>Number of total students: {studentCount}</h3>
            <table>
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Name of Student</th>
                  <th>Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                {studentList.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td><input type="text" placeholder="Enter student name" value={student.name} onChange={(e) => {
                      const updatedList = [...studentList];
                      updatedList[index].name = e.target.value;
                      setStudentList(updatedList);
                    }} /></td>
                    <td>
                      <select value={student.status} onChange={(e) => {
                        const updatedList = [...studentList];
                        updatedList[index].status = e.target.value;
                        setStudentList(updatedList);
                      }}>
                        <option>Present</option>
                        <option>Absent</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="table-buttons">
              <button className="table-add-button" onClick={handleAddRow}>Add</button>
              <button className="table-save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        )}

        {attendanceData && (
          <div className="attendance-table">
            <h3>Fetched Attendance for Class {selectedClass}, Section {selectedSection}</h3>
            <h3>Number of total students: {attendanceData.length}</h3>
            <table>
              <thead>
                <tr>
                  <th>S. No</th>
                  <th>Name of Student</th>
                  <th>Attendance Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((student, index) => (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Attendance;
