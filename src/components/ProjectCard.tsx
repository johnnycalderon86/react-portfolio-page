//==============================IMPORTS
import React from 'react'
import { IProject } from './Projects'
import '../styles/projectCard.css'
import { motion } from 'framer-motion'
//===========================Framer-Motion-Variants
const cardVariants = {
    hidden: {
        x: '100vw'
    },
    visible: {
        x: 0,
        transition: { delay: 1, type: 'spring' }
    }
}

const cardVariants2 = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x: 0,
        transition: { delay: 1.2, type: 'spring' }
    }
}
//=============================
type Props = {
    project: IProject
}


const ProjectCard: React.FC<Props> = ({ project }) => {
    const switch1 = project.classname === "formula-one" ? cardVariants : cardVariants2;
    return (
        <motion.div className={`ProjectCard ${project.classname}`}
            variants={switch1}
            initial="hidden"
            animate="visible"
        >
            <h1 className="project-title">{project.title}</h1>
            <h1 className="project-link">{project.link}</h1>


        </motion.div>
    )
}
export default ProjectCard