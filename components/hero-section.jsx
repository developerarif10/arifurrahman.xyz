"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import ClipPathImage from "./ClipPathImage";
import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { ShinyButton } from "./my-components/shiny-button";
import { TextLoop } from "./ui/text-loop";

export default function Home() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[100vh] w-full overflow-hidden">
        <img src="/images/bg.svg" className="absolute" alt="" />
        <div className="min-h-screen mx-auto max-w-5xl text-white flex items-center justify-center p-4 py-20 overflow-hidden">
          <div className="container mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between relative">
            {/* Left Content Section */}
            <div className="md:w-1/2 text-center md:text-left p-4 z-10 mb-8 md:mb-0">
              <div className="relative inline-block mb-4">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                    Arifur Rahman
                  </span>
                </h1>
                {/* <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div> */}
              </div>

              <p className=" text-zinc-600 dark:text-zinc-300 mb-6 font-medium">
                I&apos;m a
                <TextLoop
                  className="overflow-y-clip"
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                    },
                  }}
                >
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white mx-1">
                    React Specialist.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Next.js Expert.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Wordpress Specialist.
                  </span>
                  <span className="inline-block px-2 py-0 font-bold bg-[#90e0ef] dark:bg-[#003566] dark:text-white  mx-1">
                    Tech Enthusiast.
                  </span>
                </TextLoop>
                Developing intuitive, high-performance web applications with
                innovation, efficiency, and seamless user interfaces
              </p>

              {/* <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Developing intuitive, high-performance web applications with
                innovation, efficiency, and seamless user interfaces
              </p> */}

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                <Link href="/projects">
                  <ShinyButton type="button">View Projects</ShinyButton>
                </Link>
                <Link href="#contacts">
                  <ShinyButton type="button">Contact Me</ShinyButton>
                </Link>
              </div>
            </div>
            {/* Right Image Section */}
            <div className="md:w-1/2 flex justify-center relative">
              <ClipPathImage />
            </div>
          </div>
        </div>
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
            "opacity-15"
          )}
          squaresClassName="hover:fill-blue-500/20"
        />
      </div>
    </section>
  );
}
