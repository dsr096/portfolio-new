import React from 'react';
import { Link } from 'react-router-dom';
import './resume.css';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Dhruv cv (2).pdf'; // Corrected: Direct path relative to the public folder
    link.download = 'Dhruv_cv.pdf'; // Name of the downloaded file
    document.body.appendChild(link); // Append link to the body
    link.click(); // Trigger the download
    document.body.removeChild(link); // Clean up the link element
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          {['home', 'about', 'contact', 'resume'].map((item) => (
            <Link key={item} to={`/${item}`}>
              <li className={`nav-item ${item === 'resume' ? 'active' : ''}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </li>
            </Link>
          ))}
        </ul>
      </nav>

      {/* Resume Section */}
      <div className="resume-section">
        <h1 className="load">Download My Resume</h1>
        <button className="down" onClick={handleDownload}><b>Download</b></button>
      </div>
    </div>
  );
};

export default Resume;
