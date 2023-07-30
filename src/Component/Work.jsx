import React from 'react';
import './MyWork.css';
import MyWork from './MyWork';
import MyWorkData from './MyWorkData';

const Work = () => {
    return (
        <div className='Work-container'>
            <h1 className="work-title">Projects</h1>
            <div className="project-container">
                {
                    MyWorkData.map((val,index)=>{
                        return(
                            <MyWork 
                            key={index}
                            img={val.img}
                            title={val.title}
                            Description={val.Description}
                            view={val.view}
                            />
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Work;
