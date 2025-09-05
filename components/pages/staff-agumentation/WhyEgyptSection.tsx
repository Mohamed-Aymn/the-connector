import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpeakerIcon, Users, DollarSign, Globe, Clock } from 'lucide-react' // example icons
import { useTranslations } from 'next-intl'

function WhyEgyptSection() {
  const t = useTranslations("Services.StaffAugmentation.WhyEgyptSection")
  const items = t.raw("items") as {
    title: string
    description: string
  }[]

  // Map icons to items (fall back to SpeakerIcon if not enough)
  const icons = [Users, DollarSign, Globe, Clock]

  return (
    <Section type='outer'>
      <Heading className='text-primary mb-6' size='md'>
        {t("title")}
      </Heading>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {items.map((item, index) => {
          const Icon = icons[index] || SpeakerIcon
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader className="flex justify-between items-center">
                <Heading size={'sm'} className='text-left'>
                  {item.title}
                </Heading>
                <CardAction>
                  <Button variant="link">
                    <Icon className="w-8 h-8 size-full" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>{item.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default WhyEgyptSection
