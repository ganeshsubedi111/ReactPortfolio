import React from 'react';
import './ProjectSection.css'
const ProjectSection = ({title,subtitle}) => {

  return (
    <div className='ProjectSection'>
      <div className="Title">
       <h1> {title}</h1>
       <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default ProjectSection;
