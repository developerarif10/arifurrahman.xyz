"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    id: 1,
    title: "Discovery",
    timeline: "1-2 DAYS",
    description: "We dive deep into your goals, audience, and vision to build a solid foundation for success.",
    image: "/features/discoverycall.webp",
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "Design & Build",
    timeline: "2-3 WEEKS",
    description: "I craft a stunning, high-converting website tailored to your brand and optimized for performance.",
    image: "/features/design-and-development.webp",
    color: "text-blue-500",
  },
  {
    id: 3,
    title: "Launch & Scale",
    timeline: "1-2 DAYS",
    description: "We go live with a flawless launch, ensuring your business is ready to grow and succeed.",
    image: "/features/deployment-and-live.webp",
    color: "text-purple-500",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-neutral-900 mb-6">
            3 Simple Steps. <span className="text-neutral-400">Big Impact.</span>
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto leading-relaxed">
            A clear, collaborative path from initial idea to a high-performing online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
           {/* Connecting Line (Desktop) */}
           <div className="hidden md:block absolute top-[20%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-200 to-transparent z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative z-10 bg-white p-8 rounded-sm border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className="mb-6 flex justify-between items-start">
                  <span className={`text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-sm bg-neutral-100 ${step.color?.replace('text-', 'text-') || 'text-neutral-600'}`}>
                    {step.timeline}
                  </span>
              </div>

               {/* Process Image */}
              <div className="mb-8 bg-neutral-50 rounded-sm relative aspect-video w-full overflow-hidden shadow-inner">
                 <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover transform transition-transform duration-700 hover:scale-105"
                 />
              </div>

              <div className="mt-auto">
                 <div className="text-5xl font-bebas text-neutral-200 mb-2">0{step.id}.</div>
                 <h3 className="text-2xl font-medium text-neutral-900 mb-3">{step.title}</h3>
                 <p className="text-neutral-500 leading-relaxed text-balance">
                    {step.description}
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
