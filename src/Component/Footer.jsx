import React from 'react';
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer'>
            <div className="container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <h4>Address</h4>
                            <p>Nepal</p>

                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <h4>Phone</h4>
                            <p> +0061068542, </p>

                        </div>
                    </div>
                    <div className="email">
                        <FaMailBulk size={20} style={{ color: "white", marginRight: "2rem" }} />
                        <div>
                            <h4>Email</h4>
                            <p>xyzabc@gmail.com</p>

                        </div>
                    </div>

                </div>

                <div className="right">
                    <h4>About Myself</h4>
                    <p>
                        This is Me Ganesh Subedi Currently Enrolled In Bachelor In Computer       Science     And Information Technology .I Am A  Bsccsit Student And Enjoy Sloving Challenges And Problem
                    </p>

                    <div className="socialLink">
                        <FaFacebook size={25} style={{ color: "white",marginRight:"2rem" }} />
                        <FaInstagram size={25} style={{ color: "white",marginRight:"2rem" }} />
                        <FaLinkedin size={25} style={{ color: "white",marginRight:"2rem" }} />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All rights reserved © {new Date().getFullYear()} by Ganesh Subedi</p>
            </div>
        </div>
    )
}

export default Footer;
