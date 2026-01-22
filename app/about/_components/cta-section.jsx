import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="w-full py-12 md:py-24 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-[2rem] bg-neutral-50/50 px-6 py-12 sm:px-12 sm:py-20 text-center border border-neutral-100">
          
          {/* Soft Gradient Background - Centered behind text */}
          <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
            <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-tr from-purple-200/30 to-blue-200/30 blur-[80px] md:blur-[120px] rounded-full opacity-80" />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 md:space-y-8">
             {/* Small Tag */}
            <div className="flex items-center gap-2 text-neutral-500 mb-1">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" />
                </svg>
                <span className="text-[10px] md:text-xs font-semibold tracking-widest uppercase">Available for work</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-medium text-neutral-900 tracking-tight leading-[1.1] max-w-xl">
              Let's create your next <br /> big idea.
            </h2>

            <p className="text-neutral-500 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
               Ready to transform your digital presence? Let's collaborate to build something exceptional.
            </p>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm md:text-base font-medium transition-all duration-300 hover:bg-black hover:scale-105 hover:shadow-lg"
            >
              Contact Me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
