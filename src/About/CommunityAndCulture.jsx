import React from 'react';
import './CommunityAndCulture.css';

const CommunityAndCulture = () => {
  return (
    <div className="community-culture">
      <h2>Our School Culture</h2>
      <div className="carousel">
        <div className="carousel-item">
          <img src="path-to-event1.jpg" alt="Event 1" />
          <p>Annual Sports Day</p>
        </div>
        <div className="carousel-item">
          <img src="path-to-event2.jpg" alt="Event 2" />
          <p>Science Exhibition</p>
        </div>
        <div className="carousel-item">
          <img src="path-to-event3.jpg" alt="Event 3" />
          <p>Cultural Fest</p>
        </div>
      </div>
    </div>
  );
};

export default CommunityAndCulture;
