"use client";

import { motion } from "framer-motion";

export default function TaglineSection() {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-white">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6 flex items-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-3xl md:text-4xl lg:text-5xl text-black font-light tracking-normal leading-[1.2] max-w-4xl ml-auto"
        >
          Turning complex web challenges into seamless, high-impact
          solutions—whether you're launching a startup's first site or scaling
          global platforms, I make your vision feel not just possible, but
          inevitable.
        </motion.h2>
      </div>

      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 right-0 w-96 h-96 bg-neutral-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
      />
    </section>
  );
}
