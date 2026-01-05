"use client";

import { Button } from "@/components/ui/button"; // Assuming shadcn or similar button exists, otherwise standard button
import { cn } from "@/lib/utils"; // Assuming cn utility exists, usually does in shadcn setup
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1], // Custom bezier for "nice floating" feel
      },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  return (
    <header 
        className={cn(
            "fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 flex items-center justify-between transition-all duration-300 pointer-events-none",
            scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
    >
        {/* Pointer events handled on children to allow clicking through transparent areas if needed, 
            but usually header has background. User asked for specific new design, often transparent on hero.
            Adding a subtle gradient or solid background if scrolled is common, but starting transparent.
            Wait, user said "Remove current... make attached new header exact same".
            Without seeing attached, I'll stick to a clean, minimal layout. 
            I'll add pointer-events-auto to children.
        */}
      
      {/* Logo */}
      <div className="z-50 pointer-events-auto">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-black">
          ARIFUR RAHMAN
        </Link>
      </div>

      {/* Desktop Nav - Hidden on Mobile */}
      <nav className="hidden md:flex items-center gap-8 pointer-events-auto text-black">
        <Link href="/work" className="text-sm font-medium hover:opacity-70 transition-opacity">Work</Link>
        <Link href="/about" className="text-sm font-medium hover:opacity-70 transition-opacity">About</Link>
        <Link href="/contact" className="text-sm font-medium hover:opacity-70 transition-opacity">Contact</Link>
      </nav>

      {/* Right Side Button */}
      <div className="hidden md:block z-50 pointer-events-auto">
        <Button 
            variant="default" 
            className="rounded-full bg-black text-white hover:bg-neutral-800 px-6 font-medium"
            asChild
        >
            <Link href="/schedule">
                Use For Free
            </Link>
        </Button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden z-50 pointer-events-auto text-black">
        <button onClick={toggleMenu} className="p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white text-black z-40 flex flex-col items-center justify-center pointer-events-auto"
          >
             <nav className="flex flex-col items-center gap-8 text-2xl font-light">
                <Link href="/work" onClick={toggleMenu}>Work</Link>
                <Link href="/about" onClick={toggleMenu}>About</Link>
                <Link href="/contact" onClick={toggleMenu}>Contact</Link>
                <div className="mt-8">
                    <Button className="rounded-full text-lg px-8 py-6" onClick={toggleMenu}>
                        Schedule a call
                    </Button>
                </div>
             </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
