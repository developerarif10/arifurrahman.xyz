import AboutMe from "./_components/about-me";
import EducationSection from "./_components/education-section";
import WorkExperience from "./_components/work-experience";

export default function AboutPage() {
  return (
    <div className="min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <AboutMe />
        <WorkExperience />
        <EducationSection />
      </div>
    </div>
  );
}
