import React from "react";
import { motion } from 'framer-motion'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'

const imgVariant = {
  hidden: {
    opacity: 0,

  },
  visible: {
    scale: 1.9,
    opacity: 0.1,
    transition: {

      duration: 6,
    },
  }
}
const buttonVariants = {

  hover: {
    scale: 1.01,
    textShadow: "0px 0px 8px rgb(255, 255, 255)",
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: .1,
      yoyo: Infinity
    }
  }
}

const containerVariants = {

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring', delay: 0.5
    }
  },
  exit: {
    y: '-100vh',
    transition: {
      ease: 'backInOut'
    }
  }
}


const Introduction: React.FC = () => {

  return (
    <motion.div className="Introduction"
      variants={containerVariants}

      animate="visible"
      exit="exit"
    >
      <Link className="linkIntroduction" to="/projects" >
        <div className="myReactDiv"

        >
          <motion.h1 className="myReact"
            variants={buttonVariants}
            whileHover="hover">React
          </motion.h1>
        </div>
      </Link>
      <Link className="linkIntroduction" to="/projects" >
        <div className="projectsDiv">
          <motion.h1 className="projects"
            variants={buttonVariants}
            whileHover="hover"
          >Projects</motion.h1>
        </div>
      </Link>


      <motion.img src={logo} className="App-logo" alt="logo"
        variants={imgVariant}
        initial="hidden"
        animate="visible"

      />

    </motion.div>
  )

}
export default Introduction;
