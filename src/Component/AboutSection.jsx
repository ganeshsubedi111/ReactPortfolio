import React from 'react';
import picture from '../assets/Mypic.png'
import './AboutSection.css';
const AboutSection = ({ heading, subheading }) => {
  return (
    <div className='AboutSection'>

      <div className="heading">
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <button className='btn'>CV</button>
      </div>
      <div className="imagesection">
        <img src={picture} alt="About Section" />
      </div>
    </div>

  );
}
export default AboutSection;
