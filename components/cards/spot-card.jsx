import { SpotlightCard } from "../spotlight";

export default function SpotCard() {
  return (
    <SpotlightCard>
      <div className="relative h-full shadow-[0_8px_32px_0_rgba(_31,38,135,0.37_)] backdrop-blur-[_15.5px_] border rounded-[10px] border-solid border-[rgba(_255,255,255,0.18_)] p-6 pb-8 z-20 overflow-hidden">
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
            <div className="flex gap-1">
              <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
                Nextjs
              </div>
              <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
                React
              </div>
              <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
                MongoDB
              </div>
              <div className="rounded-md border border-slate-300 py-0.5 px-2.5 text-center text-sm transition-all shadow-sm text-slate-600">
                API
              </div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
