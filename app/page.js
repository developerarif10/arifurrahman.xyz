"use client";

import Card from "@/components/cards/card";
import ContactCard from "@/components/cards/contact-card";
import Hero from "@/components/hero-section";
import StackingPage from "@/components/StackingCard";
import TesitomonialPage from "@/components/tesitomonial-page";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <>
      <ReactLenis root>
        <Hero />

        {/* Render Multiple Cards */}
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto">
            <Card />
            <StackingPage />
            <TesitomonialPage />
            <ContactCard />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}
