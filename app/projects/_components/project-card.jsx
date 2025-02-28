import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ProjectButton from "./project-btn";

const ProjectCard = ({ content }) => {
  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <Image
        src={content?.thumbnaiUrl}
        alt={content?.title}
        width={380}
        height={250}
        className="w-full object-cover"
      />
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            {content?.title}
          </h2>
          <div className="flex items-center -space-x-3">
            {content?.avatars?.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Avatar ${index}`}
                className="w-8 h-8 rounded-full border-2 bg-white dark:bg-black border-gray-200 dark:border-gray-700 object-cover"
              />
            ))}
            <div className="w-8 h-8 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-black dark:text-white text-xs font-semibold rounded-full border-2 border-gray-200 dark:border-gray-700">
              +3
            </div>
          </div>
        </div>
        <p className="text-gray-600 dark:text-gray-400">{content?.subTitle}</p>
        <div className="flex flex-wrap gap-2">
          {content?.techStack?.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm font-medium bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between mt-4">
          <Link href={content?.githubUrl} target="_blank">
            <ProjectButton>
              SOURCE
              <Github size={20} />
            </ProjectButton>
          </Link>
          <Link href={content?.projectUrl} target="_blank">
            <ProjectButton>
              WEBSITE
              <ArrowUpRight size={20} />
            </ProjectButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
