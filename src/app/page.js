"use client"

import { NextUIProvider } from "@nextui-org/react";
import AboutArithemania3 from "./AboutArithemania3";
import Intro from "./Intro";

export default function Home() {
   return (
      <NextUIProvider>
         <main id="main" className="min-h-screen w-screen h-fit flex flex-col items-center gap-4 pb-10">
            <Intro />

            <AboutArithemania3 />
         </main>
      </NextUIProvider>
   );
}