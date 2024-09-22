import React from 'react';
import './SchoolOverview.css';

const SchoolOverview = () => {
  return (
    <div className="school-overview">
      <div className="overview-text">
        <h2>Our Mission</h2>
        <p>At R.B. Modern Public School, our mission is to provide high-quality education that fosters academic excellence, character development, and lifelong learning in a supportive and nurturing environment.</p>
        
        <h2>Our Vision</h2>
        <p>We envision a school where students thrive in a dynamic and inclusive community, becoming responsible global citizens who contribute positively to society.</p>
      </div>
      <div className="overview-image">
        <img src="https://img.freepik.com/free-vector/back-school-kids-cartoon_18591-51495.jpg?t=st=1724922589~exp=1724926189~hmac=68e0d3d97e1f26ef7897a00f5f3b8145611ed17424e4665c7b49dbb05aa96998&w=826" alt="School" />
      </div>
    </div>
  );
};

export default SchoolOverview;
