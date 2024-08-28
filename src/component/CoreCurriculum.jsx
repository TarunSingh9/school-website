import React from 'react';
import './CoreCurriculum.css';

const CoreCurriculum = () => {
  return (
    <div className="core-curriculum-container">
      <h2 className="curriculum-heading">Core Curriculum</h2>
      <div className="card-container">
        <div className="Corecard stage-1">
          <h2>Stage 1: Playgroup to 5th Class</h2>
          <h3>Fully English Medium Education</h3>
          <ul>
            <li>Introduction to Technology: Basic Computer Skills</li>
            <li>General Knowledge: Expanding Horizons</li>
            <li>Personality Development: Physical Activities & Sports</li>
            <li>Holistic Development: Art, Music, Craft</li>
            <li>Interactive Learning: Smart Classes & Engaging Methods</li>
            <li>Moral Education: Stories & Values</li>
          </ul>
        </div>
        <div className="Corecard stage-2">
          <h2>Stage 2: Class 6th to 10th</h2>
          <h3>CBSE Curriculum</h3>
          <ul>
            <li>Subject Specialization: Core Academic Subjects</li>
            <li>Technology Integration: Advanced Computer Science</li>
            <li>Continuous Assessment: Regular Projects & Exams</li>
            <li>Skill Development: Workshops & Co-Curricular Activities</li>
            <li>Career Guidance: Early Career Counseling</li>
            <li>Extracurricular Participation: Inter-School Competitions</li>
          </ul>
        </div>
        <div className="Corecard stage-3">
          <h2>Stage 3: Class 11th to 12th</h2>
          <h3>UP Board Curriculum & Stream Selection</h3>
          <ul>
            <li>Stream Selection After 10th: Biology (PCB) or Math (PCM)</li>
            <li>Science Focus: Specialized Subjects in 11th & 12th</li>
            <li>Lab Facilities: Practical Learning in Well-Equipped Labs</li>
            <li>Competitive Exam Preparation: NEET & JEE Coaching</li>
            <li>Physical Education: Promoting a Healthy Lifestyle</li>
            <li>Leadership Development: Student Council & Workshops</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CoreCurriculum;
