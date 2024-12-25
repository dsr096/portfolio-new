import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="about-container">
      {/* Navbar */}
      <nav className="navbar">
        <p className="logo">Dhruv.</p>
        <ul className="navbar-links">
          <Link to="/home">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-link active">About</li>
          </Link>
          <Link to="/contact">
            <li className="nav-link">Contact</li>
          </Link>
          <Link to="/resume">
            <li className="nav-link">Resume</li>
          </Link>
             
        </ul>
      </nav>

      {/* About Content */}
      <div className="about-content">
        {/* Summary Section */}
        <section className="summary-section">
          <h1 className="section-title">Summary</h1>
          <p className="section-content">
            Motivated and detail-oriented Junior Frontend Web Developer with a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React. Eager to learn and implement new technologies to solve real-world problems effectively. Dedicated to delivering high-quality solutions and enhancing user experiences.
          </p>
        </section>

        {/* Education Section */}
        <section className="education-section">
          <h1 className="section-title">Education</h1>
          <ul className="education-list">
            <li>
              <b>Degree:</b> B.Tech
            </li>
            <li>
              <b>Branch:</b> Computer Science and Engineering
            </li>
            <li>
              <b>College:</b> Parul Institute Of Engineering And Technology
            </li>
            <li>
              <b>CGPA:</b> 8.03
            </li>
          </ul>
        </section>

        {/* Skills Section */}
        <section className="skills-section">
          <h1 className="section-title">Skills</h1>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
            <li>Java Programming</li>
            <li>Problem Solving</li>
            <li>Git and GitHub</li>
          </ul>
        </section>

        {/* Projects Section */}
        <section className="projects-section">
          <h1 className="section-title">Projects</h1>
          <ul className="projects-list">
           <a href="https://weather-app-tan-xi-87.vercel.app/" target="_blank" rel="noreferrer"> <li>Weather Website</li></a>
            <a target="_blank" rel="noreferrer" href="https://tic-tac-toe-green-mu-11.vercel.app/"><li>Tic-Tac-Toe Game</li></a>
          <a  target="_blank" rel="noreferrer" href="https://snakegame-alpha-steel.vercel.app/"><li>Snake Game</li></a>
           <a  target="_blank" rel="noreferrer" href="https://note-application-using-reactjs-xump.vercel.app/"><li>Note Application</li></a>
           <a  target="_blank" rel="noreferrer" href="https://calculator-rho-lyart.vercel.app/"><li>Basic Calculator Website</li></a>
         <a  target="_blank" rel="noreferrer" href="https://agecalc-theta.vercel.app/"><li>Age Calculator</li></a>
           <a  target="_blank" rel="noreferrer" href="https://quiz-application-using-react-js-yazu.vercel.app/"><li>Quiz Application</li></a>
           <a  target="_blank" rel="noreferrer" href="https://recipe-app-using-reactjs.vercel.app/"><li>Basic Recipe website</li></a>
         <a  target="_blank" rel="noreferrer" href="https://to-do-list-phi-ebon.vercel.app/"><li>To Do List website</li></a>
          </ul>
        </section>

        {/* Languages Section */}
        <section className="languages-section">
          <h1 className="section-title">Languages</h1>
          <ul className="languages-list">
            <li>English</li>
            <li>Gujarati</li>
            <li>Hindi</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
