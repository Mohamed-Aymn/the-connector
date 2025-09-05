import BrandingSection from '@/components/pages/building-brands/brandingSection'
import DigitalPresence from '@/components/pages/building-brands/digitalPresence'
import CtaSection from '@/components/shared/sections/ctaSection'
import HeroSection from '@/components/shared/sections/heroSection'
import Description from '@/components/shared/typography/description'
import { generateMetadataAbstraction } from '@/lib/metaUtils'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Services.BuildingBrands.Meta");
}

function Page() {
  const t = useTranslations("Services.BuildingBrands")
  return (
    <>
      <HeroSection
        title={t("title")}
        description={t("description")}
        mood="service1"
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

      <BrandingSection />
      <DigitalPresence />
      <CtaSection />
    </>
  )
}

export default Page
