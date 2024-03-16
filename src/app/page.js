"use client"

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, NextUIProvider } from "@nextui-org/react";
import AboutArithemania3 from "./components/AboutArithemania3";
import Intro from "./components/Intro";
import { PastEvents } from "./components/PastEvents";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import ExploreDomains from "./components/ExploreDomains";
import Footer from "./components/Ender";

export default function Home() {
   const [init, setInit] = useState(false);

   const particlesLoaded = (container) => {
      console.log(container);
   };

   const options = useMemo(
      () => ({
         background: {
            color: {
               value: "rgb(38, 1, 67)",
            },
         },
         fpsLimit: 120,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: "push",
               },
               onHover: {
                  enable: true,
                  mode: "repulse",
               },
            },
            modes: {
               push: {
                  quantity: 4,
               },
               repulse: {
                  distance: 200,
                  duration: 0.4,
               },
            },
         },
         particles: {
            color: {
               value: "#ffffff",
            },
            links: {
               color: "#ffffff",
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
            },
            move: {
               direction: "none",
               enable: true,
               outModes: {
                  default: "bounce",
               },
               random: false,
               speed: 6,
               straight: false,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 80,
            },
            opacity: {
               value: 0.5,
            },
            shape: {
               type: "circle",
            },
            size: {
               value: { min: 1, max: 5 },
            },
         },
         detectRetina: true,
      }),
      [],
   );

   // this should be run only once per application lifetime
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
         // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
         // starting from v2 you can add only the features you need reducing the bundle size
         //await loadAll(engine);
         //await loadFull(engine);
         await loadFull(engine);
         //await loadBasic(engine);
      }).then(() => {
         setInit(true);
      });
   }, []);

   return (
      <NextUIProvider>
         {
            init ?
               <Particles
                  id="tsparticles"
                  particlesLoaded={particlesLoaded}
                  options={options}
                  className="absolute top-0 left-0 w-screen h-screen z-0"
               />
               :
               <></>
         }

         <main id="main" className="min-h-screen w-screen h-fit flex flex-col items-center gap-6">
            <Navbar />
            <Intro />
            <AboutArithemania3 />
            <ExploreDomains />
            <Footer />
         </main>
      </NextUIProvider>
   );
}