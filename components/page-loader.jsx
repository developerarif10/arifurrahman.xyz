'use client'

import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  // null = not yet determined (avoids SSR flash)
  const [isLoading, setIsLoading] = useState(null)

  useEffect(() => {
    // If page is already fully loaded (client-side nav, HMR), never show loader
    if (document.readyState === 'complete') {
      setIsLoading(false)
      return
    }

    // True initial page load — show loader now, hide when browser fires 'load'
    setIsLoading(true)

    const handleLoad = () => setIsLoading(false)
    window.addEventListener('load', handleLoad)
    return () => window.removeEventListener('load', handleLoad)
  }, [])

  if (isLoading === null || isLoading === false) return null

  return (
    <AnimatePresence>
      <motion.div
        key="page-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f5f5f5] dark:bg-[#171717]"
      >
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
      </motion.div>
    </AnimatePresence>
  )
}
