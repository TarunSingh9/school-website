import React from 'react';
import './AcademicExcellence.css';

const AcademicExcellence = () => {
  return (
    <div className="academic-excellence">
      <h2>Academic Excellence</h2>
      <div className="excellence-grid">
        <div className="excellence-item">
          <h3>Curriculum</h3>
          <p>We offer a well-rounded curriculum that fosters both academic and personal growth.</p>
        </div>
        <div className="excellence-item">
          <h3>Achievements</h3>
          <p>Our students consistently perform well in board exams and competitive exams, securing top positions.</p>
        </div>
        <div className="excellence-item">
          <h3>Alumni Success</h3>
          <p>Our alumni have gone on to achieve great success in various fields, making us proud.</p>
        </div>
      </div>
    </div>
  );
};

export default AcademicExcellence;
