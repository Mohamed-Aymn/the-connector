import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import SpotlightCard from '@/components/SpotlightCard'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SpeakerIcon } from 'lucide-react'
import React from 'react'

function AboutSection() {
  return (
    <Section type='outer'>
      <Heading
        className='text-primary'
        size='md'
      >
        About
      </Heading>

      <Description size={'md'}>
        Welcome to The Connector Consultancy
        The premier business consulting firm dedicated to fostering growth and success in the Middle East and North Africa (MENA) region. With a team of experienced professionals and an extensive network of industry connections.
        We are committed to providing tailored solutions that empower businesses to thrive in this dynamic economic landscape.
      </Description>
    </Section>
  )
}

export default AboutSection