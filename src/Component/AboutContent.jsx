import './AboutContent.css'
import React from 'react';
import {Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const AboutContent = () => {
  return (
    <div className='AboutContent'>
      <div className="left">
       <h1>Who am i ?</h1>
       <p>I'm Ganesh Subedi, an undergraduate student of Computer Science and Information Technology (CSIT) at Tribhuvan University. I am passionate about frontend development, with a particular interest in React. I have also experience in graphic design and web development using  HTML, CSS, JavaScript, and PHP I am always looking to improve my skills and stay updated with the latest trends and technologies in web development. . I'm highly motivated and continuously learning to improve my skills. I am excited to pursue a career in frontend  and backend development, where I can use my skills to create impactful and meaningful applications.As a hardworking and motivated individual, I am committed to delivering high-quality work to my clients.</p>

       <Link to='/contact'>
       <button className='btn'>contact</button></Link> 
      </div>
      <div className="right">
       <h1>What i am Doing?</h1>
        <div className="web">
        <FontAwesomeIcon icon={faLaptopCode} className='fa-icon' />
         <h2>Web Development</h2>
         
         <p> Doing Frontend and backend development Using Reactjs </p>
        </div>
        <div className="android">
        <FontAwesomeIcon icon={faAndroid} className='fa-icon' />
        <h2>Android App Development</h2>
        <p>Learning android app development using flutter and React native.</p>
        </div>
      
      </div>
    </div>
  );
}

export default AboutContent;
