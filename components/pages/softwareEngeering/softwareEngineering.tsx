import React from 'react'
import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { useTranslations } from 'next-intl'

// Lucide icons
import { Laptop, Smartphone, Cpu, Shield } from 'lucide-react'

function SoftwareEngineering() {
  const t = useTranslations("Services.SoftwareEngineering")
  const services = t.raw("items") as string[]

  // Map icons to services
  const icons = [Laptop, Smartphone, Cpu, Shield]

  return (
    <Section type={'outer'}>
      <Heading size={'md'} className="mb-4">
        {t("title")}
      </Heading>
      <Description size={'md'} className="text-center mb-8">
        {t("description")}
      </Description>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {services.map((service, index) => {
          const Icon = icons[index]
          return (
            <div key={index} className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <p className="font-medium">{service}</p>
            </div>
          )
        })}
      </div>
    </Section>
  )
}

export default SoftwareEngineering
