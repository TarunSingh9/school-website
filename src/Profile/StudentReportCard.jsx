import React from "react";
import "./StudentReportCard.css";

const StudentReportCard = () => {
  const student = {
    name: "John Doe",
    performance: {
      SA1: { obtained: 85, total: 100 },
      SA2: { obtained: 90, total: 100 },
      FA: [
        { test: "FA-1", obtained: 75, total: 100 },
        { test: "FA-2", obtained: 80, total: 100 },
        { test: "FA-3", obtained: 70, total: 100 },
        { test: "FA-4", obtained: 85, total: 100 }
      ]
    },
    finalPerformance: "Excellent" // Can be "Do hard work", "Good", "Excellent"
  };

  const getPerformanceColor = (performance) => {
    switch (performance) {
      case "Do hard work":
        return "brown";
      case "Good":
        return "silver";
      case "Excellent":
        return "gold";
      default:
        return "black";
    }
  };

  return (
    <div className="report-card">
      <h1 className="title">🎓 Student Performance Report 🎓</h1>
      <div className="student-info">
        <h2>{student.name}</h2>
      </div>

      <div className="section">
        <h3>📘 Half Year & Final Exam 📘</h3>
        <div className="exam">
          <p><strong>SA-1 (Half Year):</strong> {student.performance.SA1.obtained}/{student.performance.SA1.total}</p>
          <p><strong>SA-2 (Final Exam):</strong> {student.performance.SA2.obtained}/{student.performance.SA2.total}</p>
        </div>
      </div>

      <div className="section">
        <h3>📝 Monthly Test Reports 📝</h3>
        {student.performance.FA.map((test, index) => (
          <div key={index} className="exam">
            <p><strong>{test.test}:</strong> {test.obtained}/{test.total}</p>
          </div>
        ))}
      </div>

      <div className="section">
        <h3>🌟 Final Performance 🌟</h3>
        <div className={`final-performance ${getPerformanceColor(student.finalPerformance)}`}>
          <p>{student.finalPerformance} Performance</p>
        </div>
      </div>
    </div>
  );
};

export default StudentReportCard;
