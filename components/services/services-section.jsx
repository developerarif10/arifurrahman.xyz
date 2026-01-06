"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const services = [
  {
    id: "01",
    title: "UI/UX DESIGN",
    image: "/services/Coding at Workspace.png",
    features: [
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Interactive Interface Design",
      "Usability Testing & Iteration"
    ]
  },
  {
    id: "02",
    title: "GRAPHIC DESIGN",
    image: "/services/Modern Office Workspace.png",
    features: [
      "Brand Identity & Logo Design",
      "Marketing Materials (Flyers, Brochures)",
      "Social Media Graphics",
      "Vector Illustrations"
    ]
  },
  {
    id: "03",
    title: "WEB DESIGN",
    image: "/services/Colorful Code Display.png",
    features: [
      "Responsive website design",
      "Landing page design and optimization",
      "Webflow development and customization",
      "Website maintenance and updates"
    ]
  },
  {
    id: "04",
    title: "BRANDING",
    image: "/services/Coding at Workspace.png",
    features: [
      "Brand Strategy & Positioning",
      "Visual Identity Systems",
      "Brand Guidelines",
      "Rebranding Services"
    ]
  },
];

const ServiceItem = ({ item, isOpen, onClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, {
    stiffness: 300,
    damping: 30
  });
  const mouseYSpring = useSpring(y, {
    stiffness: 300,
    damping: 30
  });

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
      className="border-b border-neutral-200 last:border-none relative"
    >
      <div 
        onClick={onClick}
        className="w-full py-10 flex items-center justify-between group cursor-pointer transition-colors hover:bg-neutral-50"
      >
        <div className="flex items-center gap-6 md:gap-12 relative z-10">
           <span className={`text-4xl md:text-6xl font-bebas transition-colors duration-300 ${isOpen ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
             {item.id}.
           </span>
           <h3 className={`text-4xl md:text-6xl font-bebas tracking-wide uppercase transition-colors duration-300 ${isOpen ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}>
             {item.title}
           </h3>
        </div>
        <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`transition-colors duration-300 relative z-10 ${isOpen ? 'text-neutral-900' : 'text-neutral-400 group-hover:text-neutral-600'}`}
        >
            <ChevronDown size={40} strokeWidth={1.5} />
        </motion.div>
        
        {/* Floating Image on Hover */}
        <motion.div
            style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
            }}
            variants={{
            initial: { scale: 0, rotate: "-12.5deg", opacity: 0 },
            whileHover: { scale: 1, rotate: "12.5deg", opacity: 1 },
            }}
            transition={{ type: "spring" }}
            className="absolute z-0 hidden md:block h-32 w-48 md:h-64 md:w-96 rounded-2xl overflow-hidden pointer-events-none"
        >
            <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            />
        </motion.div>

      </div>
      
      <AnimatePresence>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden relative z-0"
            >
                <div className="pb-12 pl-4 md:pl-28">
                     <ul className="space-y-5">
                        {item.features.map((feature, idx) => (
                             <motion.li 
                                key={idx} 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                                className="flex items-center gap-4 text-lg md:text-2xl text-neutral-600 font-light"
                             >
                                <CheckCircle2 className="text-emerald-600 w-6 h-6 md:w-8 md:h-8 flex-shrink-0" strokeWidth={1.5} />
                                <span>{feature}</span>
                             </motion.li>
                        ))}
                     </ul>
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-8">
            <span className="text-neutral-500 uppercase tracking-wider text-sm md:text-base font-medium font-sans">
                Services
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.1] font-medium max-w-4xl text-neutral-400 font-sans">
                Design solutions that elevate brands and create seamless user experiences. <span className="text-neutral-900">I help bring ideas to life with strategy and creativity</span>
            </h2>
        </div>

        <div className="w-full flex flex-col">
          {services.map((service, index) => (
            <ServiceItem 
                key={service.id} 
                item={service} 
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
            />
          ))}
          <div className="border-b border-neutral-200" /> {/* Final border */}
        </div>
      </div>
    </section>
  );
}
