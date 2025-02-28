import Spotlight from "../spotlight";
import SpotCard from "./spot-card";

export default function Card() {
  // Sample data for cards
  const cardsData = [
    {
      number: "1",
      title: "UI Design",
      subtitle: "Aesthetic, Usability, Consistency",
      tags: ["Figma", "Photoshop", "Canva"],
      accentColor: "from-[#cdb4db] to-[#cdb4db]",
    },
    {
      number: "2",
      title: "Web Development",
      subtitle: "Performance, Reliability, SEO",
      tags: ["React", "Next.js", "TailwindCSS"],
      accentColor: "from-[#a2d2ff] to-[#bde0fe]",
    },
    {
      number: "3",
      title: "Backend Services",
      subtitle: "Scalable, Secure, Efficient",
      tags: ["Node.js", "MongoDB", "API"],
      accentColor: "from-[#f08080] to-[#f4978e]",
    },
    {
      number: "4",
      title: "UX Research",
      subtitle: "Insights, Testing, Improvement",
      tags: ["User Testing", "Analytics", "Wireframes"],
      accentColor: "from-[#9381ff] to-[#b8b8ff]",
    },
  ];

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="flex flex-col mb-10 md:mb-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-4">Services</h1>
        <p className="text-base md:text-lg">
          I offer a comprehensive range of services to ensure that projects run
          as smoothly as possible
        </p>
      </div>
      <Spotlight className="sm:max-w-xl mx-auto grid gap-5 items-start group">
        {cardsData.map((card, index) => (
          <SpotCard
            key={index}
            number={card.number}
            title={card.title}
            subtitle={card.subtitle}
            tags={card.tags}
            accentColor={card.accentColor}
          />
        ))}
      </Spotlight>
    </section>
  );
}
