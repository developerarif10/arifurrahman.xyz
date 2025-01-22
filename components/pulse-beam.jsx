"use client";
import { motion } from "framer-motion";
import TechStackChip from "./tech-stackChip";

export const PulseBeamsSecond = () => {
  return (
    <div className="flex h-screen md:h-[40rem] relative items-center justify-center antialiased overflow-hidden px-4">
      <div className="relative">
        <button className=" w-[140px] md:w-[180px] z-40 h-[50px] md:h-[60px] no-underline group cursor-pointer relative rounded-full p-px text-xs font-semibold leading-6 text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] transition-opacity duration-500 opacity-100" />
          </span>
          <div className="relative flex justify-center w-full text-center space-x-2 h-full items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10">
            <span className="text-base md:text-xl inline-block bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 via-neutral-600 to-neutral-300">
              Tech Stacks
            </span>
          </div>
        </button>

        {/* Tech Stack Labels */}
        <TechStackChip
          text="Node.js"
          className="top-[-13rem] left-[-4rem] transform -translate-x-[-12rem] md:top-[-13rem]"
          src="/logo/nodejs.svg"
        />
        <TechStackChip
          text="Tailwind css"
          className="right-[-24.5rem] top-[-13rem] md:right-[-24.5rem] md:top-[-13rem]"
          src="/logo/tailwindcss.svg"
        />
        <TechStackChip
          text="React.js"
          className="left-[-24.5rem] bottom-[-10.6rem] md:left-[-24.5rem] md:bottom-[-10.6rem]"
          src="/logo/reactjs.svg"
        />
        <TechStackChip
          text="Next.js"
          className="right-[-19rem] bottom-[-12.4rem] md:right-[-19rem] md:bottom-[-12.4rem]"
          src="/logo/nextjs.svg"
        />
        <TechStackChip
          text="WordPress"
          className="bottom-[4rem] left-[-12.5rem] transform -translate-x-[4rem] md:bottom-[-12.5rem]"
          src="/logo/wordpress.svg"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center scale-[0.65] md:scale-100">
        <SVGs />
      </div>
    </div>
  );
};

const GradientColors = () => (
  <>
    <stop stopColor="#18CCFC" stopOpacity="0" />
    <stop stopColor="#18CCFC" />
    <stop offset="0.325" stopColor="#6344F5" />
    <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
  </>
);

