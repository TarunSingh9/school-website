import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Homepage.css'; // Ensure this CSS file exists and is styled
import Cards from './component/Cards';
import QuickLinks from './component/QuickLinks';


const HomePage = () => {
  useEffect(() => {
    const texts = ["Welcome to R B Modern Public School!"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let isDeleting = false;

    function type() {
      const typewriterElement = document.querySelector('.typewriter');
      if (!typewriterElement) return; // Exit if the element is not found

      currentText = texts[count];
      const speed = isDeleting ? 50 : 100;

      if (isDeleting) {
        index--;
      } else {
        index++;
      }

      typewriterElement.textContent = currentText.slice(0, index);

      if (!isDeleting && index === currentText.length) {
        setTimeout(() => {
          isDeleting = true;
          type();
        }, 3000); // Pause before deleting
      } else if (isDeleting && index === 0) {
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 500); // Pause before retyping
      } else {
        setTimeout(type, speed);
      }
    }

    type();
  }, []);

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">
        <img src="https://img.freepik.com/free-photo/happy-kids-elementary-school_53876-138141.jpg" alt="Hero" className="hero-image" />
        <div className="hero-text">
          <h1 className="typewriter">this is heading</h1>
          <p className="headingtext">Empowering the Leaders of Tomorrow</p>
          <div className="cta-buttons">
            <Link to="/about" className="cta-button">Learn More</Link>
            <Link to="/ContactUs" className="cta-button">Get in Touch</Link>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="key-features">
        <div className="feature-card">
          <i className="icon fas fa-chalkboard-teacher"></i>
          <h3 className='homeHeading'>Experienced Faculty</h3>
          <p>Learn from the best educators in the field.</p>
        </div>
        <div className="feature-card">
          <i className="icon fas fa-building"></i>
          <h3 className='homeHeading'>Modern Facilities</h3>
          <p>Explore our state-of-the-art facilities.</p>
        </div>
      </section>

      {/* About Us */}
      <section className="about-us">
        <p className='paraheading'>We are dedicated to nurturing the next generation of leaders through excellence in education and innovative teaching methods.</p>
        <div className="media">
          <video className="about-video" controls src="path-to-your-video.mp4"></video>
          {/* Or use a slideshow component */}
        </div>
      </section>

      <Cards/>

    {/* Quick Links  */}
     <QuickLinks/>

      

    </div>
  );
};

export default HomePage;

 