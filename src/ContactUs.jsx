import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import './css/ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-wrapper">
      {/* Heading */}
      <h2 className="contact-heading">Contact Us</h2>

      {/* Contact Cards */}
      <div className="contact-cards-container">
        <div className="contact-card">
          <FaMapMarkerAlt className="contact-icon" />
          <h3>OUR MAIN OFFICE</h3>
          <p>Kadam Vihar Colony Township</p>
          <p>Mathura, Uttar Pradesh (281006)</p>
        </div>
        <div className="contact-card">
          <FaPhoneAlt className="contact-icon" />
          <h3>PHONE NUMBER</h3>
          <p>234-9876-5400</p>
          <p>888-0123-4567 (Toll Free)</p>
        </div>
        <div className="contact-card">
          <FaInstagram className="contact-icon" />
          <h3>INSTAGRAM PAGE</h3>
          <p>@RBModernSchool</p>
        </div>
        <div className="contact-card">
          <FaEnvelope className="contact-icon" />
          <h3>EMAIL</h3>
          <p>hello@rbmodernschool.com</p>
        </div>
      </div>

      {/* Contact Form and Description */}
      <div className="contact-info-container">
        <div className="contact-form-card">
          <form className="contact-form">
          <h2 >Any suggestions</h2>
            <input type="email" placeholder="Enter your email address" required />
            <input type="text" placeholder="Enter your Name" required />
            <textarea placeholder="Enter your message" required></textarea>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div className="contact-description-card">
          <h2>Reach Out to Us!</h2>
          <p>
            At <strong>R.B. Modern Public School</strong>, we're always here to assist you. Whether you have questions, need
            information, or want to discuss your child's education, feel free to contact us. Connect with our dedicated team via
            phone, email, or drop by our school. Your satisfaction and your child's success are our top priorities. Let's connect
            and build a brighter future together!
          </p>
          <div className="social-icons">
            <FaFacebook className="social-icon" />
            <FaTwitter className="social-icon" />
            <FaInstagram className="social-icon" />
            <FaLinkedin className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
