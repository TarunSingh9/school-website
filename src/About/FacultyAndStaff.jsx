import React from 'react';
import './FacultyAndStaff.css';

const FacultyAndStaff = () => {
  return (
    <div className="faculty-staff">
      <h2>Meet Our Faculty</h2>
      <div className="faculty-grid">
        <div className="faculty-card">
          <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg" alt="Principal" />
          <h3>Dr. Rajesh Sharma</h3>
          <p>Principal</p>
        </div>
        <div className="faculty-card">
          <img src="https://img.freepik.com/free-photo/cheerful-indian-businessman-smiling-closeup-portrait-jobs-career-campaign_53876-129417.jpg?size=626&ext=jpg&ga=GA1.1.737256715.1724654428&semt=ais_hybrid" alt="Teacher" />
          <h3>Mrs. Anjali Verma</h3>
          <p>Head of Science Department</p>
        </div>
        <div className="faculty-card">
          <img src="https://img.freepik.com/free-photo/front-view-smiley-man-with-glasses-showing-thumbs-up_23-2148946244.jpg?size=626&ext=jpg&ga=GA1.1.737256715.1724654428&semt=ais_hybrid" alt="Teacher" />
          <h3>Mr. Rakesh Kumar</h3>
          <p>Math Teacher</p>
        </div>
      </div>
    </div>
  );
};

export default FacultyAndStaff;
