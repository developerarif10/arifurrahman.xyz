import AboutMe from "./_components/about-me";
import Recommendation from "./_components/recommendation";
import TechStack from "./_components/tech-stack";

export const metadata = {
  title: "About Arifur Rahman | Freelance Website Developer in Bangladesh",
  description:
    "Learn more about Arifur Rahman, a freelance website developer in Bangladesh specializing in Next.js, React, and SEO-friendly web solutions for businesses and startups.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto px-6">
        <AboutMe />   
      </div>
      <TechStack />
      <section aria-label="Client Recommendations">
        <Recommendation />
      </section>
    </section>
  );
}