import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpeakerIcon, Users, DollarSign, Award } from 'lucide-react' // example icons
import { useTranslations } from 'next-intl'

function WhySection() {
  const t = useTranslations("Services.StaffAugmentation.WhySection")
  const items = t.raw("items") as {
    title: string
    description: string | string[]
  }[]

  // Assign icons to each item (match length of items)
  const icons = [Users, DollarSign, Award]

  return (
    <Section type='outer'>
      <Heading className='text-primary' size='md'>
        {t("title")}
      </Heading>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
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
                {Array.isArray(item.description) ? (
                  item.description.map((desc, i) => <p key={i} className="mb-2">{desc}</p>)
                ) : (
                  <p>{item.description}</p>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default WhySection
