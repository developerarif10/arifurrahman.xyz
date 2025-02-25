"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ShinyButton } from "./my-components/shiny-button";
import { TextLoop } from "./ui/text-loop";
export default function Home() {
  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Curved Lines */}
          <svg
            className="absolute h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="grad1" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0" />
                <stop offset="50%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="grad2" x1="1" y1="0" x2="0" y2="0">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Multiple Curved Lines */}
            {[...Array(4)].map((_, i) => (
              <motion.path
                key={`curve-${i}`}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0, 0.5, 0.5, 0] }}
                transition={{
                  duration: 3 + i,
                  ease: "easeInOut",
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  repeatDelay: 1,
                  delay: i * 0.5,
                }}
                d={`M ${-200 + i * 100} ${100 + i * 50} Q ${300 + i * 50} ${
                  i % 2 ? 200 : 0
                } ${500 + i * 100} ${150 + i * 50} T ${900 + i * 100} ${
                  100 + i * 50
                }`}
                fill="none"
                stroke={`url(#grad${i % 2 ? 1 : 2})`}
                strokeWidth="1"
              />
            ))}
          </svg>

          {/* Enhanced Straight Lines */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={`line-${i}`}
                initial={{ x: "100%", opacity: 0 }}
                animate={{
                  x: "-100%",
                  opacity: [0, 0.8, 0.8, 0],
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  delay: i * 0.3,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "linear",
                }}
                className="absolute right-0"
                style={{
                  top: `${10 + i * 15}%`,
                  height: "1px",
                  width: "100%",
                  background: `linear-gradient(90deg, transparent, ${
                    i % 2 === 0 ? "#22d3ee" : "#8b5cf6"
                  }80, transparent)`,
                }}
              />
            ))}
          </motion.div>
        </div>

        {/* Enhanced Animated Background */}
        <div className="absolute inset-0 z-[1]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.8, 1.2, 1.2, 0.8],
              x: ["-25%", "-20%", "-25%"],
              y: ["20%", "25%", "20%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 0.3, 0.3, 0],
              scale: [0.8, 1.2, 1.2, 0.8],
              x: ["25%", "20%", "25%"],
              y: ["50%", "45%", "50%"],
            }}
            transition={{
              duration: 8,
              delay: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute h-96 w-96 rounded-full bg-violet-500/30 blur-3xl"
          />
        </div>

        {/* Content with specified classes */}

        <div className="min-h-screen mx-auto max-w-5xl text-white flex items-center justify-center p-4 overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between relative">
            {/* Decorative geometric elements */}

            {/* <div className="absolute top-0 left-0 w-32 h-32 bg-blue-600/20 rounded-full blur-2xl animate-pulse"></div> */}
            {/* <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600/20 rounded-full blur-2xl animate-pulse"></div> */}

            {/* Left Content Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 z-10 mb-8 md:mb-0">
              <div className="relative inline-block mb-4">
                <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-2 text-black dark:text-white">
                  Arifur Rahman
                </h1>
                {/* <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div> */}
              </div>

              <p className=" text-zinc-600 dark:text-zinc-300 mb-6 font-medium">
                I&apos;m a
                <TextLoop
                  className="overflow-y-clip"
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                    },
                  }}
                >
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white mx-1">
                    React Specialist.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Next.js Expert.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Wordpress Specialist.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Tech Enthusiast.
                  </span>
                </TextLoop>
                Developing intuitive, high-performance web applications with
                innovation, efficiency, and seamless user interfaces
              </p>

              {/* <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Developing intuitive, high-performance web applications with
                innovation, efficiency, and seamless user interfaces
              </p> */}

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link href="/projects">
                  <ShinyButton type="button">View Projects</ShinyButton>
                </Link>
                <Link href="#contacts">
                  <ShinyButton type="button">Contact Me</ShinyButton>
                </Link>
              </div>
            </div>
            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="w-64 h-64 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full animate-blob"></div>
                <Image
                  src="/images/arifurrahman.webp"
                  alt="Arifur Rahman profile pic"
                  width={300}
                  height={300}
                  priority
                  className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl z-10 transform transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
