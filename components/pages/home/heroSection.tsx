"use client"

import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { useCursor } from '@/context/cursorContext'
import { MoveDownIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ContentProps {
  side: "left" | "right"
}

function Content({ side }: ContentProps) {
  const t = useTranslations("Home.HeroSection")
  const handleScroll = () => {
    const section = document.getElementById("about")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <>
      <Heading size="lg">
        {t("title")}
      </Heading>
      <Description size="md" className={side === "left" ? "text-secondary" : "text-primary"}>
        {t("description")}
      </Description>

      {/* container for buttons */}
      <div className="relative mt-8 w-full h-16">
        {/* Left button */}
        <Button
          className="absolute left-0 right-50 md:right-90 md:left-0 lg:right-100 top-0 cursor-pointer flex"
          variant="outline"
          size="lg"
          onClick={handleScroll}
        >
          <span>
            {t("button1")}
          </span>
          <MoveDownIcon className='animate-bounce mt-1' />
        </Button>

        {/* Right button */}
        <Button

          className="absolute right-0 left-50 md:left-90 md:right-0 lg:left-100 top-0 cursor-pointer flex"
          size="lg"
        >
          {t("button2")}
        </Button>
      </div>
    </>
  )
}

function HeroSection() {
  const contentClassName = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  const { setCursorType } = useCursor()
  return (
    <div className="relative h-screen w-full">
      {/* left half */}
      <div
        className="w-full h-full bg-primary overflow-hidden"
        onMouseEnter={() => setCursorType("type1")}
        onMouseLeave={() => setCursorType("default")}
      >
        <div className={`${contentClassName} text-secondary max-w-[720px]`}>
          <Content side='left' />
        </div>
      </div>

      {/* right half */}
      <div
        className={`absolute z-20 bg-secondary inset-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)] overflow-hidden`}
        onMouseEnter={() => setCursorType("type2")}
        onMouseLeave={() => setCursorType("default")}
      >
        <div className="absolute inset-0">
          <div className={`${contentClassName} text-primary max-w-[720px]`}>
            <Content side='right' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
