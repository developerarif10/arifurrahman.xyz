"use client";

import { useEffect, useRef } from "react";

const TransparentCard = ({
  children,
  className = "",
  borderRadius = "1rem",
  padding = "1.5rem",
  lightBlueColor = "rgba(125, 211, 252, 0.3)", // Light blue color for the shadow
}) => {
  const cardRef = useRef(null);

  // Optional: Add subtle animation effect
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Calculate position relative to the center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const offsetX = ((x - centerX) / centerX) * 10;
      const offsetY = ((y - centerY) / centerY) * 10;

      // Apply subtle shadow adjustment based on mouse position
      if (card.querySelector(".inner-shadow")) {
        card.querySelector(".inner-shadow").style.boxShadow = `
          ${lightBlueColor} 0px 30px 60px -12px inset, 
          rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset,
          ${lightBlueColor} 0px ${-20 + offsetY}px 30px -10px inset,
          ${lightBlueColor} ${offsetX}px 0px 30px -15px inset
        `;
      }
    };

    card.addEventListener("mousemove", handleMouseMove);
    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lightBlueColor]);

  return (
    <div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        borderRadius,
        background: "transparent",
        padding,
        outlineOffset: "-4px",
      }}
    >
      {/* Enhanced inner shadow effect with better bottom shadow */}
      <div
        className="absolute inset-0 pointer-events-none inner-shadow"
        style={{
          borderRadius: "inherit",
          boxShadow: `
            ${lightBlueColor} 0px 30px 60px -12px inset, 
            rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset,
            ${lightBlueColor} 0px -25px 50px -15px inset
          `,
        }}
      />

      {/* Subtle gradient overlay for softer effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          borderRadius: "inherit",
          background:
            "radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.03) 100%)",
          opacity: 0.7,
        }}
      />

      {/* Soft highlight at the top */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)",
          opacity: 0.5,
        }}
      />

      {/* Content container */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default TransparentCard;
