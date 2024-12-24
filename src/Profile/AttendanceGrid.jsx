import React, { useState, useEffect } from 'react';
import './AttendanceGrid.css';

function AttendanceGrid() {
  const [selectedYear, setSelectedYear] = useState(2024);
  const [attendanceData, setAttendanceData] = useState({});

  // Weekday names
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

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
    const sampleData = {};
    for (let month = 0; month < 12; month++) {
      const lastDay = new Date(selectedYear, month + 1, 0).getDate();
      const dates = {
        [new Date(selectedYear, month, 1).toISOString().split('T')[0]]: 'present',
        [new Date(selectedYear, month, 15).toISOString().split('T')[0]]: 'half-day',
        [new Date(selectedYear, month, lastDay).toISOString().split('T')[0]]: 'absent',
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
        <label className="year">
          Year:
          <select value={selectedYear} onChange={handleYearChange}>
            {Array.from({ length: 5 }, (_, index) => {
              const year = new Date().getFullYear() - 2 + index;
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
          <div className="legend-color present"></div> Present
        </div>
        <div className="legend-item">
          <div className="legend-color half-day"></div> Half Day
        </div>
        <div className="legend-item">
          <div className="legend-color absent"></div> Absent
        </div>
        <div className="legend-item">
          <div className="legend-color not-taken"></div> Attendance Not Taken
        </div>
      </div>

      <div className="year-grid">
        {daysInYear.map(({ month, days }) => (
          <div key={month} className="month-grid">
            <h3>{new Date(0, month).toLocaleString('default', { month: 'long' })}</h3>
            <div className="weekdays-grid">
              {weekdays.map((weekday) => (
                <div key={weekday} className="weekday-header">
                  {weekday}
                </div>
              ))}
            </div>
            <div className="grid">
              {/* Empty cells for days before the first day of the month */}
              {Array(days[0].getDay())
                .fill(null)
                .map((_, index) => (
                  <div key={`empty-${index}`} className="grid-cell empty-cell"></div>
                ))}

              {days.map((day) => {
                const dateString = day.toISOString().split('T')[0];
                const status = attendanceData[dateString];
                return (
                  <div
                    key={dateString}
                    className={`grid-cell ${status || ''}`} // Apply status class if available
                    title={`${dateString} - ${
                      status ? status.replace('-', ' ') : 'Attendance Not Taken'
                    }`}
                  >
                    {day.getDate()}
                  </div>
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
