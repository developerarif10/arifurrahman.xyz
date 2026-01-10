"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { name: "Facebook", url: "https://www.facebook.com/arifurrahamanrafi" },
  { name: "Instagram", url: "https://www.instagram.com/arifurrahman_rafi/" },
  { name: "Twitter / X", url: "https://x.com/iamarifurrahman" },
  {name: "Linkedin", url: "https://www.linkedin.com/in/arifurrahmanrafi/"},
  { name: "Email", url: "mailto:arifurrahman@std.cu.ac.bd" },
];

export default function ContactSection() {
  return (
    <section className="min-h-screen bg-black2 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bulever">
            LET'S CREATE A WEBSITE
          </h2>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <form className="space-y-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your name *"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your email *"
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your message *"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 py-4 focus:outline-none focus:border-white transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-colorful1 transition-colors"
              >
                SEND IT
              </button>
            </form>

            {/* Social Links */}
            <div className="space-y-6">
              {socialLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ x: 10 }}
                  className="border-b border-white/20"
                >
                  <Link
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 text-lg hover:text-colorful1 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
