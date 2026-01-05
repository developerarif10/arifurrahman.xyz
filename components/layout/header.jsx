"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "WORK", path: "/work" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4 mix-blend-difference">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bulever text-2xl text-white">
          ARIF
          <br />
          RAHMAN
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-white hover:text-colorful1 transition-colors ${
                pathname === item.path ? "text-colorful1" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-4 py-2 bg-white text-black rounded-full hover:bg-colorful1 transition-colors"
          >
            CONTACT ME
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="sr-only">Menu</span>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-current transform transition-transform ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-full h-0.5 bg-current transform transition-transform ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <motion.div
          className={`fixed inset-0 bg-black z-40 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ x: "100%" }}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ type: "tween" }}
        >
          <div className="h-full flex flex-col items-center justify-center space-y-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white text-2xl hover:text-colorful1 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black rounded-full hover:bg-colorful1 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              CONTACT ME
            </Link>
          </div>
        </motion.div>
      </nav>
    </header>
  );
}
