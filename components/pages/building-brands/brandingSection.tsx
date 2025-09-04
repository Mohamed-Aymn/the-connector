import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import React from 'react'

function BrandingSection() {
  return (
    <Section type={'outer'}>
      <Heading size={'lg'} >
        Branding
      </Heading>
      <Description size={'lg'}>
        We help you create a cohesive brand identity that resonates
        with your target audience. Our branding services include:
      </Description>
      <div>Logo Design</div>
      <div>Brand Guidelines</div>
      <div>Visual Identity</div>
    </Section>
  )
}

export default BrandingSection