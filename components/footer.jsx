"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-50 text-black overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/footer_bg.avif"
          alt="Footer Background"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-white/90" />
      </div>

      <div className="relative container mx-auto px-6 py-10  md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
          {/* Left Section: CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-12">
                Got a<br />
                project ?
              </h2>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-6 text-xl font-medium text-white bg-black rounded-none hover:bg-neutral-800 transition-colors w-full"
              >
                Contact Me
              </Link>
            </div>

            <div className="mt-16 lg:mt-auto">
              <p className="text-neutral-600 max-w-md text-lg leading-relaxed">
                Interfaces designer, Creative Director at Meta (23' — present).
                Co-founder of Deltaboard, a modular climbing hangboard.
              </p>
            </div>
          </div>

          {/* Right Section: Links & Info */}
          <div className="flex flex-col justify-between gap-12">
            {/* Navigation */}
            <nav className="flex flex-wrap gap-8 text-lg font-medium tracking-wide uppercase justify-end">
              <Link
                href="/about"
                className="hover:text-neutral-600 transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="hover:text-neutral-600 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/work"
                className="hover:text-neutral-600 transition-colors"
              >
                Work
              </Link>
              <Link
                href="/contact"
                className="hover:text-neutral-600 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Contact Details */}
            <div className="space-y-4">
              <a
                href="https://cal.com/raydencarlson"
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-6 -mx-6 transition-all duration-300 hover:bg-white hover:shadow-lg rounded-lg"
              >
                <h3 className="text-neutral-500 text-lg mb-2 group-hover:text-black">
                  Book a Call
                </h3>
                <span className="text-2xl md:text-3xl font-medium">
                  cal.com/raydencarlson
                </span>
              </a>

              <a
                href="mailto:raydencarlson@design.com"
                className="group block p-6 -mx-6 transition-all duration-300 hover:bg-white hover:shadow-lg rounded-lg"
              >
                <h3 className="text-neutral-500 text-lg mb-2 group-hover:text-black">
                  Email
                </h3>
                <span className="text-2xl md:text-3xl font-medium">
                  arifurrahman@std.cu.ac.bd
                </span>
              </a>

              <a
                href="tel:+310647479203"
                className="group block p-6 -mx-6 transition-all duration-300 hover:bg-white hover:shadow-lg rounded-lg"
              >
                <h3 className="text-neutral-500 text-lg mb-2 group-hover:text-black">
                  Phone
                </h3>
                <span className="text-2xl md:text-3xl font-medium">
                  +880 01685-366704
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-24 pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-6 text-neutral-600">
          <p className="text-lg">All Right Reserved 2026 © Arifur Rahman</p>
          <div className="flex gap-8 text-lg">
            <a href="#" className="hover:text-black transition-colors">
              Instagram
            </a>
            <a href="#" className="hover:text-black transition-colors">
              X (Twitter)
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Dribbble
            </a>
            <a href="#" className="hover:text-black transition-colors">
              Contra
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
