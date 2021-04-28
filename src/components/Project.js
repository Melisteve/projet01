import Item from 'antd/lib/list/Item';
import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';


const Project = (props) => {
    const [currentProject] = useState(projectsData);
    const project = currentProject[props.projectNumber]

   //dimension du cercle 
   let left = Math.floor(Math.random() * 200 + 700 ) + "px";
   let top = Math.floor(Math.random() * 200 + 150 ) + "px";
   let size = "scale(" + (Math.random() + 0.7) + ")";
   

//console.log(project)
    return(
     <div className="project-main">
         <div className="project-content">
             <h1>{project.title}</h1>
             <p>{project.date}</p>
             <ul className="languages">
            {project.languages.map((Item) => {
                return <li key={Item}>{Item}</li>
            })}
             </ul>
         </div>
         <div className="img-content">
           <div className="img-container hover">
            <span>
                <h3>{project.title}</h3>
                <p>{project.infos}</p>
            </span>
            <img src={project.img} alt={project.title}/>
           </div>
           <div className="button-container">
           <a href={project.link} targegt="_blank" rel="noopener noreferrer" className="hover">
                <span className="button">voir projets</span>
            </a>
         </div>
         </div>
         <span className="random-circle" style={{left, top, 
         size}}></span>
     </div>
 );
};
export default Project;