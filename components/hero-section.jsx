"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MyButton from "./my-button";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col pt-20 md:pt-24 pb-12 md:pb-16 overflow-hidden">
      
      {/* Background/Gradient */}
      <div className="absolute inset-0 bg-white z-0 pointer-events-none" />

      {/* Main Grid Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 flex-1 flex flex-col justify-end">
        
        {/* Upper Setup: Image & Layout */}
        <div className="flex-1 relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-end lg:content-end h-full">
            
            {/* The Image - Stacked at bottom on mobile, Absolute behind on Desktop */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative h-[45vh] w-full order-3 lg:absolute lg:inset-x-0 lg:bottom-0 flex justify-center items-end pointer-events-none z-10 lg:-z-10 lg:h-[90%] lg:order-none mt-auto lg:mt-0"
            >
                <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl h-full mx-auto">
                    {/* The Image Itself */}
                    <div className="relative w-full h-full [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] lg:[mask-image:linear-gradient(to_bottom,black_50%,transparent_95%)]">
                         <Image 
                          src="/images/arifurrahman_black&white.webp" 
                            alt="Arifur Rahman"
                            fill
                            className="object-contain object-bottom"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>
            </motion.div>


            {/* Left Content: Headline */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-end pb-4 lg:pb-12 order-1 lg:order-none pt-4 lg:pt-0">
                {/* Status Pill */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 bg-neutral-100 rounded-sm px-3 py-1.5 w-fit mb-6"
                >
                    <div className="w-1.5 h-1.5 rounded-sm bg-[#d3d3ff] animate-ping" />
                    <span className="text-xs font-medium text-neutral-500 tracking-wide uppercase">
                     Bangladesh Based  Working Globally
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl lg:text-5xl font-medium tracking-tighter text-neutral-900 leading-[1.05]"
                >
                    I don't just build websites. I build high-performance business assets.
                </motion.h1>
            </div>

            {/* Spacer */}
            <div className="hidden lg:block lg:col-span-2"></div>

            {/* Right Content: Description & Button */}
            <div className="lg:col-span-5 relative z-10 flex flex-col justify-end items-start lg:pl-14 pb-8 lg:pb-12 order-2 lg:order-none">
                 <motion.p 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-base md:text-lg font-normal text-neutral-900 mb-4 max-w-md"
                >
                  Code without business logic is useless. My role is to bridge the gap between technical complexity and market needs. By combining Next.js with strategic architecture, I develop web applications that handle traffic, improve SEO rankings, and keep customers safe—not just look good.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4"
                >
                     <MyButton>
                        <Link href="/contact">
                          Discuss Your Project
                        </Link>
                    </MyButton>
                </motion.div>
            </div>

        </div>
      </div>
    </section>
  );
}
