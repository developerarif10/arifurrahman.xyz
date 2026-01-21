"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AlignCenterIcon, XIcon } from "./animatedIcons/animatedicons";

export default function NewHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "About", href: "/about" },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
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
    <>
      <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex items-center justify-center px-4 md:px-12 pointer-events-none">
        {/* Central Floating Navbar (Pill) */}
        <div className="pointer-events-auto hidden md:flex items-center gap-1.5 p-1 rounded-sm border border-black/5 bg-white/80 backdrop-blur-xl shadow-sm hover:shadow-md transition-shadow duration-300">
          
          {/* Logo Icon inside Pill (Optional uniqueness) Or just Start links */}
          <div className="pl-4 pr-1">
             <Link href="/" className="font-bold text-lg tracking-tight hover:opacity-70 transition-opacity">AR</Link>
          </div>
          
          <div className="h-4 w-px bg-neutral-200 mx-1" />

          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative px-4 py-1.5 text-sm font-medium transition-colors duration-300 rounded-full z-10",
                  isActive ? "text-black" : "text-neutral-500 hover:text-black"
                )}
                onMouseEnter={() => setHoveredPath(item.href)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {item.name}
                {/* Active/Hover Background Pill */}
                {(hoveredPath === item.href || (isActive && hoveredPath === null)) && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-neutral-100 rounded-sm -z-10"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                  />
                )}
              </Link>
            );
          })}
          
          <div className="h-4 w-px bg-neutral-200 mx-1" />

          <div className="pr-1 pl-1">
            <Button
              variant="ghost"
              className="rounded-sm bg-transparent hover:bg-neutral-100 text-neutral-900 px-5 py-1.5 h-auto text-sm font-medium transition-all"
              asChild
            >
              <Link href="/contact">
                Contact
              </Link>
            </Button>
          </div>
        </div>

        {/* Right - Empty to balance flex */}
        <div className="hidden md:block pointer-events-none opacity-0"></div>

        {/* Mobile Header Elements - Unified Pill */}
        <div className="flex md:hidden w-full items-center justify-between pointer-events-auto top-0 relative bg-white/80 backdrop-blur-xl border border-black/5 shadow-sm rounded-sm p-2">
             <Link href="/" className="text-lg font-bold text-black px-4 tracking-tight">
                AR
             </Link>
             <button 
                onClick={toggleMenu} 
                className="p-2 rounded-sm hover:bg-black/5 active:scale-95 transition-all"
            >
                {isOpen ? <XIcon size={22} /> : <AlignCenterIcon size={22} />}
             </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center pointer-events-auto"
          >
            <nav className="flex flex-col items-center gap-8">
              {navItems.map((item) => (
                 <Link 
                    key={item.href} 
                    href={item.href} 
                    onClick={toggleMenu}
                    className="text-3xl font-light text-black tracking-tight"
                 >
                    {item.name}
                 </Link>
              ))}
              <div className="mt-8">
                <Button className="rounded-sm text-lg px-8 py-6 bg-black text-white" onClick={toggleMenu} asChild>
                    <Link href="/contact">Schedule a call</Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
