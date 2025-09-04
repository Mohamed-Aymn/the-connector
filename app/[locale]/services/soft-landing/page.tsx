import HeroSection from '@/components/shared/sections/heroSection'
import Description from '@/components/shared/typography/description'
import React from 'react'

function Page() {
  return (
    <>
      <HeroSection
        title="Soft Landing Across (MENA)"
        description="This service provides comprehensive support for international businesses seeking to establish and expand their presence across Middle Eastern and North African markets."
        mood="service2"
      />
      <Description size={'lg'}>
        This specialized service offers a strategic entry point by navigating the complex regulatory
        landscapes, diverse cultural nuances, and unique business ecosystems of countries
        Especially the GCC and North Africa Region.

        Service providers assist with essential elements including market entry strategy, legal
        entity formation, local partnership development, officespace procurement, and regulatory
        compliance across different MENA jurisdictions.

        Connecting you with MENA business hubs and stakeholders.
      </Description>
    </>
  )
}

export default Page