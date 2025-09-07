import Section from '@/components/shared/layout/section';
import Hero from '@/components/shared/sections/heroSection';
import { generateMetadataAbstraction } from '@/lib/metaUtils';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import React from 'react';
import Image from "next/image"

interface PageProps { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return generateMetadataAbstraction(`Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}.Meta`);
}

const Urls = {
  venttat: "https://venttat.com/",
  amoramor: "https://venttat.com/",
  mukammel: "https://venttat.com/",
  podmedianetwork: "https://venttat.com/",
  podevents: "https://venttat.com/",
  dallal: "https://venttat.com/",
  dpartners: "https://venttat.com/",
  scitecs: "https://venttat.com/",
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
    </>
  );
}
