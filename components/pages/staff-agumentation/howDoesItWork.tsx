import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpeakerIcon } from 'lucide-react'


function HowDoesItWork() {
  return (
    <Section type='outer'>
      <Heading
        className='text-primary'
        size='md'
      >
        How Does it Work
      </Heading>

      <Heading
        className='text-primary'
        size='sm'
      >
        Work Flow
      </Heading>
      <div className='grid grid-cols-3'>
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

      <Heading
        className='text-primary'
        size='sm'
      >
        EMPLOYEES BENEFITS
        & WORK ENVIROMENT
      </Heading>
      <div>
        <div>01 Social Insurance</div>
        <div>02 Social Insurance</div>
        <div>03 Social Insurance</div>
        <div>04 Social Insurance</div>
        <div>05 Social Insurance</div>
      </div>
    </Section>
  )
}

export default HowDoesItWork