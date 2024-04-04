import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { TypingText } from './CustomText'
import { Poppins } from 'next/font/google'
import { fadeIn } from '../utils/motion'
import { sponsors } from '../../../constants/constants'
import Image from 'next/image'

const poppins = Poppins({
   subsets: ['latin'],
   weight: "300"
})

function Sponsors() {
   return (
      <>
         <div className="overflow-hidden z-10 mt-[20px] text-lg sm:text-xl flex flex-col items-center gap-6 text-white w-screen">
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
               className={`${poppins.className} z-10 text-white w-screen flex flex-col gap-2`}
            >
               <TypingText title="| Sponsors " textStyles="text-center w-screen text-md sm:text-xl" />
            </motion.div>
            <div className="w-screen h-fit flex flex-col items-center">
               <ul className="grid grid-cols-1 gap-5">
                  {
                     sponsors.map((sponsor, index) => {
                        return <motion.li
                           key={index}
                           variants={fadeIn('right', 'tween', 0.2, 1)} // Modify the direction to 'right'
                           whileHover={{
                              scale: 1.035,
                              // boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
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
                           className='flex flex-col sm:flex-row w-[90vw] items-center justify-between gap-6'
                        >
                           <div className={`bg-white flex justify-center w-[50vw] sm:w-[20vw] h-fit rounded-2xl`}>
                              <Image
                                 className='w-full rounded-xl'
                                 src={sponsor.image}
                                 alt=""
                                 width={200}
                                 height={200}
                              />
                           </div>

                           <div className={`${poppins.className} text-medium w-full`}>
                              {sponsor.description}
                           </div>
                        </motion.li>
                     })
                  }
               </ul>
            </div>
         </div >
      </>
   )
}

export default Sponsors