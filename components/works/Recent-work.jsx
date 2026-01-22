"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "LumeX",
    category: "SaaS",
    tags: ["SaaS", "Dashboard Design"],
    image: "/projects/project_1.jpeg", 
    link: "/projects/lumex",
    description: "A comprehensive dashboard solution for modern SaaS platforms, featuring real-time analytics and intuitive user management."
  },
  {
    id: 2,
    title: "Planza",
    category: "Framer Website",
    tags: ["Framer Website", "Development"],
    image: "/projects/project_2.jpeg",
    link: "/projects/plantza",
    description: "High-performance marketing site built with Framer, focused on conversion optimization and smooth animations."
  },
  {
    id: 3,
    title: "Horizon Atlas",
    category: "Travel",
    tags: ["Travel", "Web Design"],
    image: "/projects/project_3.jpeg",
    link: "/projects/horizon-atlas",
    description: "Immersive travel experience platform helping users discover and plan their next adventure with ease."
  },
  {
    id: 4,
    title: "NeuroSync",
    category: "Healthcare",
    tags: ["Healthcare", "Mobile App"],
    image: "/projects/project_1.jpeg", 
    link: "/projects/neurosync",
    description: "Advanced healthcare application connecting patients with specialists through secure, real-time consultation."
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link} className="block group w-full">
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-sm bg-neutral-900">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

        {/* Hover Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top Pill / Tag */}
        <div className="absolute top-6 left-6 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
          <span className="bg-[#d3d3ff] text-black text-[10px] md:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm">
            {project.category}
          </span>
        </div>

        {/* Top Right Icon */}
        <div className="absolute top-6 right-6 z-10 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
          <div className="bg-white text-black p-2 rounded-sm">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full z-10">
          <h3 className="text-3xl md:text-4xl font-bold text-white leading-[1.1] mb-2 tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm md:text-base text-white/80 line-clamp-2 font-light">
             {project.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default function RecentWorkCard() {
  return (
    <section className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-4">
        <h2 className="text-4xl md:text-5xl font-medium text-neutral-900 tracking-tight">
          Selected works
        </h2>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 px-8 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-sm transition-all duration-300 text-sm font-medium shadow-lg shadow-neutral-900/10"
        >
          All Works
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
