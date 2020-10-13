//==============================IMPORTS
import React from 'react'
import { IProject } from './Projects'
import '../styles/projectCard.css'
import { motion } from 'framer-motion'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fab)
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
const linkVariants = {
    hover: {
        scale: 1.3,
        textShadow: "0px 0px 8px rgb(255,255,255)",
       
       
    }
}
//=============================
type Props = {
    project: IProject
}

const github = <FontAwesomeIcon icon={['fab', 'github']} />

const ProjectCard: React.FC<Props> = ({ project }) => {
    const switch1 = project.classname === "formula-one" ? cardVariants : cardVariants2;
    return (
        <motion.div className={`ProjectCard ${project.classname}`}
            variants={switch1}
            initial="hidden"
            animate="visible"
        >
            <motion.a href={project.link} className="project-title"
                variants={linkVariants}
                whileHover="hover"
            >{project.title}</motion.a>
            <motion.a href={project.github} className="project-link"
                variants={linkVariants}
                whileHover="hover"
            >{github}</motion.a>



        </motion.div>
    )
}
export default ProjectCard