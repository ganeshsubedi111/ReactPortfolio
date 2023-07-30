
import React from 'react';
import './ContactForm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarker, } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
const ContactForm = () => {
    return (
        <div className='ContactForm'>
            <div className='ContactInfo'>

                <h1>Contact Information</h1>
                <div className='icon'>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <p>abcxyz@gmail.com</p>
                </div>

                <div className='icon'>
                    <FontAwesomeIcon icon={faPhone} />
                    <p>+0061254</p>
                </div>
                <div className='icon'>
                    <FontAwesomeIcon icon={faMapMarker} />

                    <p> Nepal</p>
                </div>
                <div className='SocialLinks'>
                    <a href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href='https://www.linkedin.com/' target='_blank' rel='noopener noreferrer'>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </div>

            <div className="ContactRight">

                <form >
                    <label>Name</label>
                    <input type="text" placeholder='Enter your Name Here..' required />
                    <label>Email</label>
                    <input type="email" placeholder='Enter your Email Here..' required />
                    <label>Message</label>
                    <textarea type="text" placeholder='Enter your Message Here..'  required/>

                    <button className='btn'>Send</button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
