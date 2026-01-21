"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const techStacks = [
  {
    name: "React",
    icon: "/svg/react-logo.svg",
    className: "h-14 w-14",
    url: "https://react.dev",
  },
  {
    name: "Next.js",
    icon: "/svg/nextjs-logotype-light-background.svg",
    className: "h-10 w-32",
    url: "https://nextjs.org",
  },
  {
    name: "TypeScript",
    icon: "/svg/typescript-logo.svg",
    className: "h-14 w-14",
    url: "https://www.typescriptlang.org",
  },
  {
    name: "GSAP",
    icon: "/svg/gsap-black.svg",
    className: "h-10 w-24", 
    url: "https://greensock.com/gsap",
  },
  {
    name: "Tailwind CSS",
    icon: "/svg/tailwindcss-logo.svg",
    className: "h-16 w-16", 
    url: "https://tailwindcss.com",
  },
  {
    name: "Framer Motion",
    icon: "/svg/motion.svg",
    className: "h-16 w-16",
    url: "https://www.framer.com/motion",
  },
  {
    name: "Vercel",
    icon: "/svg/vercel-logotype-light.svg",
    className: "h-8 w-24",
    url: "https://vercel.com",
  },
  {
    name: "Figma",
    icon: "/svg/figma-logo.svg",
    className: "h-12 w-12",
    url: "https://www.figma.com",
  },
  {
    name: "Supabase",
    icon: "/svg/supabase-logo.svg",
    className: "h-12 w-12",
    url: "https://supabase.com",
  },
  {
    name: "Contentful",
    icon: "/svg/contentful-logo.svg",
    className: "h-10 w-10",
    url: "https://www.contentful.com",
  },
  {
    name: "WordPress",
    icon: "/svg/wordpress-logo.svg",
    className:"h-40 w-40",
    url: "https://wordpress.org",
  },
  {
    name: "Elementor",
    icon: "/svg/elementor-seeklogo.svg",
    className: "h-40 w-40",
    url: "https://elementor.com",
  },
];


const row1 = techStacks.slice(0, 3);
const row2 = techStacks.slice(3, 9);
const row3 = techStacks.slice(9, 12);

export default function TechStack() {
  return (
    <section className="mt-20 w-full bg-white">
      <div className="max-w-7xl mx-auto px-6"> 
        <h3 className="text-4xl font-semibold uppercase tracking-widest font-bebas mb-4">
          EXPERT AT
        </h3>

        <div className="flex flex-col border-t border-b border-zinc-200 divide-y divide-zinc-200">
          {/* Row 1 - 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {row1.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>

          {/* Row 2 - 6 items */}
          <div className="grid grid-cols-1 md:grid-cols-6 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {row2.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>

           {/* Row 3 - 3 items */}
           <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            {row3.map((tech, index) => (
              <TechCard key={tech.name} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech }) {
  return (
    <Link href={tech.url} target="_blank" className="w-full h-full block">
        <motion.div
        className="group relative flex h-48 w-full items-center justify-center bg-white overflow-hidden cursor-pointer"
        whileHover={{ scale: 1 }} 
        >
            {/* Hover Background - Black */}
            <motion.div 
                className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
            />

        <div className="relative z-10 p-4 transition-all duration-300 ease-in-out group-hover:scale-110">
            {/* Image with filter for hover effect */}
            <div className="relative h-full w-full flex items-center justify-center">
                <Image
                src={tech.icon}
                alt={tech.name}
                width={100}
                height={100}
                className={`object-contain transition-all duration-300 group-hover:brightness-0 group-hover:invert ${tech.className}`}
                />
            </div>
        </div>
        </motion.div>
    </Link>
  );
}
