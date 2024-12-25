import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <p className="logo">Dhruv.</p>
        <ul className="nav-links">
          <Link to="/home">
            <li className="nav-item active">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-item">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-item">Contact</li>
          </Link>
          <Link to="/resume">
            <li className="nav-item">Resume</li>
          </Link>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Frontend Developer</h1>
          <p className="hero-intro">
            Hi, I am <span className="highlight">Dhruv</span>, <br />
             from <span className="highlight">India</span>.
          </p>
          <Link to="/about" className="cta-button">
            Learn More About Me
          </Link>
        </div>
        <div className="hero-image">
          <img
            src="photo.jpeg"
            alt="Dhruv"
            className="profile-picture"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
