import Section from '@/components/shared/layout/section'
import CtaSection from '@/components/shared/sections/ctaSection'
import Hero from '@/components/shared/sections/heroSection'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Link } from '@/i18n/navigation'
import { generateMetadataAbstraction } from '@/lib/metaUtils'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import React from 'react'

export async function generateMetadata(): Promise<Metadata> {
  return generateMetadataAbstraction("Portfolio.buildingBrandsAndSoftwareEngineering.Meta");
}

function Page() {
  const t = useTranslations("Portfolio.buildingBrandsAndSoftwareEngineering")
  const itemsObj = t.raw("items") as Record<
    string,
    {
      title: string
      description: string
      tags: string[]
      body: Record<string, string[]>
    }
  >

  return (
    <>
      <Hero
        title={t("title")}
        description={t("description")}
        mood="service1"
      />
      <Section type='outer'>
        <div className='flex flex-col gap-4'>
          {Object.entries(itemsObj).map(([slug, item]) => (
            <Link
              key={slug}
              href={`/portfolio/building-brands-and-software-engineering/${slug}`}
            >
              <Card className="group flex items-start gap-4 rounded-2xl border p-4 transition hover:shadow-xl hover:border-primary/40 cursor-pointer bg-white/5 backdrop-blur-sm">
                <div className="flex flex-col justify-between">
                  <CardHeader className="p-0">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">
                      {item.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="p-0 mt-2 space-y-2">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground leading-snug">
                      {item.description}
                    </p>
                  </CardContent>
                </div>
              </Card>

            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}

export default Page
