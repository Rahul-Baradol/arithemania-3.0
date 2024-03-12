import Image from 'next/image'
import React from 'react'
import { pes, shunyaUpdated } from '../../../public'

function Navbar() {
  return (
   <>
      <nav className="absolute z-10 p-3 flex flex-row w-screen h-fit justify-between items-center bg-transparent">
         <div className="flex flex-row gap-4 pl-4">
            <a>
               <Image 
                  src={shunyaUpdated}
                  width={100}
                  height={100}
               />
            </a>
         </div>
         <div className="flex flex-row gap-4 pr-4">
         <a target='_blank' href='https://pes.edu/'>
               <Image 
                  src={pes}
                  width={100}
                  height={100}
               />
            </a>
         </div>
      </nav>
   </>
  )
}

export default Navbar