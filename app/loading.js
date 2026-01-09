"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Loading() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Animate progress smoothly
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return 95 // Stop at 95%, complete when page loads
        return prev + 5
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
    >
      <div className="relative flex flex-col items-center gap-10">
        {/* Logo with Circular Progress */}
        <div className="relative">
          {/* Outer Progress Ring */}
          <svg className="absolute inset-0 w-32 h-32 -rotate-90">
            {/* Background Circle */}
            <circle
              cx="64"
              cy="64"
              r="58"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
              className="text-neutral-200"
            />
            {/* Progress Circle */}
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

          {/* Loading Text */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
              Loading
            </span>
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex gap-1"
            >
              <span className="w-1 h-1 rounded-full bg-neutral-500" />
              <span className="w-1 h-1 rounded-full bg-neutral-500" />
              <span className="w-1 h-1 rounded-full bg-neutral-500" />
            </motion.div>
          </div>

          {/* Simple Progress Bar */}
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
  )
}
