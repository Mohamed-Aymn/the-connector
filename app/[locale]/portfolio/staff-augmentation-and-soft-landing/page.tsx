import Hero from '@/components/shared/sections/heroSection'
import { Link } from '@/i18n/navigation'
import React from 'react'

function Page() {
  return (
    <>
      <Hero
        title="Staff Agumentation and Soft Landing"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo quidem, sit rem mollitia qui quos corporis odit numquam nam earum sapiente rerum obcaecati"
        mood="service2"
      />
      <div>
        <Link href={'/portfolio/staff-augmentation-and-soft-landing/1'}>
          <div>
            <div>Title</div>
            <div>Description</div>
          </div>
        </Link>
        <Link href={'/portfolio/staff-augmentation-and-soft-landing/2'}>
          <div>
            <div>Title</div>
            <div>Description</div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Page