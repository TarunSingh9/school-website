import React, { useState } from 'react';
import './AcademicSchedule.css';

const AcademicSchedule = () => {
  const [showSummer, setShowSummer] = useState(true);

  const summerRoutine = (
    <table className="routine-table">
      <thead>
        <tr>
          <th>Summer Timing</th>
          <th>Routine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>8:00 AM - 9:00 AM</td>
          <td>Mathematics</td>
        </tr>
        <tr>
          <td>9:00 AM - 10:00 AM</td>
          <td>Science</td>
        </tr>
        <tr>
          <td>10:00 AM - 11:00 AM</td>
          <td>English</td>
        </tr>
        <tr>
          <td>11:00 AM - 12:00 PM</td>
          <td>Physical Ed.</td>
        </tr>
        <tr>
          <td>12:00 PM - 1:00 PM</td>
          <td>Lunch</td>
        </tr>
        <tr>
          <td>1:00 PM - 2:00 PM</td>
          <td>History</td>
        </tr>
        <tr>
          <td>2:00 PM - 3:00 PM</td>
          <td>Art</td>
        </tr>
      </tbody>
    </table>
  );

  const winterRoutine = (
    <table className="routine-table">
      <thead>
        <tr>
          <th>Winter Timing</th>
          <th>Routine</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>9:00 AM - 10:00 AM</td>
          <td>Mathematics</td>
        </tr>
        <tr>
          <td>10:00 AM - 11:00 AM</td>
          <td>Science</td>
        </tr>
        <tr>
          <td>11:00 AM - 12:00 PM</td>
          <td>English</td>
        </tr>
        <tr>
          <td>12:00 PM - 1:00 PM</td>
          <td>Physical Ed.</td>
        </tr>
        <tr>
          <td>1:00 PM - 2:00 PM</td>
          <td>Lunch</td>
        </tr>
        <tr>
          <td>2:00 PM - 3:00 PM</td>
          <td>History</td>
        </tr>
        <tr>
          <td>3:00 PM - 4:00 PM</td>
          <td>Art</td>
        </tr>
      </tbody>
    </table>
  );

  return (
    <div className="academic-schedule">
      <h2>Academic Structure</h2>
      <div className="buttons">
        <button onClick={() => setShowSummer(true)}>Summer Routine</button>
        <button onClick={() => setShowSummer(false)}>Winter Routine</button>
      </div>
      <div className="routine-container">
        {showSummer ? summerRoutine : winterRoutine}
      </div>
    </div>
  );
};

export default AcademicSchedule;
