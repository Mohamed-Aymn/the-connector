import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import SpotlightCard from '@/components/SpotlightCard'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { SpeakerIcon } from 'lucide-react'
import React from 'react'

function ServicesSection() {
  return (
    <Section type='outer'>
      <Heading
        className='text-primary'
        size='md'
      >
        Our Services
      </Heading>

      <div className='grid grid-cols-2'>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <Heading size={'sm'} className='text-left'>
              Login to your account
            </Heading>
            <CardAction>
              <Button variant="link">
                <SpeakerIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem earum, ex vel et iusto veniam consectetur ipsam cum assumenda, fugiat eveniet facere suscipit praesentium numquam ad aperiam omnis ullam?
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <Heading size={'sm'} className='text-left'>
              Login to your account
            </Heading>
            <CardAction>
              <Button variant="link">
                <SpeakerIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem earum, ex vel et iusto veniam consectetur ipsam cum assumenda, fugiat eveniet facere suscipit praesentium numquam ad aperiam omnis ullam?
          </CardContent>
        </Card>
        <Card className="w-full max-w-sm">
          <CardHeader>
            <Heading size={'sm'} className='text-left'>
              Login to your account
            </Heading>
            <CardAction>
              <Button variant="link">
                <SpeakerIcon />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem earum, ex vel et iusto veniam consectetur ipsam cum assumenda, fugiat eveniet facere suscipit praesentium numquam ad aperiam omnis ullam?
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export default ServicesSection