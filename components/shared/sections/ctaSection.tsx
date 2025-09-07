import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import React from 'react'

function CtaSection() {
  return (
    <Section type='outer'>
      <Heading level={2} size='md'>
        Contact Us
      </Heading>
      <div className="w-full flex justify-center items-center mt-8">
        <Link href={'/contact'} className='cursor-pointer'>
          <Button size={'lg'}>
            Contact Us!
          </Button>
        </Link>
      </div>
    </Section>
  )
}

export default CtaSection