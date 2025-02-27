"use client";
import Card from "@/components/cards/card";
import ContactCard from "@/components/cards/contact-card";

import Hero from "@/components/hero-section";
import TestimonialPage from "@/components/tesitomonial-page";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Render Multiple Cards */}
      <div className="min-h-screen p-6">
        <div className="max-w-4xl mx-auto">
          <Card />
          <TestimonialPage />
          {/* Modern Contact section */}
          <ContactCard />
        </div>
      </div>
    </>
  );
}
