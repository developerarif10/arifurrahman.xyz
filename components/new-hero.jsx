"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function NewHero() {
  return (
    <section className="relative h-[100vh] w-full bg-white flex flex-col pt-24 pb-8 overflow-hidden">
      
      {/* Background/Gradient */}
      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 h-full flex flex-col justify-end">
        
        {/* Upper Setup: Image & Layout */}
        <div className="flex-1 relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end h-full">
            
            {/* Center Image - Absolute or Grid placed? 
               To get the "text around image" look, precise positioning is best.
               But responsive is key. 
               Let's try: Image is centered. Text is in columns below/beside.
            */}
            
             {/* The Image - Using CSS MASK for perfect fade */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="lg:absolute lg:inset-x-0 lg:bottom-0 flex justify-center items-end pointer-events-none -z-10 h-[90%]"
            >
                <div className="relative w-full max-w-lg lg:max-w-2xl h-full">
                    {/* The Image Itself */}
                    <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_45%,transparent_80%)]">
                         <Image 
                            src="/uploads/uploaded_image_0_1767545064999.png"
                            alt="Arifur Rahman"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </div>
                    
                </div>
            </motion.div>


            {/* Left Content: Headline */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-end pb-12">
                {/* Status Pill */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-neutral-100 rounded-full px-3 py-1.5 w-fit mb-6"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                        2 projects left in April
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tighter text-neutral-900 leading-[1.05]"
                >
                    Arif is solving problems through strategic design and compelling visuals
                </motion.h1>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Right Content: Description & Button */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-end items-start lg:pl-12 pb-12">
                 <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-md"
                >
                    As a digital product designer with a strong focus on visual design and Framer websites, he collaborates closely with teams to craft seamless, user-centered experiences. A reliable partner in bringing ideas to life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                     <Button 
                        size="lg"
                        className="rounded-full bg-neutral-900 text-white hover:bg-neutral-800 px-8 py-6 text-base shadow-lg shadow-neutral-200/50"
                        asChild
                    >
                        <Link href="/contact">
                            Email Me
                        </Link>
                    </Button>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}
