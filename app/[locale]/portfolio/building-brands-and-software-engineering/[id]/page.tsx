import Hero from '@/components/shared/sections/heroSection';
import { generateMetadataAbstraction } from '@/lib/metaUtils';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import React from 'react';

interface PageProps { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  return generateMetadataAbstraction(`Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}.Meta`);
}

export default async function Page({ params }: PageProps) {
  const { id } = await params
  const t = await getTranslations(`Portfolio.buildingBrandsAndSoftwareEngineering.items.${id}`);

  return (
    <>
      <Hero
        title={t('title')}
        description={t('description')}
        mood="service1"
      />
    </>
  );
}
