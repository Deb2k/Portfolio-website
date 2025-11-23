"use client"
import { motion } from "framer-motion"

const Aboutpage = () => {
  return (
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:0.5}}>
      {/*CONTAINER */}
      <div>
        {/*TEXT CONTAINER */}
        <div>
        {/*Biography Container */}
        <div></div> 
        {/*Skills container */}
        <div></div> 
        </div>
        
        {/*SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  )
}

export default Aboutpage
