import LetterGlitch from '@/components/LetterGlitch'
import Heading from '@/components/shared/typography/heading'
import { COLORS } from '@/lib/colors'
import { useTranslations } from 'next-intl'
import React from 'react'

function Hero() {
  const t = useTranslations("Home.hero")
  return (
    <div className="relative w-full h-screen">
      {/* Fullscreen LetterGlitch */}
      <div className="absolute inset-0 z-10">
        <Heading size="md" className="text-secondary z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {t("title")}
        </Heading>
        <LetterGlitch
          glitchSpeed={70}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
          glitchColors={[COLORS.PRIMARY, COLORS.DARK_NEUTRAL]}
        />
      </div>

      {/* Clip container only showing the left polygon part */}
      <div
        className={`absolute z-20 bg-secondary inset-0 [clip-path:polygon(55%_0,100%_0,100%_100%,40%_100%)] overflow-hidden`}
      >
        <div className="absolute inset-0">
          <Heading
            size="md"
            className="text-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            {t("title")}
          </Heading>
        </div>
      </div>
    </div>
  )
}

export default Hero
