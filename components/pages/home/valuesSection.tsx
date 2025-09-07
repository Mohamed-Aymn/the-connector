'use client'

import React from 'react'
import Section from '@/components/shared/layout/section'
import { ChartColumnIncreasing, HandFist, Lightbulb, Repeat, UsersRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import Heading from '@/components/shared/typography/heading'
import { useTranslations } from 'next-intl'

type ValueItem = {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

function ValuesSection() {
  const t = useTranslations("Home.OurValuesSection")
  // get array from JSON
  const items = t.raw("items") as { title: string; description: string }[]
  // preprocessing
  const itemsWithIcons: ValueItem[] = items.map((item, index) => ({
    ...item,
    icon: [ChartColumnIncreasing, HandFist, Lightbulb, Repeat, UsersRound][index],
  }))


  return (
    <Section type="outer">
      <Heading className="text-primary mb-6" size="md">
        {t("title")}
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {itemsWithIcons.map((item, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <Heading size="sm" className="text-left">
                {item.title}
              </Heading>
              <CardAction className='w-18 h-18'>
                <Button className='w-full h-full' variant="link">
                  {React.createElement(item.icon, { className: "w-full h-full size-full" })}
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              {item.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default ValuesSection
