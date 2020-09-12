import React from "react";
import { motion } from "framer-motion";
const Introduction: React.FC = () => {



  return (
    <div className="Introduction">
      <motion.div
        initial={{ x: '-100vw' }}
        transition={{ duration: 3 }}
        animate={{ x: 0 }}
      >

        <h1 className="myReact">React </h1>
      </motion.div>
      <motion.div
        initial={{ x: '100vw' }}
        transition={{ duration: 3, delay: 1 }}
        animate={{ x: 0 }}
      >

        <h1 className="projects">Projects</h1>
      </motion.div>
      <h2 className='personal'>Johnny Front-end developer</h2>
      <hr />
      <div>
        <svg id="icon" viewBox="0 0 800 600">
          <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
          <path d="M300,320 L540,320" id="middle"></path>
          <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
        </svg>
      </div>
    </div>
  )

}
export default Introduction;
