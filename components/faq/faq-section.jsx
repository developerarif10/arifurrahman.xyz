"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import Link from "next/link"; // Added missing import
import { useState } from "react";

const faqs = [
  {
    question: "What's your typical project timeline?",
    answer:
      "The timeline depends on the project's scope and complexity. Branding and UI/UX projects usually take 2-6 weeks, while Framer website development can range from 1-4 weeks. I'll provide a detailed timeline after the project brief.",
  },
  {
    question: "Do you offer revisions?",
    answer:
      "Yes, I believe in a collaborative process. I typically include 2-3 rounds of revisions for each major milestone to ensure the final result aligns perfectly with your vision.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "To kick things off, I'll need a clear understanding of your goals, target audience, and any existing brand assets. A project brief or a quick discovery call usually does the trick!",
  },
  {
    question: "Can you work with my existing brand guidelines?",
    answer:
      "Absolutely! I can adapt to your established brand identity while injecting fresh, modern elements to elevate your digital presence.",
  },
  {
    question: "Do you provide post-project support?",
    answer:
      "Yes, I offer a period of post-launch support to handle any immediate tweaks. I'm also available for ongoing maintenance or future updates as needed.",
  },
  {
    question: "What's the best way to reach you?",
    answer:
      "Email is usually best for initial inquiries, but I'm also active on social media. Feel free to use the contact button on this page to get in touch directly!",
  },
];

const AccordionItem = ({ item, isOpen, onClick, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-4 overflow-hidden bg-white hover:shadow-sm transition-shadow duration-300 " 
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full p-6 text-left bg-white hover:bg-neutral-50 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-neutral-900 focus-visible:outline-offset-2 rounded-sm"
      >
        <span className="text-lg md:text-xl font-medium text-neutral-900">
          {item.question}
        </span>
        <div
            className={`transition-transform duration-300 ${
                isOpen ? "rotate-90" : "rotate-0"
            }`}
        >
            {isOpen ? (
                <X className="w-6 h-6 text-neutral-400" />
            ) : (
                <Plus className="w-6 h-6 text-neutral-400" />
            )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-neutral-500 leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          {/* Left Column - Content */}
          <div className="col-span-1 lg:col-span-5 relative">
             <div className="static lg:sticky top-24">
                <motion.span
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-neutral-500 text-lg mb-4 block font-medium"
                >
                FAQs
                </motion.span>
                <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-900 mb-8 leading-[1.1] tracking-tight"
                >
                Frequently asked questions to help you  <span className="text-neutral-400">understand the process</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <Link
                    href="mailto:arifur.rahman@std.cu.ac.bd"
                    className="inline-flex items-center justify-center px-8 py-2 text-base font-medium text-white bg-neutral-900 rounded-sm hover:bg-neutral-800 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 duration-300"
                    >
                    Email Me
                    </Link>
                </motion.div>
             </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="col-span-1 lg:col-span-7 relative">
            {/* Gray Container */}
            <div className="bg-[#f7f7f7] rounded-sm p-6 sm:p-8 relative mt-12 lg:mt-0 min-h-[400px]">
                {/* Floating Badge */}
                <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 md:-top-6 left-1/2 -translate-x-1/2 z-10"
                >
                <div className="bg-neutral-900 text-white px-6 py-3 rounded-sm shadow-2xl text-sm font-medium relative whitespace-nowrap">
                    I'm here to help you
                    {/* Triangle pointer */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-neutral-900"></div>
                </div>
                </motion.div>

                <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <AccordionItem
                    key={index}
                    index={index}
                    item={faq}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                    />
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
