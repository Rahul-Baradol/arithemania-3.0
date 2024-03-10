"use client"

import Image from 'next/image';
import Link from 'next/link';
import { pes, shunyaUpdated } from '../../public';
import { motion } from "framer-motion";

const Navbar = () => {
   return (
      <nav className="bg-purple-950">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
               <div className="flex flex-row gap-3 w-fit">
                  <Image 
                     src={pes}
                     width={100}
                     alt=""
                  />
                  <Image 
                     src={shunyaUpdated}
                     width={60}
                     alt=""
                  />
               </div>
               <div className="flex sm:space-x-4">
                  <Link href="/" className="text-white hover:bg-purple-700 px-3 py-2 rounded-md text-sm font-medium">
                     Register
                  </Link>
               </div>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
