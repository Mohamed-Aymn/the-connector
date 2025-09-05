import Hero from '@/components/shared/sections/heroSection';
import { getTranslations } from 'next-intl/server';
import React from 'react';

interface PageProps { params: Promise<{ id: string }> }

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
