import Section from '@/components/shared/layout/section';
import Hero from '@/components/shared/sections/heroSection';
import { generateMetadataAbstraction } from '@/lib/metaUtils';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from "next/image"
import Description from '@/components/shared/typography/description';
import CtaSection from '@/components/shared/sections/ctaSection';

interface PageProps { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return generateMetadataAbstraction(`Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}.Meta`);
}

const Urls = {
  venttat: "https://venttat.sa/",
  amoramor: "https://venttat.sa/",
  mukammel: "https://venttat.sa/",
  podmedianetwork: "https://venttat.sa/",
  podevents: "https://venttat.sa/",
  dallal: "https://venttat.sa/",
  dpartners: "https://venttat.sa/",
  scitecs: "https://venttat.sa/",
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const t = await getTranslations(`Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}`);
  if (t("title") === `Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}.title`) {
    notFound();
  }

  return (
    <>
      <Hero
        title={t('title')}
        description={t('description')}
        mood="service1"
      />
      <Section type='outer'>
        <div className='w-full flex justify-center items-center'>
          <div className='flex flex-col gap-2 justify-center items-center'>
            <Image
              src={`/imgs/${id}.png`}
              alt={t('title')}
              width={500}
              height={500}
            />
            {Urls[id as keyof typeof Urls] && (
              <div className='flex gap-2'>
                Visit The life website:
                <a
                  href={Urls[id as keyof typeof Urls]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  {Urls[id as keyof typeof Urls]}
                </a>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* content */}
      <Section type="outer">
        <div className="flex flex-col gap-24">
          {Object.entries(t.raw("body") as Record<string, string[]>).map(
            ([sectionTitle, paragraphs]) => (
              <div
                key={sectionTitle}
                id={sectionTitle.toLowerCase()}
                className="flex gap-12"
              >
                {/* Content column */}
                <div className="flex-1 space-y-4">
                  {paragraphs.map((p, i) => (
                    <Description
                      key={i}
                      className="text-base leading-relaxed text-foreground"
                      size="md"
                    >
                      {p}
                    </Description>
                  ))}
                </div>

                {/* Sticky rotated heading */}
                <div className="relative w-12">
                  <div className="sticky top-32 rotate-90 origin-right text-6xl font-semibold text-muted-foreground opacity-35">
                    {sectionTitle}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
