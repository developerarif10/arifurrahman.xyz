"use client";
import Image from "next/image";
import HeroHeader from "./hero-header";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-white dark:bg-neutral-950 overflow-hidden flex flex-col">
      <HeroHeader />
      
      <div className="flex-1 flex flex-col justify-center px-6 md:px-12 pt-24 pb-12">
        {/* Large Text */}
        <div className="w-full mb-8 md:mb-12">
          <h1 className="font-bebas text-[18vw] md:text-[14vw] leading-[0.8] text-black dark:text-white text-center md:text-left tracking-tighter">
            WEBSITE DEVELOPER
          </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-start relative">
          {/* Left Content */}
          <div className="w-full md:w-1/2 lg:w-5/12 pt-4 md:pt-8 z-10">
            <div className="mb-6">
              <h2 className="font-bebas text-2xl md:text-3xl tracking-[0.2em] text-black dark:text-white mb-6">
                BASED IN <span className="text-orange-accent">BANGLADESH</span>
              </h2>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-6 max-w-xl">
                I'm Arif — a front-end developer passionate about building
                websites that not only look great but also feel engaging
                through smooth animations and interactive design.
              </p>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-gray-800 dark:text-gray-300 mb-12 max-w-xl">
                My goal is to bring your ideas to life and deliver
                a unique online presence.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 bg-gray-200 dark:bg-neutral-800 px-6 py-3">
              <span className="w-4 h-4 rounded-full bg-lime-accent animate-pulse"></span>
              <span className="font-bebas text-xl tracking-widest text-black dark:text-white">
                AVAILABLE FOR WORK
              </span>
            </div>
          </div>

          {/* Right Image - Positioned to overlap/align with text as per design */}
          <div className="w-full md:w-1/2 lg:w-7/12 relative mt-8 md:-mt-24 lg:-mt-48 flex justify-end">
             {/* Gray background box behind image */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[3/4]">
                <div className="absolute inset-0 bg-gray-500/20 translate-x-4 translate-y-4 z-0"></div>
                <div className="relative w-full h-full bg-gray-400 overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                  {/* Placeholder for the portrait image */}
                   <Image 
                    src="/images/arifurrahman_black&white.webp" 
                    alt="Arif Rahman"
                    fill
                    className="object-cover object-center"
                   />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
