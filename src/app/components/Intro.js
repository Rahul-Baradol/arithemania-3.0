import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion"
import { arithemania, envelope, globe, insta, shunya, shunyaUpdated, social } from "../../../public";
import { Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: "500"
})

function Intro() {
   return (
      <main className='flex flex-row w-screen h-screen justify-center items-center'>
         <motion.div
            initial={{
               opacity: 0,
               y: -75,
               scale: 0.5,
               zIndex: 1
            }}

            whileInView={{
               opacity: 1,
               y: 0,
               scale: 1,
               zIndex: 1
            }}

            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className='p-4'
         >
            <h2 className={`${poppins.className} text-white select-none`}>Shunya Presents...</h2>
            <Image
               src={arithemania}
               alt=""
               width={700}
            />        
         </motion.div>
      </main>
   )
}

export default Intro 