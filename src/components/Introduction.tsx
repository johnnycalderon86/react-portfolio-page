import React from "react";
import { motion } from "framer-motion";
import logo from '../logo.svg'
import{Link} from 'react-router-dom'


const h1Variant ={
  visible:{
    
  }
}


const Introduction: React.FC = () => {

  return (
    <div className="Introduction">
      <Link className="linkProjects" to="/projects" >
      <div className="myReactDiv"
        // initial={{ x: '-100vw' }}
        // transition={{ duration: 2.2 }}
        // animate={{ x: 0, type: 'spring' }}
      >

        <motion.h1 className="myReact">React </motion.h1>
      </div>
      </Link>
      <Link className="linkProjects" to="/projects" >
      <div className="projectsDiv"
        // initial={{ x: '-100vw' }}
        // transition={{ duration: 2, delay: 1 }}
        // animate={{ x: 0 }}
        >

        <h1 className="projects">Projects</h1>
      </div>
      </Link>
      
      
         <motion.img
        initial={{ scale: 1, opacity: 0 }}
        transition={{duration: 5}}
        animate={{ scale: 4.7 , opacity: 1}}
        src={logo} className="App-logo" alt="logo" />

    
     

     
     
    </div>
  )

}
export default Introduction;
