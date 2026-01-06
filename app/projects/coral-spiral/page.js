import Image from "next/image";
import Link from "next/link";
import ProjectCard from "../_components/project-card";

export default function CoralSpiralPage() {
  const moreProjects = [
    {
      thumbnail: 1,
      title: "Glossy Geometric",
      subTitle: "A collection of 3D geometric shapes with glossy finishes.",
      avatars: [],
      thumbnaiUrl: "/projects/project_1.jpeg", // Using existing placeholders for now
      techStack: ["Design", "3D", "Art Direction"],
      githubUrl: "#",
      projectUrl: "#",
    },
    {
      thumbnail: 2,
      title: "Fighting Gravity",
      subTitle: "Abstract visual exploration of anti-gravity concepts.",
      avatars: [],
      thumbnaiUrl: "/projects/project_2.jpeg",
      techStack: ["Motion", "CGI"],
      githubUrl: "#",
      projectUrl: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans selection:bg-rose-500 selection:text-white pb-20">
      {/* Hero Section */}
      <section className="container px-4 md:px-6 mx-auto pt-32 pb-12 md:pb-24">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold font-bebas tracking-tighter text-gray-900 dark:text-white leading-[0.8] mb-8">
              CORAL SPIRAL ABSTRACT
            </h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200 dark:border-gray-800 pt-8 uppercase text-xs md:text-sm font-medium tracking-widest text-gray-500 dark:text-gray-400">
              <div>
                <span className="block opacity-50 mb-1">Role</span>
                <span className="text-gray-900 dark:text-gray-200">Art Direction</span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Date</span>
                <span className="text-gray-900 dark:text-gray-200">May 20, 2023</span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Context</span>
                <span className="text-gray-900 dark:text-gray-200">Personal Project</span>
              </div>
              <div>
                <span className="block opacity-50 mb-1">Tools</span>
                <span className="text-gray-900 dark:text-gray-200">Blender, Octane</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-pink-100 dark:bg-zinc-900 rounded-3xl overflow-hidden mb-24">
             <Image
              src="/projects/coral-spiral/hero.png"
              alt="Coral Spiral Abstract 3D Render"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Purpose Section */}
      <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold font-bebas tracking-wider uppercase sticky top-32 text-gray-900 dark:text-white">
                Purpose :
              </h2>
            </div>
            <div className="md:col-span-9 space-y-12">
              <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                <p>
                  The Coral Spiral Abstract project was an exploration of organic forms and soft, tactile textures created within a digital 3D space. The goal was to mimic the natural mathematical perfection of nautilus shells while introducing a surreal, matte coral aesthetic that feels soft to the touch.
                </p>
                <br />
                <p>
                  This visual study focuses on the interplay of light and shadow on curved surfaces, aiming to create a sense of calm and satisfy the viewer's desire for perfect geometry.
                </p>
              </div>
              
              <div className="relative w-full aspect-[2/1] rounded-2xl overflow-hidden">
                <Image
                  src="/projects/coral-spiral/purpose.png"
                  alt="Liquid Abstract Detail"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold font-bebas tracking-wider uppercase sticky top-32 text-gray-900 dark:text-white">
                Solution :
              </h2>
            </div>
            <div className="md:col-span-9 space-y-12">
              <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                <p>
                  To achieve the desired look, I utilized procedural generation techniques to create the spiral geometry, ensuring a perfect mathematical curve. The material shading was key; a subsurface scattering effect was applied to the coral material to give it a translucent, waxy appearance similar to real marine life or high-end plastic art.
                </p>
                <br />
                <p>
                  The lighting setup mimicked a high-end studio environment, using softboxes to create smooth gradients across the ridges of the spiral.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/projects/coral-spiral/solution1.png"
                    alt="Red Wave Texture"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/projects/coral-spiral/solution2.png"
                    alt="White and Red Wave Abstract"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
        <div className="max-w-[1200px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <h2 className="text-xl font-bold font-bebas tracking-wider uppercase sticky top-32 text-gray-900 dark:text-white">
                Challenge :
              </h2>
            </div>
             <div className="md:col-span-9 space-y-12">
               <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                 <p>
                   One of the main challenges was balancing the color palette. The coral pink needed to be vibrant but not overwhelming. Achieving the correct balance of saturation and brightness required multiple iterations and test renders under different lighting conditions.
                 </p>
                 <br />
                 <p>
                   Additionally, optimizing the high-poly geometry for faster rendering without losing the smooth curvature was a technical obstacle that required careful retopology.
                 </p>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="container px-4 md:px-6 mx-auto mb-24 md:mb-32">
        <div className="max-w-[1200px] mx-auto">
           <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
             <div className="md:col-span-3">
              <h2 className="text-xl font-bold font-bebas tracking-wider uppercase sticky top-32 text-gray-900 dark:text-white">
                Summary :
              </h2>
            </div>
             <div className="md:col-span-9 space-y-12">
               <div className="text-xl md:text-2xl leading-relaxed text-gray-700 dark:text-gray-300 font-light">
                 <p>
                   The final result is a cohesive set of abstract 3D visuals that evoke a sense of organic tranquility. The "Coral Spiral" stands as a testament to the beauty of mathematical forms in nature, translated through a modern digital lens. This project advanced my skills in procedural modeling and material design.
                 </p>
               </div>
                <div className="relative w-full aspect-[2.35/1] rounded-2xl overflow-hidden mt-12">
                  <Image
                    src="/projects/coral-spiral/summary.png"
                    alt="Landscape Abstract Summary"
                    fill
                    className="object-cover"
                  />
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="container px-4 md:px-6 mx-auto mb-20 border-t border-gray-200 dark:border-gray-800 pt-20">
         <div className="max-w-[1200px] mx-auto">
            <h2 className="text-5xl md:text-7xl font-bold font-bebas tracking-tighter text-gray-900 dark:text-white mb-16 text-center md:text-left">
              MORE PROJECTS
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {moreProjects.map((content) => (
                  <ProjectCard key={content.thumbnail} content={content} />
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
