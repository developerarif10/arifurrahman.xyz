export default function ProjectButton({ children }) {
  return (
    <button
      aria-label="GitHub"
      className="cursor-pointer text-zinc-200 flex gap-2 border border-black items-center bg-black px-4 py-2 rounded-lg font-medium text-sm hover:bg-[#111111] hover:border transition-all ease-in duration-200"
    >
      {children}
    </button>
  );
}
