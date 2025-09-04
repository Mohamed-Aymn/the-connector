import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'

function PricingModel() {
  return (
    <Section type='outer'>
      <Heading
        className='text-primary'
        size='md'
      >
        Pricing Model
      </Heading>
      <div className='grid grid-cols-3'>
        <div>Talens Sourcing</div>
        <div>Fully outsourcing</div>
        <div>Managed squad</div>
      </div>
    </Section>
  )
}

export default PricingModel