"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    id: "1",
    title: "UI/UX DESIGN",
    image: "/services/Coding at Workspace.png", // Using existing image paths for now
  },
  {
    id: "2",
    title: "GRAPHIC DESIGN",
    image: "/services/Modern Office Workspace.png",
  },
  {
    id: "3",
    title: "WEB DESIGN",
    image: "/services/Colorful Code Display.png",
  },
  {
    id: "4",
    title: "BRANDING",
    image: "/services/Coding at Workspace.png", // Repeated image as placeholder
  },
];

const ServiceItem = ({ item }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b border-neutral-200 py-12 px-4 md:px-8 transition-colors hover:bg-neutral-50"
    >
      <div className="flex items-center gap-12 sm:gap-24">
        <span className="text-4xl md:text-5xl lg:text-6xl font-normal text-neutral-300 group-hover:text-blue-600 transition-colors duration-300 font-bebas">
            {/* Using Bebas Neue or similar condensed font if available via variable, otherwise fallback */}
            {item.id}.
        </span>
        <h3 className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium text-neutral-800 group-hover:text-blue-600 transition-colors duration-300 uppercase tracking-tight">
          {item.title}
        </h3>
      </div>

      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 -rotate-45 group-hover:rotate-0 transform">
          <MoveRight className="w-8 h-8 md:w-12 md:h-12 text-blue-600" />
      </div>

      <motion.div
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        className="absolute z-10 hidden md:block h-64 w-96 rounded-2xl overflow-hidden pointer-events-none"
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="w-full">
          {services.map((service) => (
            <ServiceItem key={service.id} item={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
