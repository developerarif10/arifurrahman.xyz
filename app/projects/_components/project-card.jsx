"use client";

import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ content }) => {
  return (
    <Link href={content.projectUrl || "#"} className="block group w-full">
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden rounded-[2rem]">
        <Image
          src={content.thumbnaiUrl}
          alt={content.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
          <h3 className="text-2xl md:text-3xl font-medium text-white mb-4">
            {content.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {content.techStack?.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-xs md:text-sm font-medium text-white/90 bg-white/20 backdrop-blur-md rounded-full border border-white/10"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
