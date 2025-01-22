import Image from "next/image";

export default function TechStackChip({ src, text, className }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="flex justify-center items-center gap-2 px-3 py-1 rounded-full border border-blue-500/20 text-blue-400 text-xs backdrop-blur-sm">
        <Image src={src} alt="logo" width={25} height={25} />
        {text}
      </div>
    </div>
  );
}
