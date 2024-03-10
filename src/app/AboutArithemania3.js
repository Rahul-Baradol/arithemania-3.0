import React from 'react'
import { motion } from 'framer-motion'
import { Poppins } from 'next/font/google';

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
            className={`${poppins.className} text-white text-2xl w-[90vw]`}
         >
            Announcing ARITHEMANIA 3.0, our flagship event! Prepare for a distinctive hackathon experience unlike any other. Scheduled for the 12th and 13th of April, this 30-hour on-campus hackathon promises a blend of excitement, skill enhancement, and engaging games. Distinguished as the pioneer in Mathematics hackathons, ARITHEMANIA challenges participants to showcase their prowess in both arithmetic and coding. This event stands out as a unique opportunity for participants to leverage applied mathematics, contributing to real-world impact.
{/* 
            This remarkable hackathon is based on the theme of Computational mathematics which paves the way for unparalleled innovation.

            Envision an audience of around 10,000 students, eagerly anticipating the revelation of groundbreaking solutions. This event provides a unique platform to invest in transformative ideas and pioneering solutions.

            We've had two very successful iterations of Arithemania with engaging elements like jackpot questions where participants compete to crack questions curated by the club members, and a thrilling treasure hunt based on maths for the participants to win prizes. With such overwhelming response from the previous events we're assured that the 3rd iteration will be bigger and better with an enigmatic experience */}

         </motion.div>
      </>
   )
}

export default AboutArithemania3;