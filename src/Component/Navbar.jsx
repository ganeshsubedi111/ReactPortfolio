import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbarstyle.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(prevClick => !prevClick);

 

  return (
    <div className="header">
      <Link to="/">
        <h1>
          Port<strong>folio</strong>
        </h1>
      </Link>

      <ul className={click ? "nav-link active":"nav-link"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        
        
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburgerMenu" onClick={handleClick}>
        {click ? <FaTimes className="my-icon" /> : <FaBars className="my-icon"  />}
      </div>
    </div>
  );
}

export default Navbar;