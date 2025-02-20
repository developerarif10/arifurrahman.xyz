import { ArrowUpRight, CodeXml } from "lucide-react";
import Image from "next/image";

export default function ProjectPage() {
  return (
    <section className="">
      <div className="flex gap-3 flex-col">
        <h1 className="text-3xl font-bold">Project</h1>
        <p className="text-sm">
          I like building things. Here are a few things thus far that i&apos;m
          pretty pleased with. Most, if not all of them, were built for fun.
        </p>
      </div>
      <div className="my-10">
        <div>
          <h1>Full Stack Projects</h1>
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 lg:w-1/2 md:w-full">
                <Image
                  src="/projects/project-1.webp"
                  alt="project 1"
                  className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={300}
                  height={300}
                />
                <div className="flex justify-between m-4">
                  <div>
                    <h2 className=" text-lg title-font font-medium">
                      Svgl.app
                    </h2>
                    <p className="leading-relaxed text-base">Contributor</p>
                  </div>
                  <div className="flex gap-2">
                    <CodeXml />
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
              <div className="p-4 lg:w-1/2 md:w-full">
                <Image
                  src="/projects/project-2.webp"
                  alt="project 1"
                  className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={300}
                  height={300}
                />
                <div className="flex justify-between m-4">
                  <div>
                    <h2 className=" text-lg title-font font-medium">
                      Svgl.app
                    </h2>
                    <p className="leading-relaxed text-base">Contributor</p>
                  </div>
                  <div className="flex gap-2">
                    <CodeXml />
                    <ArrowUpRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
