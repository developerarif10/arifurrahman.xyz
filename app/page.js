"use client";

import CardSpotlightDemo from "@/components/card-spotlight";
import ContactCard from "@/components/cards/contact-card";
import Hero from "@/components/hero-section";
import TesitomonialPage from "@/components/tesitomonial-page";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />

        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            <CardSpotlightDemo />
            <TesitomonialPage />
            <ContactCard />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
