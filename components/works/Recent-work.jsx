"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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
    title: "Agenxa",
    category: "Web",
    tags: ["SaaS", "Web Design"],
    image: "/projects/agenxa/agenxa-hero.webp",
    link: "/projects/agenxa",
    description: "A premium dark-mode interface designed to establish brand authority for a digital innovation agency."
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

import ProjectCard from "./ProjectCard";

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
