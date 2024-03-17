import Image from 'next/image'
import React from 'react'
import { envelope, globe, insta, linkedin, phone, shunyaUpdated } from '../../../public'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   weight: "200"
})

function Footer() {
   return (
      <div className={`${poppins.className} text-white flex flex-col items-center justify-between z-10 w-screen h-screen`}>
         <div className='text-lg sm:text-xl flex flex-col items-center h-[80vh] justify-center gap-4'>
            <Image
               src={shunyaUpdated}
               // width={200}
               // height={200}
               className='h-[200px]  w-auto'
               alt=""
            />
            <div className='text-medium sm:text-xl text-center'>
               The Official Math Club of PES University
            </div>
            <div className='flex w-fit gap-1 items-center text-medium sm:text-xl'>
               {/* <Image 
                  src={phone}
                  className='h-auto w-[28px]'
                  alt="" 
               /> */}
               <div className='w-fit h-fit'>
                  Contact
               </div>
            </div>
            <div className='text-center flex flex-col md:flex-row gap-5 items-center'>
               <div className='text-medium sm:text-lg'>
                  <div className='flex flex-row gap-2 w-fit items-center'>
                     <Image 
                        src={insta}
                        width={25}
                        className='h-auto'
                        alt=''
                     />
                     <p>shunya_pes</p>
                  </div>
                  <div className='flex flex-row gap-2 w-fit items-center'>
                     <Image 
                        src={envelope}
                        width={25}
                        className='h-auto'
                        alt=""
                     />
                     <p>shunya@pes.edu</p>
                  </div>
                  <div className='flex flex-row gap-2 w-fit items-center'>
                     <Image 
                        src={globe}
                        width={25}
                        className='h-auto'
                        alt=""
                     />
                     <p>shunyapes.com</p>
                  </div>
                  <div className='flex flex-row gap-2 w-fit items-center'>
                     <Image 
                        src={linkedin}
                        width={25}
                        className='h-auto'
                        alt=""
                     />
                     <p>shunya</p>
                  </div>
               </div>
               <div className='text-medium sm:text-lg text-center'>
                  Thalleen - 8073428532 <br/>
                  Sri Manish - 97412 20037 <br/>
                  Arya - 96730 74688 <br/>
                  Shikhar - 82955 56760 <br/>
               </div>
            </div>
         </div>
         <div className="flex flex-row justify-center items-center h-20 bg-transparent text-white">
            <p className="text-center text-sm md:text-medium">© 2024 Arithemania. All rights reserved.</p>
         </div>
      </div>
   )
}

export default Footer