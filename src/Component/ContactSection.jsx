import React from 'react';
import './ContactSection.css'
import image from '../assets/contact.jpg'

const ContactSection = ({ content, subcontent }) => {
  return (
    <div className='ContactSection'>
      <div className="main">
        <img src={image} alt="background-image" className="image" />
      </div>
      <div className="content">
        <h1> {content}</h1>
        <p>{subcontent}</p>
      </div>
    </div>
  );
}

export default ContactSection;
