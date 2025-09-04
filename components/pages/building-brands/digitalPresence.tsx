import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import React from 'react'

function DigitalPresence() {
  return (
    <Section type={'outer'}>
      <Heading size={'lg'} >
        Sidigatl Presence
      </Heading>
      <Description size={'lg'}>
        We help you create a cohesive brand identity that resonates
        with your target audience. Our branding services include:
      </Description>
      <div>Social Media Strategy</div>
      <div>Content Creation</div>
      <div>Analtics and Reporting</div>
      <div>Website Development</div>
    </Section>
  )
}

export default DigitalPresence