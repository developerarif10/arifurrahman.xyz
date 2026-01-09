"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let progressInterval

    // Simulate progress while page loads
    progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) return 90 // Stop at 90%, jump to 100 when loaded
        return prev + 10
      })
    }, 150)

    // Hide when page is actually loaded
    const handleLoad = () => {
      setProgress(100)
      setTimeout(() => {
        setIsLoading(false)
        clearInterval(progressInterval)
      }, 300) // Just enough time to show 100%
    }

    // Check if already loaded
    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => {
      window.removeEventListener('load', handleLoad)
      clearInterval(progressInterval)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          <div className="relative flex flex-col items-center gap-10">
            {/* Logo with Circular Progress */}
            <div className="relative">
              {/* Outer Progress Ring */}
              <svg className="absolute inset-0 w-32 h-32 -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  className="text-neutral-200"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="58"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="text-neutral-900"
                  style={{
                    strokeDasharray: "364",
                    strokeDashoffset: 364 - (364 * progress) / 100,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </svg>

              {/* Center Logo */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <span className="text-4xl font-bold text-neutral-900 tracking-tighter">
                  AR
                </span>
              </div>
            </div>

            {/* Progress Percentage */}
            <div className="flex flex-col items-center gap-3">
              <div className="text-5xl font-bold text-neutral-900 tabular-nums tracking-tight">
                {Math.round(progress)}
                <span className="text-2xl text-neutral-400">%</span>
              </div>

              <div className="w-56 h-1 bg-neutral-200 rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-full bg-neutral-900"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
