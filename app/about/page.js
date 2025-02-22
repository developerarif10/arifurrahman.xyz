import AboutMe from "./_components/about-me";
import EducationSection from "./_components/education-section";
import WorkExperience from "./_components/work-experience";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80 px-4 py-16">
      <AboutMe />
      <WorkExperience />
      <EducationSection />
    </div>
  );
}
