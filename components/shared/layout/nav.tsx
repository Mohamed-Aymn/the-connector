"use client"

import React, { useRef, useEffect } from "react"
import NavButtons from "./navButtons"
import { COLORS } from "@/lib/colors"

function Nav() {
  const navRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLImageElement>(null) // ref for logo

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current || !logoRef.current) return

      if (window.scrollY >= window.innerHeight) {
        navRef.current.style.backgroundColor = COLORS.SECONDARY
        logoRef.current.src = "/icons/logoBlue.svg"
      } else {
        navRef.current.style.backgroundColor = "transparent"
        logoRef.current.src = "/icons/logoWhite.svg"
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={navRef}
      className="fixed top-0 z-50 flex justify-between items-center w-full p-8 text-white transition-colors duration-300"
    >
      <div className="max-w-12">
        {/* use plain img to manipulate src via ref */}
        <img
          ref={logoRef}
          src="/icons/logoWhite.svg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>
      <NavButtons />
    </div>
  )
}

export default Nav
