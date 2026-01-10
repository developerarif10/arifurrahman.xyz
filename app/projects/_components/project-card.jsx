"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const ProjectCard = ({ content }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate tilt based on mouse position
  const rotateX = isHovered ? ((mousePosition.y / cardRef.current?.offsetHeight) - 0.5) * -10 : 0;
  const rotateY = isHovered ? ((mousePosition.x / cardRef.current?.offsetWidth) - 0.5) * 10 : 0;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
      }}
    >
      {/* Animated Gradient Border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500 animate-gradient-xy" />
      
      {/* Main Card */}
      <div className="relative bg-white rounded-[2.5rem] overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500">
        {/* Image Section with Parallax */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200">
          <div
            className="absolute inset-0 transition-transform duration-700 ease-out"
            style={{
              transform: isHovered 
                ? `scale(1.15) translate(${rotateY * 2}px, ${rotateX * 2}px)` 
                : 'scale(1)',
            }}
          >
            <Image
              src={content?.thumbnaiUrl}
              alt={content?.title}
              fill
              className="object-cover"
            />
          </div>
          
          {/* Dark overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 px-4 py-1.5 bg-green-500/90 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase tracking-wider shadow-lg">
            ✦ Live
          </div>

          {/* Contributor Avatars */}
          {content?.avatars && content.avatars.length > 0 && (
            <div className="absolute top-4 right-4 flex items-center -space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {content.avatars.slice(0, 3).map((src, index) => (
                <div
                  key={index}
                  className="w-9 h-9 rounded-full border-2 border-white bg-white shadow-lg overflow-hidden"
                  style={{
                    animation: isHovered ? `fadeInScale 0.3s ease-out ${index * 0.1}s forwards` : 'none',
                  }}
                >
                  <Image
                    src={src}
                    alt={`Tech ${index + 1}`}
                    width={36}
                    height={36}
                    className="object-contain p-1"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Floating Action Buttons */}
          <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Link
              href={content?.githubUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-white/95 backdrop-blur-md rounded-2xl text-neutral-900 font-semibold text-sm hover:bg-white hover:scale-110 transition-all duration-300 shadow-xl"
              style={{
                animation: isHovered ? 'bounceIn 0.5s ease-out 0.1s forwards' : 'none',
                opacity: isHovered ? 1 : 0,
              }}
            >
              <Github size={18} />
              <span>Source</span>
            </Link>
            <Link
              href={content?.projectUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-md rounded-2xl text-white font-semibold text-sm hover:from-purple-700 hover:to-pink-700 hover:scale-110 transition-all duration-300 shadow-xl"
              style={{
                animation: isHovered ? 'bounceIn 0.5s ease-out 0.2s forwards' : 'none',
                opacity: isHovered ? 1 : 0,
              }}
            >
              <span>Live Demo</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 space-y-4">
          {/* Title with Gradient */}
          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-neutral-900 via-neutral-700 to-neutral-900 bg-clip-text text-transparent leading-tight group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-purple-600 transition-all duration-500">
            {content?.title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 leading-relaxed line-clamp-2 text-sm">
            {content?.subTitle}
          </p>

          {/* Tech Stack with Glow Effect */}
          <div className="flex flex-wrap gap-2 pt-2">
            {content?.techStack?.map((tech, index) => (
              <span
                key={index}
                className="group/badge relative px-4 py-2 bg-gradient-to-r from-neutral-50 to-neutral-100 text-neutral-800 text-xs font-bold rounded-full border border-neutral-200 hover:border-purple-400 hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-200/50 hover:-translate-y-0.5"
              >
                {tech}
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover/badge:opacity-20 blur-md transition-opacity duration-300" />
              </span>
            ))}
          </div>

          {/* Bottom CTA Section */}
          <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
            <Link
              href={content?.githubUrl}
              target="_blank"
              className="flex items-center gap-2 text-neutral-600 hover:text-purple-600 font-medium text-sm transition-colors duration-300 group/link"
            >
              <Github size={18} className="transition-transform duration-300 group-hover/link:rotate-12" />
              <span>View Code</span>
            </Link>

            <Link
              href={content?.projectUrl}
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white rounded-full font-semibold text-sm hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 group/btn"
            >
              <span>Visit Site</span>
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
