import { motion, useAnimate } from "motion/react"
import { forwardRef, useCallback, useEffect, useImperativeHandle } from "react"


const FilledCheckedIcon = forwardRef(({ size = 24, className = "" }, ref) => {
  const [scope, animate] = useAnimate()

  const start = useCallback(async () => {
    await animate(
      "svg",
      {
        scale: 1.1
      },
      {
        duration: 0.1,
        ease: "easeInOut"
      }
    )
    animate(
      ".filled-circle",
      {
        scale: 1.15,
        opacity: 0.8
      },
      {
        duration: 0.15,
        ease: "easeOut"
      }
    )
    await animate(
      ".check-icon",
      {
        pathLength: 0
      },
      {
        duration: 0.1,
        ease: "easeInOut"
      }
    )
    animate(
      ".filled-circle",
      {
        scale: 1,
        opacity: 1
      },
      {
        duration: 0.3,
        ease: "easeInOut"
      }
    )
    await animate(
      ".check-icon",
      {
        pathLength: 1
      },
      {
        duration: 0.4,
        ease: "easeInOut"
      }
    )
    await animate(
      "svg",
      {
        scale: 1
      },
      {
        duration: 0.2,
        ease: "easeInOut"
      }
    )
  }, [animate])

  const stop = useCallback(() => {
    animate(
      "svg, .filled-circle, .check-icon",
      { scale: 1, opacity: 1, pathLength: 1 },
      { duration: 0.2, ease: "easeInOut" }
    )
  }, [animate])

  useImperativeHandle(ref, () => ({
    startAnimation: start,
    stopAnimation: stop
  }))

  useEffect(() => {
    start()
  }, [start])

  return (
    <motion.div ref={scope} onHoverStart={start} onHoverEnd={stop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="#128c7e"
        className=""
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="#fff" />
        <motion.path
          d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336z"
          className={`filled-circle ${className}`}
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          d="M15.707 9.293a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
          className="check-icon text-background"
          fill="#fff"
        />
      </svg>
    </motion.div>
  )
})

FilledCheckedIcon.displayName = "FilledCheckedIcon"
export default FilledCheckedIcon

export const AlignCenterIcon = forwardRef(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref
  ) => {
    const [scope, animate] = useAnimate()

    const start = async () => {
      animate(".line-1", { scaleX: [1, 0.8, 1] }, { duration: 0.3 })
      animate(".line-2", { scaleX: [1, 1.2, 1] }, { duration: 0.3, delay: 0.1 })
      animate(".line-3", { scaleX: [1, 0.9, 1] }, { duration: 0.3, delay: 0.2 })
    }

    const stop = () => {
      animate(".line-1", { scaleX: 1 }, { duration: 0.2 })
      animate(".line-2", { scaleX: 1 }, { duration: 0.2 })
      animate(".line-3", { scaleX: 1 }, { duration: 0.2 })
    }

    useImperativeHandle(ref, () => {
      return {
        startAnimation: start,
        stopAnimation: stop
      }
    })

    const handleHoverStart = () => {
      start()
    }

    const handleHoverEnd = () => {
      stop()
    }

    return (
      <motion.svg
        ref={scope}
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        style={{ overflow: "visible" }}
      >
        <motion.path
          className="line-1"
          d="M4 6l16 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-2"
          d="M8 12l8 0"
          style={{ transformOrigin: "center" }}
        />
        <motion.path
          className="line-3"
          d="M6 18l12 0"
          style={{ transformOrigin: "center" }}
        />
      </motion.svg>
    )
  }
)

AlignCenterIcon.displayName = "AlignCenterIcon"

export const XIcon = forwardRef(
  (
    { size = 24, color = "currentColor", strokeWidth = 2, className = "" },
    ref
  ) => {
    const [scope, animate] = useAnimate()

    const start = useCallback(async () => {
      // Rotate the X icon slightly and add a scale effect
      animate(
        ".x-line-1",
        {
          rotate: 15,
          scale: 1.1
        },
        {
          duration: 0.2,
          ease: "easeOut"
        }
      )

      animate(
        ".x-line-2",
        {
          rotate: -15,
          scale: 1.1
        },
        {
          duration: 0.2,
          ease: "easeOut"
        }
      )
    }, [animate])

    const stop = useCallback(async () => {
      animate(
        ".x-line-1",
        {
          rotate: 0,
          scale: 1
        },
        {
          duration: 0.2,
          ease: "easeInOut"
        }
      )

      animate(
        ".x-line-2",
        {
          rotate: 0,
          scale: 1
        },
        {
          duration: 0.2,
          ease: "easeInOut"
        }
      )
    }, [animate])

    useImperativeHandle(ref, () => ({
      startAnimation: start,
      stopAnimation: stop
    }))

    return (
      <motion.svg
        ref={scope}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`cursor-pointer ${className}`}
        onHoverStart={start}
        onHoverEnd={stop}
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />

        {/* First line (top-left to bottom-right) */}
        <motion.path
          d="M18 6l-12 12"
          className="x-line-1"
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Second line (bottom-left to top-right) */}
        <motion.path
          d="M6 6l12 12"
          className="x-line-2"
          style={{ transformOrigin: "50% 50%" }}
        />
      </motion.svg>
    )
  }
)

XIcon.displayName = "XIcon"
