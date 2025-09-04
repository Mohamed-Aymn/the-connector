import React from 'react'
import Heading from '../typography/heading';
import Description from '../typography/description';

interface HeroProps {
  title: string
  description: string
  mood: "service1" | "service2" | "shared";
}

function Hero({ title, description }: HeroProps) {
  const contentClassName = "absolute top-1/2 left-[43%] -translate-x-1/2 -translate-y-1/2 text-left"
  return (
    <div className="relative h-screen w-full">
      {/* left half */}
      <div className="w-full h-full bg-primary overflow-hidden">
        <div className={`${contentClassName} text-secondary`}>
          <Heading size="lg" className='text-left' >
            {title}
          </Heading>
          <Description size={'md'}>
            {description}
          </Description>
        </div>
      </div>

      {/* right half */}
      <div
        className={`absolute z-20 bg-secondary inset-0 [clip-path:polygon(30%_0,100%_0,100%_100%,30%_100%)] overflow-hidden`}
      >
        <div className="absolute inset-0">
          <div className={`${contentClassName} text-primary`}>
            <Heading
              size="lg"
              className='text-left'
            >
              {title}
            </Heading>
            <Description size={'md'}>
              {description}
            </Description>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero