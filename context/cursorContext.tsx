"use client"

import CustomCursor from "@/components/shared/lib/customCursor"
import React, { createContext, useContext, useState } from "react"

type CursorType = "default" | "type1" | "type2"

const CursorContext = createContext({
  cursorType: "default" as CursorType,
  setCursorType: (type: CursorType) => { }
})

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = useState<CursorType>("default")

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
      <CustomCursor cursorType={cursorType} />
    </CursorContext.Provider>
  )
}

export const useCursor = () => useContext(CursorContext)
