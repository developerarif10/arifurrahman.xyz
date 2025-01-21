"use client";
import { ArrowRight, Code2, Mail, Send, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function ContactCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="w-full max-w-2xl space-y-8 sm:space-y-12 relative mx-auto">
      {/* Decorative elements */}
      <div
        className={`absolute -top-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-3xl transition-colors duration-300 ${
          isDark ? "bg-indigo-500/10" : "bg-indigo-500/20"
        }`}
      ></div>
      <div
        className={`absolute -bottom-20 -right-20 w-32 sm:w-40 h-32 sm:h-40 rounded-full blur-3xl transition-colors duration-300 ${
          isDark ? "bg-violet-500/10" : "bg-violet-500/20"
        }`}
      ></div>

      {/* Main content */}
      <div
        className={`relative space-y-6 sm:space-y-8 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-xl transition-colors duration-300 ${
          isDark
            ? "bg-slate-800/50 border border-slate-700/50"
            : "bg-white/70 border border-slate-200"
        }`}
      >
        {/* Header */}
        <div className="space-y-2 sm:space-y-3">
          <div className="flex items-center gap-2 text-indigo-500">
            <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
          </div>
          <h1
            className={`text-3xl sm:text-4xl font-bold tracking-tight transition-colors duration-300 ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Let's create something amazing together
          </h1>
          <p
            className={`text-base sm:text-lg transition-colors duration-300 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Have an exciting project in mind? I'm ready to help bring your ideas
            to life.
          </p>
        </div>

        {/* Contact options */}
        <div className="grid gap-4 sm:gap-6">
          {/* WhatsApp Button */}
          <Link
            href="https://wa.me/8801685366704"
            className={`group flex items-center gap-3 p-3 sm:p-4 rounded-xl transition-all duration-300 ${
              isDark
                ? "bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20"
                : "bg-indigo-50 hover:bg-indigo-100 border border-indigo-100"
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`p-1 sm:p-2 rounded-lg transition-colors duration-300 ${
                isDark ? "bg-indigo-500/20" : "bg-indigo-100"
              }`}
            >
              <Image
                src="/logo/whatsapp_icon.png"
                alt="whatsapp icon"
                width={30}
                height={30}
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3
                className={`font-semibold text-sm sm:text-base transition-colors duration-300 ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                Chat on WhatsApp
              </h3>
              <p
                className={`text-xs sm:text-sm truncate transition-colors duration-300 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                Quick response guaranteed
              </p>
            </div>
            <ArrowRight
              className={`w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 flex-shrink-0 transition-transform duration-300 ${
                isHovered ? "translate-x-1" : ""
              }`}
            />
          </Link>

          {/* Email Form */}
          <form onSubmit={(e) => e.preventDefault()} className="w-full">
            <div className="relative flex items-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className={`w-full rounded-xl px-4 py-2.5 sm:py-3 pl-11 sm:pl-12 text-sm sm:text-base transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 ${
                  isDark
                    ? "bg-slate-800/50 border border-slate-700 text-white placeholder:text-slate-500"
                    : "bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400"
                }`}
              />
              <Mail
                className={`absolute left-3 sm:left-4 w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${
                  isDark ? "text-slate-500" : "text-slate-400"
                }`}
              />
              <div className="absolute right-2">
                <button
                  type="submit"
                  className="bg-indigo-500 hover:bg-indigo-600 text-white px-3 sm:px-4 py-1.5 rounded-lg flex items-center gap-2 transition-all duration-300 text-sm sm:text-base"
                >
                  <span className="hidden sm:inline">Send</span>
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Footer text */}
        <p
          className={`text-center text-xs sm:text-sm pt-2 transition-colors duration-300 ${
            isDark ? "text-slate-500" : "text-slate-600"
          }`}
        >
          Usually respond within 24 hours • Available for freelance projects
        </p>
      </div>
    </div>
  );
}
