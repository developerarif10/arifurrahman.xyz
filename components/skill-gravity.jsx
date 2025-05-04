import Gravity, { MatterBody } from "./MatterBody";

export default function SkillGravity() {
  return (
    <section className="flex overflow-hidden h-72 flex-col relative bg-transparent]">
      <div className="pt-20 text-6xl sm:text-7xl md:text-8xl text-foreground dark:text-muted w-full text-center font-calendas italic">
        Skills
      </div>
      <p className="pt-4 text-base sm:text-xl md:text-2xl text-foreground dark:text-muted w-full text-center">
        My tech stacks:
      </p>
      <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#0015ff] text-white rounded-full hover:cursor-pointer px-8 py-4">
            Next.js
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="30%"
          y="30%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#e794da] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            Typescript
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="40%"
          y="20%"
          angle={10}
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#1f464d] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            MongoDB
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="75%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ff5941] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            Tailwind CSS
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="80%"
          y="20%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#f97316] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            Wordpress
          </div>
        </MatterBody>
        <MatterBody
          matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
          x="50%"
          y="10%"
        >
          <div className="text-xl sm:text-2xl md:text-3xl bg-[#ffd726] text-white rounded-full hover:cursor-grab px-8 py-4 ">
            Framer-motion
          </div>
        </MatterBody>
      </Gravity>
    </section>
  );
}
