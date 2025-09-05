import HowDoesItWork from '@/components/pages/staff-agumentation/howDoesItWork'
import OurServicesSection from '@/components/pages/staff-agumentation/ourServicesSection'
import PricingModel from '@/components/pages/staff-agumentation/pricingModel'
import WhyEgyptSection from '@/components/pages/staff-agumentation/WhyEgyptSection'
import WhySection from '@/components/pages/staff-agumentation/whySection'
import CtaSection from '@/components/shared/sections/ctaSection'
import HeroSection from '@/components/shared/sections/heroSection'
import { generateMetadataAbstraction } from '@/lib/metaUtils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Services.StaffAugmentation.Meta");
}

function Page() {
  return (
    <>
      <HeroSection
        title="Staff Agumentation"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati"
        mood="service2"
      />
      <WhySection />
      <WhyEgyptSection />
      <OurServicesSection />
      <HowDoesItWork />
      <PricingModel />
      <CtaSection />
    </>
  )
}

export default Page