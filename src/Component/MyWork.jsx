import React from 'react';
import { NavLink } from 'react-router-dom';
import './MyWork.css';


const MyWork = (props) => {
    return (
        <div className="project-image">
                    <img src={props.img} alt="Project" />
                    <h2 className='Project-Title'>{props.title}</h2>
                    <div className="project-detail">
                        <p>{props.Description}</p>
                        <div className="Project-btn">
                            <NavLink to={props.view }className="btn">View</NavLink>
                            
                        </div>
                    </div>

                    
                </div>
    );
}

export default MyWork;
