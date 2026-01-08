"use client";

import emailjs from "emailjs-com";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactCard() {
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setEmailSent(false);

    const formData = new FormData(e.target);

    try {
      const result = await emailjs.send(
        "service_cfsg9sa",
        "template_668cd4s",
        {
          from_name: formData.get("name"),
          from_email: formData.get("email"),
          service_needed: formData.get("service"),
          message: formData.get("message"),
        },
        "g2J3c4xTCdvf2mAMq"
      );

      if (result.status === 200) {
        setEmailSent(true);
        e.target.reset();
      } else {
        setError("Failed to send email. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please try again.");
    }

    setIsLoading(false);
  };

  return (
    <div className="w-full bg-white rounded-[3rem] p-4 md:p-8" id="contacts">
      <div className="grid lg:grid-cols-12 gap-12 items-start">
        {/* Left Column - Book a Call Card */}
        <div className="lg:col-span-5 relative">
          <div className="bg-[#F5F5F7] rounded-[2.5rem] p-8 md:p-10 text-center space-y-8 sticky top-24">
            <div className="relative w-24 h-24 mx-auto rounded-3xl overflow-hidden shadow-lg">
               {/* Placeholder or user's image if available. Using a generic path or the one found previously */}
              <Image
                src="/images/arifurrahman_black&white.webp"
                alt="Arifur Rahman"
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-medium text-neutral-900 leading-tight">
                Prefer a quick chat?{" "}
                <span className="text-neutral-500">
                  Let's hop on a call and explore the best way to bring your
                  ideas to life
                </span>
              </h3>
              
               <div className="inline-block px-4 py-2 bg-white rounded-full text-sm text-neutral-500 shadow-sm border border-neutral-100">
                  approximately 15 minutes
               </div>
            </div>

            <Link
              href="https://wa.me/8801685366704"
              target="_blank"
              className="group flex items-center justify-center gap-3 w-full py-4 bg-white hover:bg-neutral-50 border border-neutral-200 rounded-2xl transition-all shadow-sm hover:shadow-md"
            >
              <span className="text-neutral-900 font-medium text-lg">Book a Call</span>
              <div className="p-1.5 bg-[#25D366] rounded-full text-white">
                 <Phone className="w-4 h-4 fill-current" />
              </div>
            </Link>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="lg:col-span-7 pt-4">
          <h2 className="text-5xl md:text-7xl font-bebas text-[#1A1A1A] mb-4 tracking-wide">
            LET'S WORK TOGETHER
          </h2>
          <p className="text-lg text-neutral-500 mb-12 max-w-lg">
            We'll build something awesome together, whether it's your brand, your website or your next big idea.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-blue-500">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Smith"
                  required
                  className="w-full px-6 py-4 bg-[#F5F5F7] rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500/20 text-neutral-900 placeholder:text-neutral-400 transition-all font-medium"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-blue-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="johnsmith@gmail.com"
                  required
                  className="w-full px-6 py-4 bg-[#F5F5F7] rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500/20 text-neutral-900 placeholder:text-neutral-400 transition-all font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="service" className="text-sm font-medium text-blue-500">
                Service Needed?
              </label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full px-6 py-4 bg-[#F5F5F7] rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500/20 text-neutral-900 appearance-none cursor-pointer font-medium"
                  required
                >
                  <option value="" disabled selected className="text-neutral-400">
                    Select...
                  </option>
                  <option value="Web Design">Web Design</option>
                  <option value="Web Development">Web Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Other">Other</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-blue-500">
                What Can I Help You...
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Hello, I'd like to enquire about..."
                rows={6}
                required
                className="w-full px-6 py-4 bg-[#F5F5F7] rounded-2xl border-none outline-none focus:ring-2 focus:ring-blue-500/20 text-neutral-900 placeholder:text-neutral-400 resize-none transition-all font-medium"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="px-10 py-4 bg-transparent border-2 border-blue-500 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 uppercase tracking-wide text-sm md:text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "SUBMIT"}
            </button>

            {emailSent && (
              <p className="text-green-500 font-medium">Message sent successfully!</p>
            )}
            {error && (
              <p className="text-red-500 font-medium">{error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
