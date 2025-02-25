"use client";
import { motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Number.POSITIVE_INFINITY,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
};

function ShinyButton({ children }) {
  return (
    <motion.button
      {...animationProps}
      className="relative rounded-lg px-6 py-2 font-medium backdrop-blur-xl transition-shadow duration-300 ease-in-out hover:shadow dark:bg-[radial-gradient(circle_at_50%_0%,rgba(98,116,231,0.1)_0%,transparent_60%)] dark:hover:shadow-[0_0_20px_rgba(135,82,163,0.3)]"
    >
      <span
        className="relative block size-full text-sm uppercase tracking-wide text-[rgba(0,0,0,0.92)] dark:font-light dark:text-[rgb(255,255,255,90%)]"
        style={{
          maskImage:
            "linear-gradient(-75deg,rgba(98,116,231,1) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),rgba(135,82,163,1) calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,rgba(98,116,231,0.3)_calc(var(--x)+20%),rgba(135,82,163,0.6)_calc(var(--x)+25%),rgba(98,116,231,0.3)_calc(var(--x)+100%))] p-px"
      ></span>
    </motion.button>
  );
}

export { ShinyButton };
