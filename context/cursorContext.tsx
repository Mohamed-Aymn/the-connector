"use client"

import CustomCursor from "@/components/shared/lib/customCursor"
import React, { createContext, useContext, useState, useEffect } from "react"

type CursorType = "default" | "type1" | "type2"

const CursorContext = createContext({
  cursorType: "default" as CursorType,
  setCursorType: (type: CursorType) => { }
})

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default")

  // Toggle body cursor style depending on state
  useEffect(() => {
    if (cursorType === "default") {
      document.body.style.cursor = "auto"
    } else {
      document.body.style.cursor = "none"
    }
  }, [cursorType])

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      <CustomCursor cursorType={cursorType} />
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
