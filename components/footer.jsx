"use client";

import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"; // Added Icons
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full text-white overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/footer_bg.avif"
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay matching the design */}
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-black/40" /> {/* Double layer for depth */}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-16 md:py-20">
        {/* Top Section: Contacts & Socials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          {/* Email */}
          <div className="space-y-4">
            <h3 className="text-white/80 text-sm font-medium tracking-wide">
              Email :
            </h3>
            <a
              href="mailto:arifurrahman@std.cu.ac.bd"
              className="block text-2xl md:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              arifurrahman@std.cu.ac.bd
            </a>
          </div>

          {/* Call */}
          <div className="space-y-4">
            <h3 className="text-white/80 text-sm font-medium tracking-wide">
              Call Today :
            </h3>
             <a
              href="tel:+8801685366704"
              className="block text-2xl md:text-3xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            >
              +880 1685-366704
            </a>
          </div>

          {/* Socials */}
          <div className="space-y-4 lg:text-right">
             <h3 className="text-white/80 text-sm font-medium tracking-wide">
              Social :
            </h3>
            <div className="flex gap-6 lg:justify-end">
              <Link href="https://www.facebook.com/arifurrahamanrafi" className="hover:opacity-80 transition-opacity">
                <Facebook className="w-8 h-8 fill-white" />
              </Link>
              <Link href="https://www.instagram.com/arifurrahman_rafi/" className="hover:opacity-80 transition-opacity">
                <Instagram className="w-8 h-8" />
              </Link>
               <Link href="www.linkedin.com/in/arifurrahmanrafi" className="hover:opacity-80 transition-opacity">
                <Linkedin className="w-8 h-8" />
              </Link>
                <Link href="https://x.com/iamarifurrahman" className="hover:opacity-80 transition-opacity">
                <Twitter   className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>

  <div className="w-full h-px bg-white/30 mb-8" />
    <div className="text-center text-white/90 text-sm font-medium">  <p>
            © Copyright {currentYear}. All Rights Reserved by <span className="underline decoration-white/50 underline-offset-4"><Link href="https://github.com/developerarif">Arifur Rahman</Link></span>
          </p></div>
      </div>
    </footer>
  );
}
