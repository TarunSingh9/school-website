import React, { useState } from 'react';
import './AcademicSchedule.css'; // Import the CSS file

const AcademicSchedule = () => {
  const [schedule, setSchedule] = useState('summer');

  const summerTiming = [
    { time: '8:00 AM - 9:00 AM', subject: 'Mathematics' },
    { time: '9:00 AM - 10:00 AM', subject: 'Science' },
    { time: '10:00 AM - 11:00 AM', subject: 'English' },
    { time: '11:00 AM - 12:00 PM', subject: 'Physical Ed.' },
    { time: '12:00 PM - 1:00 PM', subject: 'Lunch' },
    { time: '1:00 PM - 2:00 PM', subject: 'History' },
    { time: '2:00 PM - 3:00 PM', subject: 'Art' },
  ];

  const winterTiming = [
    { time: '9:00 AM - 10:00 AM', subject: 'Mathematics' },
    { time: '10:00 AM - 11:00 AM', subject: 'Science' },
    { time: '11:00 AM - 12:00 PM', subject: 'English' },
    { time: '12:00 PM - 1:00 PM', subject: 'Physical Ed.' },
    { time: '1:00 PM - 2:00 PM', subject: 'Lunch' },
    { time: '2:00 PM - 3:00 PM', subject: 'History' },
    { time: '3:00 PM - 4:00 PM', subject: 'Art' },
  ];

  const renderTable = (data) => (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">Summer Timing</th>
            <th scope="col" className="px-6 py-3 border-l">Winter Timing</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="bg-white border-b">
              <td className="px-6 py-4">{item.time}</td>
              <td className="px-6 py-4 border-l">{item.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="academic-schedule">
      <h2>Academic Structure</h2>
      <div className="button-group">
        <button
          className={`option-button ${schedule === 'summer' ? 'active' : ''}`}
          onClick={() => setSchedule('summer')}
        >
          Summer Timing
        </button>
        <button
          className={`option-button ${schedule === 'winter' ? 'active' : ''}`}
          onClick={() => setSchedule('winter')}
        >
          Winter Timing
        </button>
      </div>
      <div className="schedule-table">
        {schedule === 'summer' ? renderTable(summerTiming) : renderTable(winterTiming)}
      </div>
    </div>
  );
};

export default AcademicSchedule;
