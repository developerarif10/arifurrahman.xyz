"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "LumeX",
    category: "SaaS",
    tags: ["SaaS", "Dashboard Design"],
    image: "/projects/project_1.jpeg", // Keeping existing paths
    link: "/projects/lumex",
  },
  {
    id: 2,
    title: "Planza",
    category: "Framer Website",
    tags: ["Framer Website", "Development"],
    image: "/projects/project_2.jpeg",
    link: "/projects/plantza",
  },
  {
    id: 3,
    title: "Horizon Atlas",
    category: "Travel",
    tags: ["Travel", "Web Design"],
    image: "/projects/project_3.jpeg",
    link: "/projects/horizon-atlas",
  },
  {
    id: 4,
    title: "NeuroSync",
    category: "Healthcare",
    tags: ["Healthcare", "Mobile App"],
    image: "/projects/project_1.jpeg", // Reuse or add new image if available
    link: "/projects/neurosync",
  },
];

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link} className="block group">
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-[2rem]">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-xs md:text-sm font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
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
          Featured works
        </h2>
        <Link
          href="/works"
          className="group inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 hover:bg-neutral-800 text-white rounded-full transition-all duration-300 text-sm font-medium shadow-lg shadow-neutral-900/10"
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
