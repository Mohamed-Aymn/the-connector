import Section from '@/components/shared/layout/section'
import Description from '@/components/shared/typography/description'
import Heading from '@/components/shared/typography/heading'
import { Button } from '@/components/ui/button'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
import React from 'react'

interface ContentProps {
  type: 1 | 2;
  title: string;
  href: string;
  description: string
}

function Content({ type, title, href, description }: ContentProps) {
  return (

    <Card
      className={`
              w-full  transition-colors duration-300
              bg-transparent relative
              border-0
            ${type === 1 ?
          "text-secondary" :
          "text-primary"
        }`}

    // className={`
    //         w-full  transition-colors duration-300
    //         bg-transparent relative
    >
      {/* <div className={`
            ${type === 2 ? "bg-secondary" : "bg-primary"}
              absolute top-0 left-0 w-2/5 h-2/5 z-0`} /> */}

      <div className='z-1'>
        <CardHeader className="flex items-center justify-between">
          <Heading level={3} size="sm" className="text-left">
            {title}
          </Heading>
          <CardAction>
            <Button className='cursor-pointer'>
              <Link href={href as string}>
                View More
              </Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="leading-relaxed">
          <Description size={'md'}>
            {description}
          </Description>
        </CardContent>
      </div>
    </Card>
  )
}

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
  services[3].type = 1
  services[3].href = "/services/software-engineering"
  return (
    <Section type="outer">
      <Heading level={2} className="text-primary mb-8" size="md">
        {t("title")}
      </Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="relative w-full h-full group">
            <div className={`w-full h-full overflow-hidden 
            ${service.type === 1 ? "bg-primary" : "bg-secondary"}
              rounded-lg`}>
              <div>
                <Content
                  type={service.type as 1 | 2}
                  title={service.title}
                  href={service.href as string}
                  description={service.description}
                />
              </div>
            </div>

            <div
              className={`
        absolute z-20 inset-0
        bg-white
        [clip-path:polygon(30%_0,100%_0,100%_100%,30%_100%)]
        group-hover:[clip-path:polygon(50%_0,100%_0,100%_100%,50%_100%)]
        transition-all duration-500 ease-in-out
        overflow-hidden
      `}
            >
              <div>
                <Content
                  type={service.type as 1 | 2}
                  title={service.title}
                  href={service.href as string}
                  description={service.description}
                />
              </div>
            </div>
          </div>
        ))}     </div>
    </Section>
  )
}

export default ServicesSection