"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  return (
    <Link href={project.link || project.projectUrl || "#"} className="block group w-full" target={project.target || "_self"}>
      <div className="relative aspect-[16/12] w-full overflow-hidden rounded-sm bg-neutral-900">
        <Image
          src={project.image || project.thumbnaiUrl}
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
            {project.category || (project.techStack && project.techStack[0]) || "Project"}
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
             {project.description || project.subTitle}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
