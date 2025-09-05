import SoftwareEngineering from '@/components/pages/softwareEngeering/softwareEngineering'
import CtaSection from '@/components/shared/sections/ctaSection'
import HeroSection from '@/components/shared/sections/heroSection'
import { generateMetadataAbstraction } from '@/lib/metaUtils'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Services.SoftwareEngineering.Meta");
}

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
