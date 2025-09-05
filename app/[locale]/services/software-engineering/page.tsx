import SoftwareEngineering from '@/components/pages/softwareEngeering/softwareEngineering'
import CtaSection from '@/components/shared/sections/ctaSection'
import HeroSection from '@/components/shared/sections/heroSection'
import { useTranslations } from 'next-intl'
import React from 'react'

function Page() {
  const t = useTranslations("Services.SoftwareEngineering")
  return (
    <>
      <HeroSection
        title={t("title")}
        description={t("description")}
        mood="service1"
      />
      <SoftwareEngineering />
      <CtaSection />
    </>
  )
}

export default Page
