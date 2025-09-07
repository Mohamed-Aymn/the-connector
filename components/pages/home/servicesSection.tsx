import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

function ServicesSection() {
  const t = useTranslations("Home.OurServicesSection")
  const services = t.raw("items") as { title: string; description: string, type?: 1 | 2, href?: string }[]
  // preprocessing
  services[0].type = 2
  services[0].href = "/services/staff-augmentation"
  services[1].type = 2
  services[1].href = "/services/soft-landing"
  services[2].type = 1
  services[2].href = "/services/building-brands"

  return (
    <Section type="outer">
      <Heading level={2} className="text-primary mb-8" size="md">
        {t("title")}
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Card key={idx}
            className={`
              w-full  transition-colors duration-300
              ${service.type === 1 ?
                "hover:bg-primary hover:text-secondary" :
                "hover:bg-secondary hover:text-primary"
              }
            `}
          >
            <CardHeader className="flex items-center justify-between">
              <Heading level={3} size="sm" className="text-left">
                {service.title}
              </Heading>
              <CardAction>
                <Button className='cursor-pointer'>
                  <Link href={service.href as string}>
                    View More
                  </Link>
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {service.description}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default ServicesSection