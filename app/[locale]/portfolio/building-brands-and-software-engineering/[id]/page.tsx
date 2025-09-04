import Hero from '@/components/shared/sections/heroSection'
import React from 'react'

interface PageProps {
  params: Promise<{ id: string }>
}

async function Page({ params }: PageProps) {
  const { id } = await params
  return (
    <>
      <Hero
        title={id}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati"
        mood="service1"
      />
    </>
  )
}

export default Page