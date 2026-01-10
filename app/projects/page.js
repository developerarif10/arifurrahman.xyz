import Link from "next/link";
import ProjectButton from "./_components/project-btn";
import ProjectCard from "./_components/project-card";

export default function ProjectPage() {
  const projectData = [
    {
      thumbnail: 1,
      title: "TutorConnect",
      subTitle:
        "A modern e-learning platform that connects students with quality courses, offering an interactive and seamless learning experience.",
      avatars: [
        "/logo/nextjs.svg",
        "/logo/reactjs.svg",
        "/logo/nodejs.svg",
        "/logo/tailwindcss.svg",
      ],
      thumbnaiUrl: "/projects/project_1.jpeg",
      techStack: ["Next.js", "React.js", "Node.js", "Framer", "MongoDB"],
      githubUrl: "https://github.com/developerarif10/tutorconnect",
      projectUrl: "https://tutorconnects.vercel.app/",
    },
    {
      thumbnail: 2,
      title: "RedComrade",
      subTitle:
        "A blood donation management system that helps users find the nearest blood donors across Bangladesh with ease.",
      avatars: [
        "/logo/nextjs.svg",
        "/logo/reactjs.svg",
        "/logo/nodejs.svg",
        "/logo/tailwindcss.svg",
      ],
      thumbnaiUrl: "/projects/project_2.jpeg",
      techStack: ["Next.js", "React.js", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/developerarif10/redcomrade",
      projectUrl: "https://redcomrade.vercel.app/",
    },

    {
      thumbnail: 3,
      title: "Resource Vault",
      subTitle:
        "A platform to discover and organize useful websites by tags and search, with detailed insights for each resource.",
      avatars: [
        "/logo/nextjs.svg",
        "/logo/reactjs.svg",
        "/logo/nodejs.svg",
        "/logo/tailwindcss.svg",
      ],
      thumbnaiUrl: "/projects/project_3.jpeg",
      techStack: ["Next.js", "React.js", "Node.js", "TailwindCSS"],
      githubUrl: "https://github.com/developerarif10/resourcevault",
      projectUrl: "https://resourcevault.vercel.app/",
    },
    {
      thumbnail: 4,
      title: "BanglaBazaar",
      subTitle:
        "BanglaBazaar is a platform for buying and selling products in Bangladesh. BanglaBazaar – Your Ultimate Online Shopping Experience! Browse, Cart & Checkout with Ease",
      avatars: [
        "/logo/nextjs.svg",
        "/logo/reactjs.svg",
        "/logo/nodejs.svg",
        "/logo/tailwindcss.svg",
      ],
      thumbnaiUrl: "/projects/project_4.png",
      techStack: ["Next.js", "React.js", "Node.js", "TailwindCSS"],
      githubUrl: "https://github.com/developerarif10/banglabazaar",
      projectUrl: "https://banglabazaar.vercel.app/",
    },
  ];
  return (
    <div className="min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <div className="flex gap-3 flex-col">
          <h1 className="text-4xl font-bold tracking-tight">Project</h1>
          <p className="text-lg text-muted-foreground">
            I like building things. Here are a few things thus far that i&apos;m
            pretty pleased with. Most, if not all of them, were built for fun.
          </p>
        </div>
        <div className="my-5">
          <div>
            <h1 className="text-2xl font-semibold">Full Stack Projects</h1>
            <div className="container py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {projectData?.map((content) => (
                  <ProjectCard key={content?.thumbnail} content={content} />
                ))}
              </div>
            </div>
            <div className="flex justify-center items-center text-center">
              <Link href="https://github.com/developerarif10" target="__blank">
                <ProjectButton>
                  More projects on
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 fill-zinc-200"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z" />
                  </svg>
                </ProjectButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
