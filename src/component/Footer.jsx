import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="school-name">R.B Modern Public School</h2>
        <p className="school-address">
          Kadam Vihar Colony Township, Mathura, Uttar Pradesh (281006)
        </p>
        <p className="contact-numbers">
          Contact: +91 7389249023, +91 8439223434, +91 342873425
        </p>
        <div className="social-media">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebookF /> Facebook
          </a>
          <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaWhatsapp /> Whatsapp
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaInstagram /> Instagram
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaYoutube /> Youtube
          </a>
          <a href="mailto:info@school.com" className="social-icon">
            <FaEnvelope /> Mail
          </a>
        </div>
      </div>
      <p className="copyright">
        Copyright © 2024-25 R.B Modern Public School Mathura | All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
