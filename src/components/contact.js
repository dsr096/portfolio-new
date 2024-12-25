import React from 'react';
import './contact.css';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div className="contact-container">
      {/* Navbar */}
      <nav className="navbar">
        <p className="logo">Dhruv.</p>
        <ul className="navbar-links">
          <Link to="/home"><li className="nav-link">Home</li></Link>
          <Link to="/about"><li className="nav-link">About</li></Link>
          <Link to="/contact"><li className="nav-link active">Contact</li></Link>
          <Link to="/resume"><li className="nav-link">Resume</li></Link>
        </ul>
      </nav>

      {/* Contact Information */}
      <div className="contact-info">
        <div className="contact-card">
          <img
            src="https://tse1.mm.bing.net/th?id=OIP.3GB6Y2wiLRKxOfqbxXyt2wHaHa&pid=Api&P=0&h=180"
            alt="Email Icon"
            className="contact-icon"
          />
          <h3>Email</h3>
          <p>dsr0948@gmail.com</p>
        </div>
        <div className="contact-card">
          <img
            src="https://tse4.mm.bing.net/th?id=OIP.2jXgWZ1k_Q8TtUAcytK5xQHaHa&pid=Api&P=0&h=180"
            alt="Phone Icon"
            className="contact-icon"
          />
          <h3>Phone</h3>
          <p>7698610774</p>
        </div>
        <div className="contact-card">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.p6u24C8A5sAxTPZ6t2vipwHaJI&pid=Api&P=0&h=180"
            alt="Address Icon"
            className="contact-icon"
          />
          <h3>Address</h3>
          <p>Radhe Ratnam Flat E-301, near Vaikunth Cross, Vadodara</p>
        </div>
      </div>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/dsr096" target="_blank" rel="noopener noreferrer" className="social-link">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.eoZPB2gfGH-1ckaL_JSZdwHaHg&pid=Api&P=0&h=180"
            alt="GitHub Icon"
            className="social-icon"
          />
          <h3>GitHub</h3>
        </a>
        <a href="https://www.linkedin.com/in/dhruvkumar-rana-1742732a9" target="_blank" rel="noopener noreferrer" className="social-link">
          <img
            src="https://logospng.org/download/linkedin/logo-linkedin-icon-1536.png"
            alt="LinkedIn Icon"
            className="social-icon"
          />
          <h3>LinkedIn</h3>
        </a>
      </div>
    </div>
  );
}

export default Contact;
