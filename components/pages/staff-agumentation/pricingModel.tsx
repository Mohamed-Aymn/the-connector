import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import Description from '@/components/shared/typography/description'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useTranslations } from 'next-intl'

function PricingModel() {
  const t = useTranslations("Services.StaffAugmentation.pricingModelSection")
  const items = t.raw("items") as { title: string; description: string[] }[]

  return (
    <Section type='outer'>
      <Heading className='text-primary mb-6' size='md'>
        {t("title")}
      </Heading>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {items.map((item, index) => (
          <Card key={index} className="w-full max-w-sm">
            <CardHeader>
              <Heading size='sm' className='text-left'>
                {item.title}
              </Heading>
            </CardHeader>
            <CardContent>
              <ul className='list-disc pl-5 space-y-1'>
                {item.description.map((desc, idx) => (
                  <li key={idx}>
                    <Description size='sm'>{desc}</Description>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default PricingModel
