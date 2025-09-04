import BrandingSection from '@/components/pages/building-brands/brandingSection'
import DigitalPresence from '@/components/pages/building-brands/digitalPresence'
import HeroSection from '@/components/shared/sections/heroSection'
import Description from '@/components/shared/typography/description'
import React from 'react'

function Page() {
  return (
    <>
      <HeroSection
        title="Building Brands"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati"
        mood="service1"
      />

      <Description size={'lg'}>
        This comprehensive service encompasses
        everything from foundational brand
        identity creation - including distinctive logo
        design, cohesive visual elements, and
        detailed brand guidelines - to full-scale
        digital presence development through
        custom, SEO-optimized websites and
        strategic social media management across
        key platforms.
      </Description>
      <Description size={'lg'}>
        This integrated approach is particularly
        valuable for businesses seeking to
        establish a strong market presence while
        simultaneously building effective sales
        channels, as it aligns brand messaging
        with sales objectives across all customer
        touchpoints - from social media
        engagement to direct sales interactions.
      </Description>

      <Description size={'lg'}>
        The sales strategy component provides
        detailed market analysis, customer journey
        mapping, pricing strategies, and sales
        process optimization, ensuring brands not
        only look professional but also perform
        effectively in the market.
      </Description>
      <Description size={'lg'}>
        The service extends beyond traditional
        branding by integrating sophisticated sales
        enablement tools, including customized
        sales kits that arm teams with compelling
        presentation materials, product catalogs,
        case studies, and pitch decks.
      </Description>
      <BrandingSection />
      <DigitalPresence />
    </>
  )
}

export default Page