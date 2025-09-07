import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { useTranslations } from 'next-intl'
import { Users, Layers, Command, SpeakerIcon } from 'lucide-react' // example icons

function OurServicesSection() {
  const t = useTranslations("Services.StaffAugmentation.ourServicesSection")
  const items = t.raw("items") as string[]

  // Assign icons for each service
  const icons = [Users, Layers, Command]

  return (
    <Section type='outer'>
      <Heading className='text-primary mb-6' size='md'>
        {t("title")}
      </Heading>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item, index) => {
          const Icon = icons[index] || SpeakerIcon
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardContent>
                <Icon className="w-8 h-8 mx-auto mb-6" />
                <Heading size={'sm'}>
                  {item}
                </Heading>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default OurServicesSection
