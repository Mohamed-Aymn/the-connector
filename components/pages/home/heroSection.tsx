import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import React from 'react'

function HeroSection() {
  const t = useTranslations("Home.HeroSection")
  const contentClassName = "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
  return (
    <div className="relative h-screen w-full">
      {/* left half */}
      <div className="w-full h-full bg-primary overflow-hidden">
        <div className={`${contentClassName} text-secondary`}>
          <Heading size="lg" >
            {t("title")}
          </Heading>
          <Description size={'md'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati
          </Description>
          <Button className='mt-4' variant={'outline'} size={"lg"}>
            {t("button")}
          </Button>
        </div>
      </div>

      {/* right half */}
      <div
        className={`absolute z-20 bg-secondary inset-0 [clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)] overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className={`${contentClassName} text-primary`}>
            <Heading
              size="lg"
            >
              {t("title")}
            </Heading>
            <Description size={'md'}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati
            </Description>
            <Button className='mt-4' size={"lg"}>
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
