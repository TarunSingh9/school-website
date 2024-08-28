import React from 'react';
import './css/Event.css';

const Event = () => {
  return (
    <div className="event-page">
      <h2 className="Eventheading">School Annual Day Celebration</h2>
      <h3 className="event-subheading">Join Us for a Day of Fun and Learning</h3>
      <div className="event-content">
        <div className="event-card">
          <img src="https://img.freepik.com/free-psd/new-year-concept-banner-template_23-2148789121.jpg?semt=ais_hybrid" alt="School Event" className="event-image" />
          <p className="event-description">
            Our Annual Day celebration will be a day filled with performances, awards, and much more. Don't miss it!
          </p>
        </div>
        <div className="event-card">
          <video className="event-video" controls>
            <source src="event-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="event-description">
            Watch the highlights from last year's event to get a taste of what's to come!
          </p>
        </div>
      </div>
      there is second part
    </div>
  );
};

export default Event;
