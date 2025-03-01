import { TextShimmerWave } from "@/components/ui/text-shimmer-wave";

export default function loading() {
  return (
    <div className="min-h-screen px-6 pt-20">
      <div className="max-w-4xl mx-auto">
        <TextShimmerWave
          className="[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF]"
          duration={1}
          spread={1}
          zDistance={1}
          scaleDistance={1.1}
          rotateYDistance={20}
        >
          Loading...
        </TextShimmerWave>
      </div>
    </div>
  );
}
