import HowDoesItWork from '@/components/pages/staff-agumentation/howDoesItWork'
import OurServicesSection from '@/components/pages/staff-agumentation/ourServicesSection'
import PricingModel from '@/components/pages/staff-agumentation/pricingModel'
import WhyEgyptSection from '@/components/pages/staff-agumentation/WhyEgyptSection'
import WhySection from '@/components/pages/staff-agumentation/whySection'
import HeroSection from '@/components/shared/sections/heroSection'
import React from 'react'

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
    </>
  )
}

export default Page