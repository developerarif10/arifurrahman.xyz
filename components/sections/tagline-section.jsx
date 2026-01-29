"use client";

import Marquee from "@/components/magicui/marquee";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

// Create 20 images refs
const images = Array.from({ length: 20 }, (_, i) => `/images/tagsection/template-${i + 1}.webp`);

// Split into 5 columns
const chunkImages = (array, parts) => {
  const result = [];
  const copy = [...array];
  // distribute evenly
  while (copy.length > 0) {
      for (let i = 0; i < parts && copy.length > 0; i++) {
          if (!result[i]) result[i] = [];
          result[i].push(copy.shift());
      }
  }
  return result;
}

const columns = chunkImages(images, 5);

export default function TaglineSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = [
    "Turning",
    "complex",
    "web",
    "challenges",
    "into",
    "seamless,",
    "high-impact",
    "solutions.",
  ];

  return (
    <section
      ref={containerRef}
      className="relative z-10 min-h-[90vh] flex items-center bg-white overflow-hidden py-20"
    >
       {/* Marquee Background */}
       <div className="absolute inset-0 z-0 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 px-2">
           {/* Columns */}
           {[0, 1, 2, 3, 4].map((colIdx) => (
               <div key={colIdx} className={`h-full overflow-hidden ${
                   colIdx === 3 ? "hidden md:block" : 
                   colIdx === 4 ? "hidden lg:block" : "block"
               }`}>
                  <Marquee 
                    vertical 
                    reverse={colIdx % 2 !== 0} 
                    className={`[--duration:${30 + colIdx * 5}s] [--gap:0.5rem] h-full justify-center`}
                   >
                     {columns[colIdx]?.map((img, idx) => (
                        <div key={`${colIdx}-${idx}`} className="relative h-48 md:h-60 lg:h-72 w-full rounded-lg overflow-hidden grayscale-[0.3] opacity-80 hover:grayscale-0 transition-all duration-500">
                           <Image src={img} alt="" fill className="object-cover" />
                        </div>
                     ))}
                   </Marquee>
               </div>
           ))}
       </div>

       {/* Seamless Gradient Overlay - Responsive stops */}
       <div className="absolute inset-0 z-10 bg-gradient-to-t from-white via-white/40 to-transparent md:bg-gradient-to-l md:from-white/90 md:from-40% md:via-white/50 md:to-transparent pointer-events-none" />


      {/* Main Content Area - Positioned Text */}
      <div className="container px-4 md:px-6 mx-auto relative z-20">
        <div className="flex justify-end items-center min-h-[50vh] md:min-h-0">
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl text-left pl-4 md:pl-20 mt-auto md:mt-0"
          >
             
             {/* Content */}
             <div className="relative pt-12 md:pt-0">

                {/* Main Statement */}
                <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-[4.5rem] font-bold tracking-tight text-neutral-950 leading-[1.1] md:leading-[1.05] -ml-0.5">
                    {words.map((word, i) => (
                        <span key={i} className="inline-block mr-[0.25em]">
                             {word === "high-impact" ? (
                                 <span className="relative inline-block text-white px-2 mx-1">
                                    {/* Abstract minimalist highlight shape */}
                                    <span className="absolute inset-0 bg-neutral-950 -rotate-2 rounded-sm -z-10" />
                                    <span className="relative z-10">{word}</span>
                                </span>
                            ) : (
                            word
                            )}
                        </span>
                    ))}
                </h2>

                <p className="mt-6 md:mt-8 text-base md:text-xl lg:text-2xl text-neutral-600 max-w-2xl leading-relaxed">
                  Whether you&apos;re launching a startup&apos;s first site or scaling
                  global platforms, I make your vision feel not just possible, but
                  inevitable.
                </p>
             </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
