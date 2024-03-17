import React from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google';
import { TypingText } from './CustomText';
import { fadeIn } from '../utils/motion';

const poppins = Poppins({
   subsets: ['latin'],
   weight: "300"
})

function AboutArithemania3() {
   return (
      <>
         <motion.div
            initial={{
               opacity: 0,
               y: 50
            }}

            whileInView={{
               opacity: 1,
               y: 0
            }}

            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className={`${poppins.className} z-10 text-white w-[90vw] flex flex-col gap-2`}
         >
            <TypingText title="|  About Arithemania 3.0" textStyles="text-center text-md sm:text-xl" />
               <motion.p
                  variants={fadeIn('up', 'tween', 0.2, 1)}
                  className="mt-[8px] font-normal text-lg sm:text-xl text-center text-secondary-white"
               >
                  <span>
                     Announcing ARITHEMANIA 3.0, our flagship event! Prepare for a distinctive hackathon experience unlike any other. Scheduled for the 12th and 13th of April, this 30-hour on-campus hackathon promises a blend of excitement, skill enhancement, and engaging games. Distinguished as the pioneer in Mathematics hackathons, ARITHEMANIA challenges participants to showcase their prowess in both arithmetic and coding. This event stands out as a unique opportunity for participants to leverage applied mathematics, contributing to real-world impact.
                  </span>
               </motion.p>
         </motion.div>
      </>
   )
}

export default AboutArithemania3;