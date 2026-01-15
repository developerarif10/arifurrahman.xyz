"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import BounceCards from "./bounce-cards";

const images = [
  "/about/arifurrahman-about1.webp",
  "/about/arifurrahman-about2.webp",
  "/about/arifurrahman-about3.webp",
  "/about/arifurrahman-about4.webp",
  "/about/arifurrahman-about5.webp",
];

const desktopTransformStyles = [
  "rotate(10deg) translate(-260px)",
  "rotate(5deg) translate(-130px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(130px)",
  "rotate(-10deg) translate(260px)"
];

const mobileTransformStyles = [
  "rotate(10deg) translate(-110px)",
  "rotate(5deg) translate(-55px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(55px)",
  "rotate(-10deg) translate(110px)"
];

export default function AboutMe() {
  const [transformStyles, setTransformStyles] = useState(desktopTransformStyles);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTransformStyles(mobileTransformStyles);
      } else {
        setTransformStyles(desktopTransformStyles);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full py-6 lg:py-6">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center gap-2 lg:gap-10">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-6 max-w-4xl w-full text-left lg:text-center items-start lg:items-center"
          >
            <div className="space-y-4">
              <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl tracking-wider">
                ARIFUR RAHMAN
              </h2>

              <div className="space-y-4 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
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
          </motion.div>

          {/* Bounce Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full flex justify-center py-4 relative"
          >
            <BounceCards
              images={images}
              transformStyles={transformStyles}
              enableHover
              animationDelay={0.3}
              animationStagger={0.03}
              className="custom-bounceCards relative"
              containerWidth={1200}
              containerHeight={250}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
