import React from 'react';
import './EventPage.css';

const events = [
  { id: 1, title: 'Annual Sports Day', description: 'Exciting competitions and sports activities.', imgSrc: 'https://img.freepik.com/free-photo/portrait-student-anime-style-attending-school_23-2151125389.jpg', videoSrc: '' },
  { id: 2, title: 'Science Exhibition', description: 'Showcasing innovative science projects.', imgSrc: 'https://img.freepik.com/free-photo/anime-style-house-structure_23-2151064760.jpg', videoSrc: '' },
  { id: 3, title: 'Cultural Fest', description: 'A celebration of cultures through music and dance.', imgSrc: 'https://img.freepik.com/free-photo/village-background-asset-game-2d-futuristic-generative-ai_191095-2025.jpg', videoSrc: 'cultural-fest.mp4' },
  { id: 4, title: 'Art Workshop', description: 'Creative sessions with professional artists.', imgSrc: 'https://img.freepik.com/free-photo/portrait-student-anime-style-attending-school_23-2151125389.jpg', videoSrc: '' },
  { id: 5, title: 'Debate Competition', description: 'Intellectual debates on various topics.', imgSrc: 'https://img.freepik.com/free-photo/anime-style-house-structure_23-2151064760.jpg', videoSrc: '' },
  { id: 6, title: 'Drama Festival', description: 'Theatrical performances by students.', imgSrc: 'https://img.freepik.com/free-photo/village-background-asset-game-2d-futuristic-generative-ai_191095-2025.jpg', videoSrc: 'drama-festival.mp4' },
];

const EventPage = () => {
  return (
    <div className="eventpage-card">
      <h2 className="eventpagehead">School Events</h2>
      <div className="parentpagecard">
        <div className="event-grid">
          {events.map((event) => (
            <div key={event.id} className="eventpagecard">
              <img src={event.imgSrc} alt={event.title} className="event-image" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
