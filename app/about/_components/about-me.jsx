"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMe() {
 

  return (
    <section className="w-full py-12">
      <div className="">
    
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full space-y-8"
          >
            <div className="space-y-2">
              <h1 className="font-bebas text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tight relative inline-block">
                ABOUT ME
              
              </h1>
              
              <div className="pt-8 space-y-6">
                <h2 className=" font-bebas text-3xl md:text-4xl tracking-wider">
                  ARIFUR RAHMAN
                </h2>
                
                <div className="space-y-6 text-lg md:text-xl font-light max-w-lg leading-relaxed">
                  <p>
                    I'm a digital designer and Full Stack developer passionate
                    about crafting meaningful, user-centered experiences.
                  </p>
                  <p>
                    With a strong foundation in visual design and a deep
                    understanding of interactive systems, I bring ideas to life
                    through thoughtful design, smooth animations, and
                    responsive layouts.
                  </p>
                </div>
              </div>
            </div>

         
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-full min-h-[500px] w-full"
          >
             <div className="relative w-full h-full rounded-[2rem] overflow-hidden bg-neutral-800">
                <Image
                  src="/images/about-arif.jpg"
                  alt="Arifur Rahman"
                  fill
                  className="object-cover object-center"
                  priority
                />
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
