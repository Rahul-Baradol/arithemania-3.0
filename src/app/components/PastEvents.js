import React from 'react'
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { pastEvents } from '../../../constants/constants';

export function PastEvents() {
   return (
      <>
         {pastEvents.map((event, index) => {
            return <motion.div
               key={index}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               viewport={{ once: true }}
               className="mb-4 w-[40vw] h-fit p-4 rounded-xl bg-[rgb(64, 0, 112)] text-white text-2xl flex flex-row flex-wrap gap-1"
            > 
               <Card shadow className="p-4 bg-[rgb(38, 1, 67)] text-white">
                  <h3 className="mb-2">
                     {event.title}
                  </h3>
                  <h3 className="mb-2">{event.description}</h3>
               </Card>
            </motion.div>
         })}
      </>
   );
}