import React from 'react';
import { Link } from 'react-router-dom';
import './QuickLinks.css'; // Ensure this CSS file exists and is styled

const QuickLinks = () => {
  return (
    <div className="quick-links-container">
      <div className="parent-card">
        <h3 className="quick-links-heading">Quick Links to connect and review</h3>
        <div className="child-cards">
          <div className="child-card">
            <img src="https://cdn.pixabay.com/photo/2016/11/29/22/02/white-male-1871436_1280.jpg" alt="Attendance" className="child-image" />
            <div className="child-content">
              <i className="icon fas fa-calendar-check"></i>
              <h3 className="Quickheading">Admission Form</h3>
              <p>Student admission form to connect.</p>
              <Link to="/AdmissionForm" className="child-link">View Details</Link>
            </div>
          </div>
          <div className="child-card">
            <img src="https://cdn.pixabay.com/photo/2017/10/25/18/10/peer-review-icon-2888794_640.png" alt="Alumni Review" className="child-image" />
            <div className="child-content">
              <i className="icon fas fa-users"></i>
              <h3 className="Quickheading">Alumni Review</h3>
              <p>Read reviews and feedback from our alumni.</p>
              <Link to="/Alumni-Review" className="child-link">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;

