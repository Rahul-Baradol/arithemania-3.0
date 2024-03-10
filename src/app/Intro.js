import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"
import { arithemania, envelope, globe, insta, shunya, shunyaUpdated, social } from "../../public";
import { Poppins } from 'next/font/google';
import { Card } from '@nextui-org/react';

const poppins = Poppins({
   subsets: ['latin'],
   weight: "300"
})

function Intro() {
   return (
      <main className='flex flex-col sm:flex-row sm:gap-4 w-screen h-[700px] sm:justify-around items-center'>
         <motion.div
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
            className='p-4'
         >
            <Image
               src={shunyaUpdated}
               alt=""
               width={400}
            />
         </motion.div>

         {/* <div className={`${poppins.className} flex flex-col items-center text-white text-xl`}>
            Shunya Presents
         </div> */}

         <motion.div
            initial={{
               opacity: 0,
               x: 50
            }}

            whileInView={{
               opacity: 1,
               x: 0
            }}

            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='p-4'
         >

            <Image
               src={arithemania}
               alt=""
               width={700}
            />

            <div className="text-white text-xl items-center select-none flex flex-col gap-6 py-4 sm:flex-row justify-between px-1">
               <motion.div
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
                  className='w-fit h-fit'>
                  <motion.div
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
                     className="flex flex-row gap-2"
                  >
                     <Image
                        src={insta}
                        width={30}
                        alt=""
                     />
                     <div>shunya_pes</div>
                  </motion.div>

                  <motion.div
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
                     className="flex flex-row gap-2"
                  >
                     <Image
                        src={envelope}
                        width={30}
                        alt=""
                     />
                     <div>shunya@pes.edu</div>
                  </motion.div>

                  <motion.div
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
                     className="flex flex-row gap-2"
                  >
                     <Image
                        src={globe}
                        width={30}
                        alt=""
                     />
                     <div>shunyapes.com</div>
                  </motion.div>
               </motion.div>

               <motion.div
                  initial={{
                     opacity: 0,
                     x: 50
                  }}

                  whileInView={{
                     opacity: 1,
                     x: 0
                  }}

                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className='w-fit h-fit'
                  onClick={() => {
                     console.log("Register!");
                  }}>
                  <div className='rounded-lg z-20 bg-violet-800 text-white w-fit h-fit p-4 px-6'>
                     Register Now
                  </div>
               </motion.div>
            </div>
         </motion.div>


      </main>
   )
}

export default Intro 