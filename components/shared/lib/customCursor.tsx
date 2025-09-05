"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

type CursorType = "default" | "type1" | "type2"

export default function CustomCursor({ cursorType }: { cursorType: CursorType }) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const moveHandler = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      if (!ready) setReady(true)
    }
    window.addEventListener("mousemove", moveHandler)
    return () => window.removeEventListener("mousemove", moveHandler)
  }, [ready])

  if (!ready || cursorType === "default") return null

  return (
    <motion.div
      className={`
        fixed pointer-events-none z-[9999] rounded-full
        ${cursorType === "type1" ? "w-8 h-8 bg-secondary opacity-70" : ""}
        ${cursorType === "type2" ? "w-8 h-8 border-2 border-primary" : ""}
      `}
      initial={{
        x: position.x - 16,
        y: position.y - 16,
        scale: 0,
      }}
      animate={{
        x: position.x - 16,
        y: position.y - 16,
        scale: [0, 1.2, 1],
      }}
      transition={{
        x: { type: "spring", stiffness: 500, damping: 28 },
        y: { type: "spring", stiffness: 500, damping: 28 },
        scale: { duration: 0.4, ease: "easeOut" },
      }}
    />
  )
}
