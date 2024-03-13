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
               <ul className="flex flex-col gap-4">
                  {
                     exploreDomains.map((domain, index) => {
                        return <motion.li
                           key={index}
                           variants={fadeIn('right', 'tween', 0.2, 1)} // Modify the direction to 'right'
                           // whileHover={{ scale: 1.05 }}
                           // whileTap={{ scale: 0.9 }}

                           initial={{
                              opacity: 0,
                              x: -50 
                           }}

                           whileInView={{
                              opacity: 1,
                              x: 0
                           }}

                           viewport={{ once: true }}
                           transition={{ duration: 1 }}
                        >
                           <Card className='w-[90vw] h-fit p-4 bg-transparent border-2 text-white'>
                              <CardHeader>
                                 {domain.title}
                              </CardHeader>
                              <CardBody>
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