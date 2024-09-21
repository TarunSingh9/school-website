import React, { useState, useEffect } from 'react';
import './AttendanceGrid.css';

function AttendanceGrid() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [attendanceData, setAttendanceData] = useState({});

  // Function to get all days in a month
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  // Get all days in the selected year, grouped by month
  const getDaysInYear = (year) => {
    const months = [];
    for (let month = 0; month < 12; month++) {
      months.push({
        month,
        days: getDaysInMonth(month, year),
      });
    }
    return months;
  };

  // Handle change in year selection
  const handleYearChange = (e) => {
    setSelectedYear(parseInt(e.target.value));
  };

  // Fetch attendance data (simulate with sample data)
  useEffect(() => {
    // Simulate attendance data for the whole year
    const sampleData = {};
    for (let month = 0; month < 12; month++) {
      const lastDay = new Date(selectedYear, month + 1, 0).getDate();
      // Simulate data:
      // - 1st day: 'present'
      // - 15th day: 'half-day'
      // - Last day: 'absent'
      // - Other days: attendance not taken (no entry in sampleData)
      const dates = {
        [new Date(selectedYear, month, 1).toISOString().split('T')[0]]: 'present',
        [new Date(selectedYear, month, 15).toISOString().split('T')[0]]: 'half-day',
        [new Date(selectedYear, month, lastDay).toISOString().split('T')[0]]: 'absent',
        // Other days are not included, representing attendance not taken
      };
      Object.assign(sampleData, dates);
    }
    setAttendanceData(sampleData);
  }, [selectedYear]);

  const daysInYear = getDaysInYear(selectedYear);

  return (
    <div className="attendance-grid-container">
      <h2>Attendance Grid - {selectedYear}</h2>
      <div className="filter-container">
        <label className='year'>
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 5 }, (_, index) => {
              const year = new Date().getFullYear() - 2 + index; // Show 5 years range
              return (
                <option value={year} key={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </label>
      </div>

      {/* Legend */}
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color present"></div>
          Present
        </div>
        <div className="legend-item">
          <div className="legend-color half-day"></div>
          Half Day
        </div>
        <div className="legend-item">
          <div className="legend-color absent"></div>
          Absent
        </div>
        <div className="legend-item">
          <div className="legend-color not-taken"></div>
          Attendance Not Taken
        </div>
      </div>

      <div className="year-grid">
        {daysInYear.map(({ month, days }) => (
          <div key={month} className="month-grid">
            <h3>{new Date(0, month).toLocaleString('default', { month: 'long' })}</h3>
            <div className="grid">
              {days.map((day) => {
                const dateString = day.toISOString().split('T')[0];
                const status = attendanceData[dateString]; // May be undefined
                return (
                  <div
                    key={dateString}
                    className={`grid-cell ${status || ''}`} // Apply status class if available
                    title={`${dateString} - ${
                      status ? status.replace('-', ' ') : 'Attendance Not Taken'
                    }`}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AttendanceGrid;
