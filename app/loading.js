'use client'

import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f5] dark:bg-[#171717]">
      <TextShimmerWave
        className="text-4xl lg:text-8xl font-medium font-bebas [--base-color:#e5e5e5] [--base-gradient-color:#a3a3a3] dark:[--base-color:#525252] dark:[--base-gradient-color:#ffffff]"
        duration={1}
        spread={1}
        zDistance={1}
        scaleDistance={1.1}
        rotateYDistance={0}
      >
        LOADING...
      </TextShimmerWave>
    </div>
  )
}
