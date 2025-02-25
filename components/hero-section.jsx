"use client";
import { motion } from "framer-motion";
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
            <div className="md:w-1/2 text-center md:text-left z-10 mb-8 md:mb-0">
              <div className="relative inline-block mb-4">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Hi, I&apos;m{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
                    Arifur Rahman
                  </span>
                </h1>
                {/* <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div> */}
              </div>

              <h2 className="text-2xl md:text-xl text-gray-300 mb-6 font-medium">
                I&apos;m a{" "}
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
                      filter: "blur(4px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span>React Front-end Web developer</span>
                  <span>Nextjs developer</span>
                  <span>Wordpress Expert</span>
                  <span>Tech Enthusiast</span>
                </TextLoop>
              </h2>

              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Transforming ideas into elegant, performant digital solutions
                with a passion for innovative design and clean code.
              </p>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 rounded-full transition duration-300 ease-in-out transform hover:scale-105 text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>

            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="w-64 h-64 md:w-96 md:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-full animate-blob"></div>
                <img
                  src="/images/arifurrahman.webp"
                  alt="Arifur Rahman profile pic"
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
