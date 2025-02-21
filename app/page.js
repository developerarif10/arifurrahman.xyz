import Card from "@/components/cards/card";
import ContactCard from "@/components/cards/contact-card";
import Hero from "@/components/hero-section";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Render Multiple Cards */}

      <div className="my-20">
        <Card />
      </div>

      {/* Modern Contact section */}
      <ContactCard />
    </>
  );
}
