"use client";
import { cn } from "@/lib/utils";
import {
  animate,
  motion,
  useAnimationControls,
  useMotionValue,
} from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function LogoMagnet({
  className,
  logoCount = 7, // Updated for 7 logos
  attractRadius = 100,
  rotationDuration = 20,
}) {
  const [isAttracting, setIsAttracting] = useState(false);
  const [logos, setLogos] = useState([]);
  const controls = useAnimationControls();
  const baseAngle = useMotionValue(0);
  const rotationRef = useRef(null);
  const containerRef = useRef(null);

  // Logo configuration
  const logoTypes = [
    "mongodb",
    "nodejs",
    "wordpress",
    "figma",
    "react",
    "next",
    "tailwind",
  ];

  // Initialize logos in a circular pattern
  useEffect(() => {
    const newLogos = Array.from({ length: logoCount }, (_, i) => ({
      id: i,
      angle: ((2 * Math.PI) / logoCount) * i,
      radius: 150,
      type: logoTypes[i % logoTypes.length],
    }));
    setLogos(newLogos);
  }, [logoCount]);

  // Responsive radius calculation
  const getResponsiveRadius = useCallback(() => {
    if (!containerRef.current) return 150;
    const containerWidth = containerRef.current.offsetWidth;
    return Math.min(containerWidth / 2 - 40, 150); // 40px buffer for logos
  }, []);

  // Update radius on window resize
  useEffect(() => {
    const handleResize = () => {
      const newRadius = getResponsiveRadius();
      setLogos((prev) => prev.map((logo) => ({ ...logo, radius: newRadius })));
    };

    handleResize(); // Initial calculation
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [getResponsiveRadius]);

  // Create circular motion
  useEffect(() => {
    if (!isAttracting && logos.length > 0) {
      rotationRef.current = animate(baseAngle, 360, {
        duration: rotationDuration,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
        onUpdate: (latest) => {
          controls.start((i) => {
            const logo = logos[i];
            const angle =
              (logo.angle * (180 / Math.PI) + latest) * (Math.PI / 180);
            return {
              x: Math.cos(angle) * logo.radius,
              y: Math.sin(angle) * logo.radius,
              scale: 1, // Default scale
              transition: { duration: 0 },
            };
          });
        },
      });
    }

    return () => {
      if (rotationRef.current) {
        rotationRef.current.stop();
      }
    };
  }, [isAttracting, logos, controls, rotationDuration, baseAngle]);

  const handleInteractionStart = useCallback(async () => {
    setIsAttracting(true);
    if (rotationRef.current) {
      rotationRef.current.stop();
    }

    await controls.start({
      x: 0,
      y: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 10,
      },
    });
  }, [controls]);

  const handleInteractionEnd = useCallback(async () => {
    setIsAttracting(false);

    await controls.start((i) => {
      const logo = logos[i];
      const angle = logo.angle;
      return {
        x: Math.cos(angle) * logo.radius,
        y: Math.sin(angle) * logo.radius,
        scale: 0.6, // Smaller scale when not hovering
        transition: {
          type: "spring",
          stiffness: 100,
          damping: 15,
        },
      };
    });
  }, [controls, logos]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full max-w-[400px] aspect-square touch-none cursor-pointer",
        "flex items-center justify-center",
        "p-4 md:p-8",
        className
      )}
      onMouseEnter={handleInteractionStart}
      onMouseLeave={handleInteractionEnd}
      onTouchStart={handleInteractionStart}
      onTouchEnd={handleInteractionEnd}
    >
      {/* Orbit path indicator with glassmorphism */}
      <div
        className="absolute w-[85%] h-[85%] rounded-full 
          border border-white/20 bg-white/5 
          backdrop-blur-sm backdrop-filter
          dark:border-white/10 dark:bg-black/5"
      />

      {/* Central magnet circle with glassmorphism */}
      <div
        className={cn(
          "w-[25%] aspect-square rounded-full",
          "flex items-center justify-center",
          "transition-all duration-500",
          "bg-gradient-to-br from-white/40 to-white/10",
          "dark:from-white/20 dark:to-white/5",
          "backdrop-blur-md backdrop-filter",
          "border border-white/50",
          "dark:border-white/20",
          "shadow-lg",
          "z-10 overflow-hidden",
          "hover:shadow-xl",
          "transform",
          isAttracting ? "scale-110" : "scale-90"
        )}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden
            border-4 border-white/20 dark:border-white/10
            bg-gradient-to-br from-violet-400/80 to-violet-600/80"
        >
          <img
            src="/images/arifurrahman.webp"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Floating logos */}
      {logos.map((logo, index) => (
        <motion.div
          key={index}
          custom={index}
          initial={{
            x: Math.cos(logo.angle) * logo.radius,
            y: Math.sin(logo.angle) * logo.radius,
            scale: 0.6,
          }}
          animate={controls}
          className={cn(
            "absolute",
            "w-[12%] md:w-[15%]",
            "aspect-square",
            "transform-gpu",
            "transition-opacity duration-300",
            isAttracting ? "opacity-70" : "opacity-100"
          )}
          style={{
            transformOrigin: "center center",
          }}
        >
          <motion.div
            animate={{
              rotate: isAttracting ? 0 : 360,
              scale: isAttracting ? 1.2 : 1,
            }}
            transition={{
              rotate: {
                duration: rotationDuration,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
              scale: {
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            {/* MongoDB Logo */}
            {logo.type === "mongodb" && (
              <img
                src="/logo/mongodb.svg"
                alt="MongoDB logo"
                className="w-full h-full"
              />
            )}
            {/* Node.js Logo */}
            {logo.type === "nodejs" && (
              <img
                src="/logo/nodejs.svg"
                alt="Node.js logo"
                className="w-full h-full"
              />
            )}
            {/* WordPress Logo */}
            {logo.type === "wordpress" && (
              <img
                src="/logo/wordpress.svg"
                alt="WordPress logo"
                className="w-full h-full"
              />
            )}
            {/* Figma Logo */}
            {logo.type === "figma" && (
              <img
                src="/logo/figma.svg"
                alt="Figma logo"
                className="w-full h-full"
              />
            )}
            {/* React Logo */}
            {logo.type === "react" && (
              <img
                src="/logo/reactjs.svg"
                alt="React logo"
                className="w-full h-full"
              />
            )}
            {/* Next.js Logo */}
            {logo.type === "next" && (
              <img
                src="/logo/nextjs.svg"
                alt="Next.js logo"
                className="w-full h-full dark:invert"
              />
            )}
            {/* Tailwind Logo */}
            {logo.type === "tailwind" && (
              <img
                src="/logo/tailwindcss.svg"
                alt="Tailwind CSS logo"
                className="w-full h-full"
              />
            )}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
