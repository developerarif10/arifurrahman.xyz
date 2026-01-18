'use client'

import { TextShimmerWave } from "@/components/ui/text-shimmer-wave"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false)
      }, 4000) 
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white dark:bg-black"
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
      )}
    </AnimatePresence>
  )
}
