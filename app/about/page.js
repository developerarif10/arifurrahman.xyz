import AboutMe from "./_components/about-me";
import EducationSection from "./_components/education-section";
import Recommendation from "./_components/recommendation";
import WorkExperience from "./_components/work-experience";

export const metadata = {
  title: "About Arifur Rahman | Freelance Website Developer in Bangladesh",
  description:
    "Learn more about Arifur Rahman, a freelance website developer in Bangladesh specializing in Next.js, React, and SEO-friendly web solutions for businesses and startups.",
};

export default function AboutPage() {
  return (
    <section className="min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <AboutMe />

        <section aria-label="Work Experience">
          <WorkExperience />
        </section>

        <section aria-label="Education Background">
          <EducationSection />
        </section>

        <section aria-label="Client Recommendations">
          <Recommendation />
        </section>
      </div>
    </section>
  );
}
