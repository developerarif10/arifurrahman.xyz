"use client";

import { CardSpotlight } from "@/components/ui/card-spotlight";
import ServiceSpotCard from "./ServiceSpotCard";

const spotCardContent = [
  {
    title: "Services I Offer",
    subTitle:
      "I can help develop solutions that will help you grow your business:",
    stepTitle: [
      "Front-end Web Development",
      "UI/UX Design",
      "CMS Development",
      "API Development & Integration",
    ],
  },
  {
    title: "Tools & Technologies",
    subTitle:
      "I use modern, proven tools to deliver fast, scalable, and maintainable products.",
    stepTitle: [
      "Frontend: (React, Tailwind CSS, TypeScript)",
      "Backend: (Node.js, Fastify, MongoDB, PostgreSQL)",
      "Design: (Figma, Framer, Adobe Photoshop)",
    ],
  },
  {
    title: "My Design Approach",
    subTitle:
      "As a designer-turned-developer, I prioritize user experience in every solution I build. My design philosophy is rooted in simplicity, clarity, and purpose.",
    stepTitle: [
      "User-Centered Design",
      "Modern, Clean Interfaces",
      "Responsive & Mobile-First Layouts",
      "Wireframing & Interactive Prototypes",
    ],
  },
  {
    title: "WordPress Expertise",
    subTitle:
      "I also specialize in building dynamic and fully customized WordPress websites that are easy to manage and scale. Whether it's a business site, blog, or eCommerce store, I deliver fast, SEO-friendly, and user-focused WordPress solutions.",
    stepTitle: [
      "Custom WordPress Themes",
      "Elementor & Divi Page Builders",
      "Speed Optimization & SEO Best Practices",
      "WooCommerce Integration",
    ],
  },
];

export default function CardSpotlightDemo() {
  return (
    <section className="px-4 py-8 md:py-12">
      <div className="flex flex-col mb-10 md:mb-16">
        <h1 className="font-bold text-3xl md:text-5xl md:mb-4 box-border bg-clip-text text-[rgba(255,255,255,0)] tracking-[-2.24px] bg-[linear-gradient(355deg,rgb(0,0,0)_20.37%,rgb(100,100,100)_81.25%)] leading-[64.4px]">
          Creating Digital Solutions
        </h1>
        <p className="text-base md:text-lg">
          I specialize in designing visually striking interfaces and developing
          high-performance applications that not only look great but also
          deliver real business value. Every project is built with precision,
          purpose, and a focus on user experience.
        </p>
      </div>

      <div className="flex gap-4 flex-wrap justify-center items-center">
        {spotCardContent.map((spotCard, index) => (
          <CardSpotlight
            key={index}
            className="w-96 h-96 bg-gradient-to-br from-gray-900 to-black"
          >
            <ServiceSpotCard
              title={spotCard.title}
              subTitle={spotCard.subTitle}
              stepTitle={spotCard.stepTitle}
            />
          </CardSpotlight>
        ))}
      </div>
    </section>
  );
}
