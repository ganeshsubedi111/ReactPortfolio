import React, { useEffect } from 'react';
import './HeroSection.css'

import image from '../assets/coder.jpg'
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  useEffect(() => {
    const text = document.getElementById('typing-text');
    const words = ['STUDENT', 'FRONTEND DEVELOPER', 'DESIGNER']; // An array of words to cycle 
    let wordIndex = 0;
    let letterIndex = 0;
    let typingTimeout;

    const type = () => {
      if (letterIndex === 0) {
        text.textContent = ''; // Clear the text content
      }

      if (letterIndex < words[wordIndex].length) {
        text.textContent += words[wordIndex].charAt(letterIndex);
        letterIndex++;
        typingTimeout = setTimeout(type, 80); // Set a timeout to type the next letter
      } else {
        wordIndex++;
        if (wordIndex === words.length) {
          wordIndex = 0;
        }
        letterIndex = 0;
        typingTimeout = setTimeout(type, 1000); // Set a timeout to start typing the next word
      }
    };

    typingTimeout = setTimeout(type, 1000); // Start typing after 1 second

    return () => clearTimeout(typingTimeout); // Clean up the timeout on unmounting
  }, []);
  return (
    <div className='Hero'>
      <div className="main">
       <img src={image} alt="background-image" className="image" />
      </div>

      <div className="content">
      <p>
        Hello I am  Ganesh Subedi
      </p>
      <h1>And I am a <span id="typing-text"></span> </h1>

      <div>
        <Link to="/project" className="btn">
          Projects<FaArrowRight style={{ fontSize: '0.6rem', color: 'white' }} />
        </Link>

        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