export const SVGs = () => {
  const width = 858;
  const height = 460;
  const centerX = width / 2;
  const centerY = height / 2;
  const buttonWidth = 90; // Half of the button width
  const buttonHeight = 30; // Half of the button height

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex flex-shrink-0 max-w-full"
    >
      {/* Base Lines */}
      <path
        d={`M${centerX - buttonWidth} ${centerY}H16.5C10.9772 ${centerY} 6.5 ${
          centerY + 4.477
        } 6.5 ${centerY + 10}V398.5`}
        stroke="var(--slate-800)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX + buttonWidth} ${centerY}H841C846.523 ${centerY} 851 ${
          centerY - 4.523
        } 851 ${centerY - 10}V40`}
        stroke="var(--slate-800)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX - buttonWidth / 2} ${centerY + buttonHeight}V${
          centerY + 100
        }C${centerX - buttonWidth / 2} ${centerY + 105.523} ${
          centerX - buttonWidth / 2 - 4.477
        } ${centerY + 110} ${centerX - buttonWidth / 2 - 10} ${
          centerY + 110
        }H152C146.477 ${centerY + 110} 142 ${centerY + 114.477} 142 ${
          centerY + 120
        }V426.5`}
        stroke="var(--slate-800)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX + buttonWidth / 2} ${centerY + buttonHeight}V${
          centerY + 100
        }C${centerX + buttonWidth / 2} ${centerY + 105.523} ${
          centerX + buttonWidth / 2 + 4.477
        } ${centerY + 110} ${centerX + buttonWidth / 2 + 10} ${
          centerY + 110
        }H760C765.523 ${centerY + 110} 770 ${centerY + 114.477} 770 ${
          centerY + 120
        }V427`}
        stroke="var(--slate-800)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX} ${centerY - buttonHeight}V17C${centerX} 11.4772 ${
          centerX + 4.477
        } 7 ${centerX + 10} 7H${centerX + 34}`}
        stroke="var(--slate-800)"
        className="hidden md:block"
      />

      {/* Gradient Beams */}
      <path
        d={`M${centerX - buttonWidth} ${centerY}H16.5C10.9772 ${centerY} 6.5 ${
          centerY + 4.477
        } 6.5 ${centerY + 10}V398.5`}
        stroke="url(#grad1)"
        strokeLinecap="round"
        strokeWidth="2"
        className="hidden md:block"
      />
      <path
        d={`M${centerX + buttonWidth} ${centerY}H841C846.523 ${centerY} 851 ${
          centerY - 4.523
        } 851 ${centerY - 10}V40`}
        stroke="url(#grad2)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX - buttonWidth / 2} ${centerY + buttonHeight}V${
          centerY + 100
        }C${centerX - buttonWidth / 2} ${centerY + 105.523} ${
          centerX - buttonWidth / 2 - 4.477
        } ${centerY + 110} ${centerX - buttonWidth / 2 - 10} ${
          centerY + 110
        }H152C146.477 ${centerY + 110} 142 ${centerY + 114.477} 142 ${
          centerY + 120
        }V426.5`}
        stroke="url(#grad3)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX + buttonWidth / 2} ${centerY + buttonHeight}V${
          centerY + 100
        }C${centerX + buttonWidth / 2} ${centerY + 105.523} ${
          centerX + buttonWidth / 2 + 4.477
        } ${centerY + 110} ${centerX + buttonWidth / 2 + 10} ${
          centerY + 110
        }H760C765.523 ${centerY + 110} 770 ${centerY + 114.477} 770 ${
          centerY + 120
        }V427`}
        stroke="url(#grad4)"
        className="hidden md:block"
      />
      <path
        d={`M${centerX} ${centerY - buttonHeight}V17C${centerX} 11.4772 ${
          centerX + 4.477
        } 7 ${centerX + 10} 7H${centerX + 34}`}
        stroke="url(#grad5)"
        className="hidden md:block"
      />

      {/* Mobile Paths */}
      <g className="md:hidden">
        <path
          d={`M${centerX} ${centerY}H${centerX - 100}C${
            centerX - 105.523
          } ${centerY} ${centerX - 110} ${centerY + 4.477} ${centerX - 110} ${
            centerY + 10
          }V398.5`}
          stroke="var(--slate-800)"
        />
        <path
          d={`M${centerX} ${centerY}H${centerX + 100}C${
            centerX + 105.523
          } ${centerY} ${centerX + 110} ${centerY + 4.477} ${centerX + 110} ${
            centerY + 10
          }V398.5`}
          stroke="var(--slate-800)"
        />
        <path
          d={`M${centerX} ${centerY - buttonHeight}V17`}
          stroke="var(--slate-800)"
        />

        {/* Mobile Gradient Beams */}
        <path
          d={`M${centerX} ${centerY}H${centerX - 100}C${
            centerX - 105.523
          } ${centerY} ${centerX - 110} ${centerY + 4.477} ${centerX - 110} ${
            centerY + 10
          }V398.5`}
          stroke="url(#grad1-mobile)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d={`M${centerX} ${centerY}H${centerX + 100}C${
            centerX + 105.523
          } ${centerY} ${centerX + 110} ${centerY + 4.477} ${centerX + 110} ${
            centerY + 10
          }V398.5`}
          stroke="url(#grad2-mobile)"
          strokeLinecap="round"
          strokeWidth="2"
        />
        <path
          d={`M${centerX} ${centerY - buttonHeight}V17`}
          stroke="url(#grad3-mobile)"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </g>

      <defs>
        {/* Desktop Gradients */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.linearGradient
            key={`grad${i}`}
            animate={{
              x1: [0, width * 1.2],
              x2: [0, width],
              y1: [height, height / 2],
              y2: [height * 1.2, height],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            gradientUnits="userSpaceOnUse"
            id={`grad${i}`}
          >
            <GradientColors />
          </motion.linearGradient>
        ))}

        {/* Mobile Gradients */}
        {[1, 2, 3].map((i) => (
          <motion.linearGradient
            key={`grad${i}-mobile`}
            animate={{
              x1: [0, width],
              x2: [width * 0.5, width],
              y1: [height * 0.5, height],
              y2: [height, height * 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              repeatDelay: 1,
            }}
            gradientUnits="userSpaceOnUse"
            id={`grad${i}-mobile`}
          >
            <GradientColors />
          </motion.linearGradient>
        ))}
      </defs>

      {/* Connection Points */}
      <g className="hidden md:block">
        <circle
          cx="851"
          cy="34"
          r="6.5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="770"
          cy="427"
          r="6.5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="142"
          cy="427"
          r="6.5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="6.5"
          cy="398.5"
          r="6"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="465"
          cy="6.5"
          r="6"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
      </g>

      {/* Mobile Connection Points */}
      <g className="md:hidden">
        <circle
          cx="429"
          cy="17"
          r="5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="270"
          cy="398.5"
          r="5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
        <circle
          cx="588"
          cy="398.5"
          r="5"
          fill="var(--slate-700)"
          stroke="var(--slate-600)"
        />
      </g>
    </svg>
  );
};
