import React from 'react'
import '../styles/projects.css'
import { motion } from 'framer-motion'
import {projectData} from '../utils/data'
import ProjectCard from '../components/ProjectCard'
const containerVariants = {
    hidden: {
        opacity: 0,
        y: '100vh',
    },
    visible: {
        opacity: 0.85,
        y: 0,
        transition: {
            type: 'tween', delay: 0.2, duration: 1
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            ease: 'easeInOut'
        }
    }
}

export interface IProject {
    title:string;
    id:number;
    link:string;
    classname:string;
    github:string
}


const Projects = () => {
    return (
        <motion.div className="projectsContainer"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="projectContent">
            <h1 className="projectsTiTle">Projects</h1>
             
                    {projectData.map((project: IProject) =>{
                       return  <ProjectCard key={project.id} project={project}/>
                    })}
                
            </div>
        </motion.div>
    )
}

export default Projects