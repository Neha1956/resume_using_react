
//import React, { useRef } from 'react';
/*import html2pdf from 'html2pdf.js';

//import { Link } from 'react-router-dom';
//import './App.css'// Ensure this is uncommented 

const Resume = () => {
 // const resumeRef = useRef();

  const downloadResume = () => {
    const element = document.getElementById('resume-content');
    const options = {
      filename:     'resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <>
    <div className='bg'>
      <div className='cv'>
    <button onClick={downloadResume} className="btn btn-warning btn-outline-success fs-5 mb-1 ml-4 ">
  Download CV
</button></div>
      <div className="container" id="resume-content">




       </div>

        </div>
    </>
  )
}

export default Resume*/

import  { useRef } from 'react';
import html2pdf from 'html2pdf.js';
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons

const Resume = () => {
  const resumeRef = useRef();

  const downloadResume = () => {
    const element = resumeRef.current;
    const options = {
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 }, // Higher scale for better quality
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().from(element).set(options).save();
  };

  return (
    <div className="bg">
      <div className="cv">
        <button onClick={downloadResume} className="btn btn-warning fs-5 mb-1 ml-4">
          Download CV
        </button>
      </div>

      {/* Resume Content */}
      <div className=" p-2 border shadow" id="resume-content" ref={resumeRef}>
        <h2 className="text-center">Neha Kumari</h2>
        <p className="text-center">Web Developer | React | Node.js</p>
        <div className="d-flex  gap-3 container" >
          <span> <FaPhone /></span><p> 8252059036</p>
          <span> <FaEnvelope /></span><p> nehagarhwa5@gmail.com</p>
          <span>
          <FaLinkedin /> </span><p> <a href="https://www.linkedin.com/in/neha-k-b28487278" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <span>
          <FaGithub /> </span><p><a href="https://github.com/testsgithubsrit" target="_blank" rel="noopener noreferrer">GitHub</a>
          </p>
        </div>

       
        <h5>Objective</h5>
        <hr />
        <p>Aspiring MERN Stack Developer, currently in the final year of my Diploma in Computer Science. Passionate about building scalable web applications and continuously improving my skills in MongoDB, Express.js, React, and Node.js. Currently learning  Seeking an internship or entry-level job where I can apply my knowledge, gain real-world experience, and learn from industry professionals to grow into a proficient full-stack developer.</p>

        <h5> Education</h5>
        <hr/>
        <ul className="text-start d-inline-block">
          <li className='pb-' ><strong >Diploma in Computer Science</strong> - Garhwa Polytechnic <span className='first'>( Expected July 2025 )</span></li>
          <li><strong>Matriculation( JAC Board)</strong> - UP Graded High School<span className='second'> ( 2021 ) | Marks: 81.20%</span></li>
        </ul>

        <h5>Skills</h5>
        <hr/>
        <ul className="text-start d-inline-block">
          <li><b>Programming Languages:</b> Java , JavaScript</li>
          <li><b>Web Development:</b> HTML, CSS, React.js, Node.js,Express.js ,Bootstrap</li>
          <li><b>Database: </b>MongoDB</li>
        </ul>

        <h5> Projects</h5>
        <hr/>
       
        <strong>Weather Web App </strong> | React.js, Bootstap,weather API<br/>
        <ul className="text-start d-inline-block">
          <li>Built a responsive weather application that fetches real-time weather data using the OpenWeather API.</li>
          <li>Users can search for weather conditions in any city,
          Displays temperature, humidity, wind speed, and weather conditions ,
          Real-time API integration for live weather updates</li>
          </ul ><br/>
          <strong>Food Ordering Web App</strong> | MERN Stack <br/>
          <ul className="text-start d-inline-block">
          <li> Developed a full-stack food ordering responsive web application with user authentication and order management.</li>
          <li>User Authentication: Secure login and registration using JWT authentication</li>
          <li>Add to Cart: Users can add food items to their cart before checkout</li>
          <li>Checkout & Order Management: Orders are saved in MongoDB, and users can view their order history</li>
         
        </ul>
 <h5>Internship</h5>
        <hr />
        <strong>Frontend Delevopment Intern</strong> – Unified Mentor (online) <i>15-05-2024 to 15-06-2024  </i>
        <ul className="text-start d-inline-block">
          <li>Developed responsive and interactive user interfaces using React.js, HTML, CSS, and JavaScript</li>
          <li>Worked on state management, API integration, and reusable React components</li>
         </ul>
         </div>
    </div>
  );
};

export default Resume;

