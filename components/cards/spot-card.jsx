import { SpotlightCard } from "../spotlight";

export default function SpotCard() {
  return (
    <SpotlightCard>
      <div className="relative h-full bg-[#27272a66] text-neutral-50 shadow-lg p-6 pb-8 z-20 overflow-hidden">
        <div className="flex flex-col py-10 items-center">
          {/* Text */}
          <div className="flex gap-4 flex-col">
            <h2 className="text-xl text-slate-200 font-bold mb-1">
              Amazing Integration
            </h2>
            <h3>
              Building modern applications that scale well and are easy to
              maintain. Cutting edge websites with a pinch of magic, and a lot
              of love.
            </h3>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
