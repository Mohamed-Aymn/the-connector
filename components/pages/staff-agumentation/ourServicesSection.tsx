import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpeakerIcon } from 'lucide-react'


function OurServicesSection() {
  return (
    <Section type='outer'>
      <Heading
        className='text-primary'
        size='md'
      >
        Our Services
      </Heading>

      <div className='grid grid-cols-2'>
        <Card className="w-full max-w-sm"> <CardHeader>
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

export default OurServicesSection