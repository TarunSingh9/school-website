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
        { test: "FA-4", obtained: 85, total: 100 },
      ],
    },
    finalPerformance: "Excellent", // Options: "Do hard work", "Good", "Excellent"
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
    <div className="report-container">
      <h1 className="title">🎓 Student Performance Report 🎓</h1>
      <h2 className="student-name">{student.name}</h2>

      <section className="section">
        <h3>📘 Half Year & Final Exam 📘</h3>
        <div className="exam-scores">
          <p>
            <strong>SA-1 (Half Year):</strong> {student.performance.SA1.obtained}/{student.performance.SA1.total}
          </p>
          <p>
            <strong>SA-2 (Final Exam):</strong> {student.performance.SA2.obtained}/{student.performance.SA2.total}
          </p>
        </div>
      </section>

      <section className="section">
        <h3>📝 Monthly Test Reports 📝</h3>
        <div className="exam-scores">
          {student.performance.FA.map((test, index) => (
            <p key={index}>
              <strong>{test.test}:</strong> {test.obtained}/{test.total}
            </p>
          ))}
        </div>
      </section>

      <section className="section">
        <h3>🌟 Final Performance 🌟</h3>
        <p className={`final-performance ${getPerformanceColor(student.finalPerformance)}`}>
          {student.finalPerformance} Performance
        </p>
      </section>
    </div>
  );
};

export default StudentReportCard;
