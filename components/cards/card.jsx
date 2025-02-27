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
      accentColor: "from-purple-500/20 to-indigo-500/20",
    },
    {
      number: "2",
      title: "Web Development",
      subtitle: "Performance, Reliability, SEO",
      tags: ["React", "Next.js", "TailwindCSS"],
      accentColor: "from-blue-500/20 to-cyan-500/20",
    },
    {
      number: "3",
      title: "Backend Services",
      subtitle: "Scalable, Secure, Efficient",
      tags: ["Node.js", "MongoDB", "API"],
      accentColor: "from-emerald-500/20 to-teal-500/20",
    },
    {
      number: "4",
      title: "UX Research",
      subtitle: "Insights, Testing, Improvement",
      tags: ["User Testing", "Analytics", "Wireframes"],
      accentColor: "from-amber-500/20 to-orange-500/20",
    },
  ];

  return (
    <section className="px-4 py-8 md:py-12">
      <div className="flex flex-col mb-10 md:mb-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          Services
        </h1>
        <p className="text-base md:text-lg text-gray-300">
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
