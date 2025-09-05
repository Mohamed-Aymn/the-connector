import CtaSection from '@/components/shared/sections/ctaSection'
import Hero from '@/components/shared/sections/heroSection'
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

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {Object.entries(itemsObj).map(([slug, item]) => (
          <Link
            key={slug}
            href={`/portfolio/building-brands-and-software-engineering/${slug}`}
          >
            <div className="p-4 border rounded hover:shadow-lg transition cursor-pointer">
              <div className="font-semibold text-lg">{item.title}</div>
              <div className="text-sm text-muted-foreground mt-1">{item.description}</div>
              <div className="flex flex-wrap gap-2 mt-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <CtaSection />
    </>
  )
}

export default Page
