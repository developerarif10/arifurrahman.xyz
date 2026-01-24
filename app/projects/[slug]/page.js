import { projects } from "@/app/data/projects";
import ProjectCard from "@/components/works/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }) {
  const { slug } = params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Filter out the current project for "More Projects" section
  const moreProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-rose-500 selection:text-white pb-20">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 mx-auto pt-32 pb-12 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-bebas tracking-tighter text-gray-900 dark:text-white leading-[0.8] mb-8 uppercase">
              {project.title}
            </h1>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8 uppercase text-xs md:text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400">
              <div>
                <span className="block opacity-50 mb-1">Role</span>
                <span className="text-gray-900 dark:text-gray-200">
                  {project.role}
                </span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Date</span>
                <span className="text-gray-900 dark:text-gray-200">
                  {project.date}
                </span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Context</span>
                <span className="text-gray-900 dark:text-gray-200">
                  {project.context}
                </span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Tools</span>
                <span className="text-gray-900 dark:text-gray-200">
                  {project.tools}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-[50vh] md:h-[80vh] bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-24">
            <Image
              src={project.thumbnaiUrl}
              alt={`${project.title} Hero`}
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* Dynamic Sections */}
      {project.sections && Object.keys(project.sections).length > 0 ? (
        <>
          {/* Project Overview (Consolidated) */}
          <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
            <div className="max-w-[1200px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-3">
                  <h2 className="text-xl font-bold font-bebas tracking-wider uppercase sticky top-32 text-gray-900 dark:text-white">
                    Project Overview :
                  </h2>
                </div>
                <div className="md:col-span-9 space-y-16">
                  {/* Purpose */}
                  {project.sections.purpose && (
                    <div className="space-y-6">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">The Purpose</h3>
                      <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                        {project.sections.purpose.content.map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-6" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Challenge */}
                  {project.sections.challenge && (
                    <div className="space-y-6">
                       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">The Challenge</h3>
                      <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                        {project.sections.challenge.content.map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-6" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Solution */}
                  {project.sections.solution && (
                    <div className="space-y-6">
                       <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">The Solution</h3>
                      <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                        {project.sections.solution.content.map((paragraph, index) => (
                          <p key={index} className={index > 0 ? "mt-6" : ""}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
                        {project.images?.solution1 && (
                          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                            <Image
                              src={project.images.solution1}
                              alt="Solution 1"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                        {project.images?.solution2 && (
                          <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                            <Image
                              src={project.images.solution2}
                              alt="Solution 2"
                              fill
                              className="object-cover"
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                   {/* Summary - keeping it here if it exists, or could be merged */}
                   {project.sections.summary && (
                     <div className="space-y-6">
                        <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                            {project.sections.summary.content.map((paragraph, index) => (
                                <p key={index} className={index > 0 ? "mt-6" : ""}>
                                {paragraph}
                                </p>
                            ))}
                        </div>
                     </div>
                   )}
                </div>
              </div>
            </div>
          </section>

          {/* Full Landing Page Image */}
          {project.images?.fullLanding && (
            <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
                <div className="max-w-[1200px] mx-auto">
                    <div className="relative w-full bg-gray-100 dark:bg-zinc-900 rounded-3xl overflow-hidden">
                        {/* Use intrinsic height or a specific aspect ratio depending on image */}
                        <Image
                            src={project.images.fullLanding}
                            alt={`${project.title} Landing Page`}
                            width={1920}
                            height={1080} 
                            className="w-full h-auto"
                        />
                    </div>
                </div>
             </section>
          )}
        </>
      ) : (
        /* Fallback for projects with minimal data */
        <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
          <div className="max-w-[1200px] mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-12 space-y-12">
                     <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                        <p>{project.subTitle}</p>
                        <p className="mt-4">{project.description}</p>
                     </div>
                     <div className="flex gap-4 mt-8">
                        {project.githubUrl && project.githubUrl !== "#" && (
                            <Link href={project.githubUrl} className="underline text-lg hover:text-blue-500">
                                View on GitHub
                            </Link>
                        )}
                         {project.projectUrl && project.projectUrl !== "#" && (
                            <Link href={project.projectUrl} className="underline text-lg hover:text-blue-500">
                                View Live Project
                            </Link>
                        )}
                     </div>
                </div>
             </div>
          </div>
        </section>
      )}


      {/* More Projects Section */}
      <section className="container px-4 md:px-6 mx-auto mb-20 border-t border-gray-200 dark:border-gray-800 pt-20">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold font-bebas tracking-tighter text-gray-900 dark:text-white mb-16 text-center md:text-left">
            MORE PROJECTS
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {moreProjects.map((content) => (
              <ProjectCard key={content.thumbnail} project={content} />
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <Link href="/projects" className="inline-block relative group">
              <span className="text-xl font-medium tracking-wide border-b-2 border-transparent group-hover:border-gray-900 dark:group-hover:border-white transition-all duration-300 pb-1">
                VIEW ALL PROJECTS
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
