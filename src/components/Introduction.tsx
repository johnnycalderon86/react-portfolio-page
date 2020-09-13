import React from "react";
import { motion } from "framer-motion";
import logo from '../logo.svg'
const Introduction: React.FC = () => {



  return (
    <div className="Introduction">
      <motion.div className="myReactDiv"
        initial={{ x: '-100vw' }}
        transition={{ duration: 2.2 }}
        animate={{ x: 0, type: 'spring' }}
      >

        <h1 className="myReact">React </h1>
      </motion.div>
      <motion.div className="projectsDiv"
        initial={{ x: '-100vw' }}
        transition={{ duration: 2, delay: 1 }}
        animate={{ x: 0 }}
      >

        <h1 className="projects">Projects</h1>
      </motion.div>
      <motion.img
        initial={{ scale: 1, opacity: 0 }}
        transition={{duration: 5}}
        animate={{ scale: 4.7 , opacity: 1}}
        src={logo} className="App-logo" alt="logo" />
      <h2 className='personal'>Johnny Front-end developer</h2>
      <div className='split-left'></div>
      <div className='split-right'></div>
    </div>
  )

}
export default Introduction;
