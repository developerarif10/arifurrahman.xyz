"use client";

import { motion } from "framer-motion";

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

          {/* Floating Particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: 0,
                opacity: 0,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: [0, 1, 1, 0],
                opacity: [0, 0.8, 0.8, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: i * 0.5,
              }}
              className={`absolute h-2 w-2 rounded-full ${
                i % 2 ? "bg-cyan-400" : "bg-violet-400"
              }`}
            />
          ))}
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
        <div className="min-h-screen p-6">
          <div className="relative z-[3] mx-auto max-w-4xl">
            <div className="grid gap-8 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="flex flex-col justify-center space-y-6"
              >
                <h2 className="text-[2.5rem] font-bold leading-tight tracking-tight text-blue-400 sm:text-5xl md:text-6xl lg:text-7xl">
                  Before they
                  <br />
                  sold out
                </h2>
                <h3 className="text-2xl font-semibold text-white sm:text-3xl md:text-4xl">
                  Arifur Rahman
                </h3>
                <p className="max-w-xl font-mono text-lg text-gray-400">
                  Meet Arifur Rahman, the self-proclaimed code wizard who can
                  turn caffeine into beautiful websites. His passion for
                  building clean and functional designs is only rivaled by his
                  passion for finding the perfect GIF to express his excitement.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative flex items-center justify-center lg:justify-end"
              >
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[450px] md:w-[450px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-500/10" />
                  <img
                    src="/images/arifurrahman.webp"
                    alt="Profile"
                    className="absolute inset-0 h-full w-full rounded-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
