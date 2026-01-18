'use client'

import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-black">
      <TextShimmerWave 
        className="text-4xl font-medium font-bebas [--base-color:#e5e5e5] [--base-gradient-color:#a3a3a3] dark:[--base-color:#525252] dark:[--base-gradient-color:#ffffff]"
      >
        LOADING...
      </TextShimmerWave>
    </div>
  )
}
