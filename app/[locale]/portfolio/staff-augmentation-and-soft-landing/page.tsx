import ClientsSection from '@/components/shared/sections/clientsSection'
import CtaSection from '@/components/shared/sections/ctaSection'
import Hero from '@/components/shared/sections/heroSection'
import { generateMetadataAbstraction } from '@/lib/metaUtils'
import { Metadata } from 'next'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Portfolio.staffAugmentationAndSoftLanding.Meta");
}

function Page() {
  return (
    <>
      <Hero
        title="Staff Agumentation and Soft Landing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati"
        mood="service2"
      />
      <ClientsSection />
      <CtaSection />
    </>
  )
}

export default Page