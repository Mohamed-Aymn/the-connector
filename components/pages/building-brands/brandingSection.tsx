import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { BookCheck, Fingerprint, Hexagon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'

function BrandingSection() {
  const t = useTranslations("Services.BuildingBrands.brandingSection")
  const services = t.raw("items") as string[]
  const icons = [Hexagon, BookCheck, Fingerprint]
  return (
    <Section type={'outer'}>
      <Heading size={'md'} >
        {t("title")}
      </Heading>
      <Description size={'md'} className='text-center'>
        {t("description")}
      </Description>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center mt-5">
        {services.map((service, index: number) => {
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

export default BrandingSection