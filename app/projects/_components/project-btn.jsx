import Link from "next/link";

export default function ProjectButton({ children }) {
  return (
    <Link
      href="https://github.com/developerarif10"
      target="_blank"
      aria-label="GitHub"
      className="cursor-pointer text-zinc-200 flex gap-2 border border-black items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111111] hover:border transition-all ease-in duration-200"
    >
      {children}
    </Link>
  );
}
