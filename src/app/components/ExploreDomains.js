import React from 'react'
import { motion } from 'framer-motion'
import { TypingText } from './CustomText'
import { fadeIn } from '../utils/motion';
import { Poppins } from 'next/font/google';
import { Card, CardBody, CardHeader } from '@nextui-org/react';
import { exploreDomains } from '../../../constants/constants';

const poppins = Poppins({
   subsets: ['latin'],
   weight: "300"
})

function ExploreDomains() {
   return (
      <>
         <div className="z-10 mt-[20px] text-lg sm:text-xl flex flex-col gap-6 text-white w-[90vw]">
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
               <TypingText title="| Explore " textStyles="text-center text-md sm:text-xl" />
               <motion.p
                  variants={fadeIn('right', 'tween', 0.2, 1)} // Modify the direction to 'right'
                  className="mt-[8px] font-normal text-center text-lg sm:text-xl lg:text-2xl"
               >
                  <span>
                     Arithemania 3.0 will feature a variety of domains, each with its own unique set of challenges. Participants will have the opportunity to choose from a range of domains, including:
                  </span>
               </motion.p>
            </motion.div>
            <div className="w-[90vw] h-fit flex justify-center">
               <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {
                     exploreDomains.map((domain, index) => {
                        return <motion.li
                           key={index}
                           variants={fadeIn('right', 'tween', 0.2, 1)} // Modify the direction to 'right'
                           whileHover={{ 
                              scale: 1.035,
                              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
                           }}

                           initial={{
                              opacity: 0,
                              x: (index % 2 === 0) ? -50 : 50
                           }}

                           whileInView={{
                              opacity: 1,
                              x: 0
                           }}

                           viewport={{ once: true }}
                           transition={{ duration: 1 }}
                        >
                           <Card className={`${poppins.className} w-full h-full p-4 bg-[#260143] border-2 border-b-0 border-r-0 border-violet-800 text-white`}>
                              <CardHeader className='text-lg sm:text-xl'>
                                 {domain.title}
                              </CardHeader>
                              <CardBody className='text-md sm:text-lg'>
                                 {domain.content}
                              </CardBody>
                           </Card>
                        </motion.li>
                     })
                  }
               </ul>
            </div>
         </div >
      </>
   )
}

export default ExploreDomains