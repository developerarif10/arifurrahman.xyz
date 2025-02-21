"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,#020617,rgba(2,6,23,0.6))]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative mx-auto max-w-5xl px-4"
      >
        <div className="group relative">
          {/* Modern decorative elements */}
          <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full border border-slate-200 dark:border-slate-800 md:-left-6 md:-top-6" />
          <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full border border-slate-200 dark:border-slate-800 md:-right-6 md:-bottom-6" />

          {/* Quote card */}
          <div className="relative rounded-2xl bg-white/30 p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl dark:bg-slate-900/30 dark:shadow-slate-800/20 md:p-12">
            <div className="absolute -left-3 top-4 text-slate-300 dark:text-slate-700 md:-left-4">
              <Quote className="h-8 w-8 rotate-180 md:h-10 md:w-10" />
            </div>

            <blockquote className="relative space-y-6">
              <p className="pl-6 text-lg font-medium leading-relaxed text-slate-700 dark:text-slate-200 md:pl-8 md:text-xl lg:text-2xl">
                In a world of complexity, I choose simplicity. My tech blogs are
                a reflection of that—clean, concise, and thought-provoking. Hope
                you find them as inspiring as I do!
              </p>

              <footer className="flex items-center gap-4 pt-4">
                <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent dark:from-slate-800"></div>
                <span className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute inset-0 animate-ping rounded-full bg-primary/20 dark:bg-primary/10"></span>
                  <span className="absolute inset-0 rounded-full bg-primary/30 dark:bg-primary/20"></span>
                  <span className="relative rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground">
                    Blog
                  </span>
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-slate-200 to-transparent dark:from-slate-800"></div>
              </footer>
            </blockquote>
          </div>
        </div>
      </motion.div>

      {/* Gradient orbs */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
      <div className="absolute bottom-1/4 right-1/4 -z-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl dark:bg-primary/5"></div>
    </section>
  );
}
