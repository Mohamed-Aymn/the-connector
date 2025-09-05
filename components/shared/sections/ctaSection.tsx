import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import React from 'react'

function CtaSection() {
  return (
    <Section type='outer'>
      <Heading level={2} size='md'>
        Contact Us
      </Heading>
      <div className="w-full flex justify-center items-center mt-8">
        <Button size={'lg'}>
          Contact Us!
        </Button>
      </div>
    </Section>
  )
}

export default CtaSection