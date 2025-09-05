import CtaSection from '@/components/shared/sections/ctaSection'
import HeroSection from '@/components/shared/sections/heroSection'
import Description from '@/components/shared/typography/description'
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations("Services.SoftLanding")
  return (
    <>
      <HeroSection
        title={t("title")}
        description={t("description")}
        mood="service2"
      />
      <div className='flex flex-col gap-4 text-center max-w-4xl mx-auto'>
        <Description size={'md'}>
          {t("secondaryDescription.0")}
        </Description>
        <Description size={'md'}>
          {t("secondaryDescription.1")}
        </Description>
        <Description size={'md'}>
          {t("secondaryDescription.2")}
        </Description>
      </div>
      <CtaSection />
    </>
  )
}

export default Page