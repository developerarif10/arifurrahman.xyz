import { ArrowUpRight, CodeXml } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Chip from "./chip";

export default function ProjectCard({ thumbnail }) {
  return (
    <div className="p-3 lg:w-1/2 md:w-full">
      <div className="relative">
        <Image
          src={`/projects/project-${thumbnail}.webp`}
          alt={`project ${thumbnail}`}
          className="w-full h-48 md:h-72 object-cover group-hover:scale-105 transition-transform duration-300 rounded-xl"
          width={500}
          height={300}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1/5  p-2 flex gap-2 items-end">
          <Chip>React</Chip>
          <Chip>Next.js</Chip>
        </div>
      </div>
      <div className="flex justify-between m-4">
        <div>
          <h2 className=" text-lg title-font font-medium">Svgl.app</h2>
          <p className="leading-relaxed text-base">Contributor</p>
        </div>
        <div className="flex gap-2">
          <Link
            target="_blank"
            href="#"
            aria-label="Preview"
            className="box-border text-[rgba(243,243,243,0.596)] flex h-[46px] w-[46px] items-center justify-center bg-[rgba(20,20,20,0.61)] duration-[0.3s] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] ease-in-out leading-[24px] p-[12px] rounded-[12px] border-[0.666667px] border-solid border-[rgba(243,243,243,0.063)]"
          >
            <CodeXml />
          </Link>
          <Link
            target="_blank"
            href="#"
            aria-label="Preview"
            className="box-border text-[rgba(243,243,243,0.596)] flex h-[46px] w-[46px] items-center justify-center bg-[rgba(20,20,20,0.61)] duration-[0.3s] transition-[color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter] ease-in-out leading-[24px] p-[12px] rounded-[12px] border-[0.666667px] border-solid border-[rgba(243,243,243,0.063)]"
          >
            <ArrowUpRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
