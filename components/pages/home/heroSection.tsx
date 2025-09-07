"use client"

import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { useCursor } from '@/context/cursorContext'
import { useTranslations } from 'next-intl'
import React from 'react'

function Content() {
  const t = useTranslations("Home.HeroSection")
  return (
    <>
      <Heading size="lg" >
        {t("title")}
      </Heading>
      <Description size={'md'}>
        {t("description")}
      </Description>
      <div className='mt-4'>
        <Button className='mt-4 mr-12 cursor-pointer' variant={'outline'} size={"lg"}>
          {t("button1")}
        </Button>
        <Button className='mt-4 cursor-pointer' size={"lg"}>
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
        <div className={`${contentClassName} text-secondary`}>
          <Content />
        </div>
      </div>

      {/* right half */}
      <div
        className={`absolute z-20 bg-secondary inset-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)] overflow-hidden`}
        onMouseEnter={() => setCursorType("type2")}
        onMouseLeave={() => setCursorType("default")}
      >
        <div className="absolute inset-0">
          <div className={`${contentClassName} text-primary`}>
            <Content />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
