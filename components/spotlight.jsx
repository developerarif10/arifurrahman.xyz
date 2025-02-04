"use client";
import useMousePosition from "@/hooks/useMousePosition";
import { useEffect, useRef, useState } from "react";

export default function Spotlight({ children, className = "" }) {
  const containerRef = useRef(null);
  const mousePosition = useMousePosition();
  const mouse = useRef({ x: 0, y: 0 });
  const containerSize = useRef({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(Array.from(containerRef.current.children).map((el) => el));
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={className} ref={containerRef}>
      {children}
    </div>
  );
}

export function SpotlightCard({ children, className = "" }) {
  return (
    <div
      className={`relative h-full bg-[rgba(39,39,42,0.4)] rounded-lg p-px 
      before:absolute before:w-4 before:h-4 before:-left-10 before:-top-10
      before:bg-slate-400 before:rounded-lg before:opacity-0 
      before:pointer-events-none before:transition-opacity before:duration-500 
      before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] 
      before:group-hover:opacity-100 before:z-10 before:blur-[25px] 
      after:absolute after:w-40 after:h-40 after:-left-24 after:-top-24 
      after:bg-white after:rounded-lg after:opacity-0 after:pointer-events-none 
      after:transition-opacity after:duration-500 
      after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] 
      after:hover:opacity-5 after:z-30 after:blur-[25px] 
      overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
