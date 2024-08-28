import React from 'react';
import './Cards.css';
import { FaChalkboardTeacher, FaCamera, FaBookOpen, FaBuilding, FaGlobe, FaHandshake } from 'react-icons/fa';

const Cards = () => {
  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: 'Experienced Teacher Faculty',
      description: 'Our school boasts a team of highly experienced and dedicated teachers who nurture academic growth.',
    },
    {
      icon: <FaCamera />,
      title: 'Camera Security',
      description: 'Safety is our top priority, with 24/7 camera surveillance ensuring a secure environment.',
    },
    {
      icon: <FaBookOpen />,
      title: 'Good Learning Environment',
      description: 'We foster a positive learning environment with modern resources for an enhanced educational experience.',
    },
    {
      icon: <FaBuilding />,
      title: 'Good Working Environment',
      description: 'A supportive working environment helps our faculty contribute to a vibrant school community.',
    },
    {
      icon: <FaGlobe />,
      title: 'Cultural Programs',
      description: 'Our cultural programs celebrate diversity, helping students appreciate different cultures.',
    },
    {
      icon: <FaHandshake />,
      title: 'Mentorship Programs',
      description: 'Structured mentorship pairs students with experienced mentors for academic and personal growth.',
    },
  ];

  return (
    <div className="cards-wrapper">
      <h2 className="heading">Displaying the Key Features of the School</h2>
      <div className="cards-container">
        {features.map((feature, index) => (
          <div key={index} className="card">
            <div className="icon">{feature.icon}</div>
            <h3 className="title">{feature.title}</h3>
            <p className="description">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;

