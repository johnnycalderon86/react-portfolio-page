import React from 'react'
import {IProject} from './Projects'
type Props ={
project : IProject
}



 const ProjectCard:React.FC<Props> = ({project}) => {
    return (
        <div className="ProjectCard">
            <h3>{project.title}</h3>
           
        </div>
    )
}
export default ProjectCard