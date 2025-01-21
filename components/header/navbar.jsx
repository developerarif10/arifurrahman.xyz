"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="mt-4 relative max-w-2xl w-full bg-white border border-gray-200 rounded-[2rem] mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto backdrop-blur-xl transition dark:bg-[hsla(0,0%,4%,.2)] dark:border-neutral-700">
      <div className="px-4 md:px-0 flex justify-between items-center">
        <div className="flex items-center">
          {/* <!-- Logo --> */}
          <Link
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            href="/"
          >
            <Image
              src="/logo/logo.png"
              alt="Logo"
              width={100}
              height={10}
              className="dark:invert"
            />
          </Link>
          {/* <!-- End Logo --> */}
        </div>

        <div className="md:hidden flex items-center justify-center gap-2">
          {/* mode toggle for mobile verson navbar */}
          <ModeToggle />
          {/* <!-- Toggle Button --> */}
          <button
            type="button"
            className="hs-collapse-toggle flex justify-center items-center size-9 border border-gray-200 text-black rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <svg
              className={`${isMenuOpen ? "hidden" : "block"} shrink-0 size-3.5`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
            <svg
              className={`${isMenuOpen ? "block" : "hidden"} shrink-0 size-4`}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
          {/* <!-- End Toggle Button --> */}
        </div>
      </div>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:block transition-all duration-300 basis-full grow`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7">
          <Link
            className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:border-neutral-200 dark:text-neutral-200"
            href="/"
            aria-current="page"
          >
            Home
          </Link>
          <Link
            className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            href="/about"
          >
            About
          </Link>
          <Link
            className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            href="/blogs"
          >
            Blogs
          </Link>
          <Link
            className="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200"
            href="#"
          >
            Projects
          </Link>
          <div className="hidden lg:block">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
