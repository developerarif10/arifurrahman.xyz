import { SpotlightCard } from "../spotlight";
import { Badge } from "../ui/badge";
import { BorderTrail } from "../ui/visibleCards";

export default function SpotCard({
  number,
  title,
  subtitle,
  tags,
  accentColor,
}) {
  return (
    <SpotlightCard className="transform transition-all duration-300 hover:scale-[1.02]">
      <BorderTrail
        style={{
          boxShadow:
            "0px 0px 60px 30px rgb(255 255 255 / 20%), 0 0 100px 60px rgb(0 0 0 / 30%), 0 0 140px 90px rgb(0 0 0 / 20%)",
        }}
        size={100}
      />
      <div
        className={`relative h-full shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] backdrop-blur-[15.5px] border rounded-xl border-solid border-[rgba(255,255,255,0.12)] p-8 z-20 overflow-hidden bg-[#1A1A1A]/90 bg-gradient-to-br ${accentColor}`}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="flex gap-10 items-start relative z-10">
          {/* Number Circle with pulse effect */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-white/10 blur-md animate-pulse"></div>
            <div className="flex justify-center items-center w-20 h-20 rounded-full bg-gradient-to-br from-[#333333] to-[#222222] shadow-lg text-white text-4xl font-bold relative border border-white/10">
              {number}
            </div>
          </div>

          {/* Title and Subtitle */}
          <div className="mb-5 text-black">
            <h2 className="text-4xl font-bold  mb-3">{title}</h2>
            <p className="text-xl">{subtitle}</p>
            {/* Divider */}
            <div className="w-16 h-1 bg-gradient-to-r from-black/60 to-black/20 rounded-full my-5"></div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-1">
              {tags.map((tag, index) => (
                <Badge
                  key={index}
                  className="bg-[#2A2A2A] hover:bg-[#333333] text-base px-4 py-1.5 rounded-full text-white/90 shadow-md border border-white/5 transition-all duration-300 hover:scale-105"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
