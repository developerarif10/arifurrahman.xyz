"use client";

import ContactCard from "@/components/cards/contact-card";
import NewHero from "@/components/new-hero";

import FaqSection from "@/components/faq/faq-section";
import TaglineSection from "@/components/sections/tagline-section";
import ServicesSection from "@/components/services/services-section";
import RecentWorkCard from "@/components/works/Recent-work";
// import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      {/* <ReactLenis root> */}
     
      <NewHero />
      <TaglineSection />

      <section
        id="recent_work"
        className="min-h-screen px-6 sm:px-12 lg:px-14 py-12"
      >
        <div className="max-w-7xl mx-auto">
          <RecentWorkCard />
        </div>
      </section>

      <ServicesSection />

      <FaqSection />

      <div className="min-h-screen p-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <ContactCard />
        </div>
      </div>
      {/* </ReactLenis> */}
    </>
  );
}
