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
  "rotate(10deg) translate(-60px)",
  "rotate(5deg) translate(-30px)",
  "rotate(0deg)",
  "rotate(-5deg) translate(30px)",
  "rotate(-10deg) translate(60px)"
];


export default function AboutMeImages(){


    const [transformStyles, setTransformStyles] = useState(desktopTransformStyles);
    const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTransformStyles(mobileTransformStyles);
        setContainerWidth(350);
      } else {
        setTransformStyles(desktopTransformStyles);
        setContainerWidth(1200);
      }
    };

    handleResize(); // Initial call
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


    return (
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
              containerWidth={containerWidth}
              containerHeight={250}
            />
          </motion.div>
    );
}