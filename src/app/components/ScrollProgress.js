import { motion, useScroll, useSpring } from 'framer-motion';
import React from 'react'

function ScrollProgress() {
   const { scrollYProgress } = useScroll();
   const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
   });

   return (
      <>
         <motion.div className="fixed top-0 left-0 right-0 h-[4px] bg-violet-500 z-20" style={{
            transformOrigin: "0%",
            scaleX
         }} />
      </>
   )
}

export default ScrollProgress