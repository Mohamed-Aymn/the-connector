'use client'

import CountUp from '@/components/CountUp'
import { useTranslations } from 'next-intl'
import React from 'react'
import Heading from '../typography/heading'
import { CalendarCheck, Earth, UserStar } from 'lucide-react'

type NumberItem = {
  title: string
  number: number
  icon: React.ComponentType<{ className?: string; size?: number }>
}

function NumbersCountUp() {
  const t = useTranslations("Home.AboutSection")
  const numbers = t.raw("numbers") as { title: string; number: number }[]
  // preprocessing
  const numbersWithIcons: NumberItem[] = numbers.map((item, index) => ({
    ...item,
    icon: [UserStar, Earth, CalendarCheck][index],
  }))

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
      {numbersWithIcons.map((item, index) => (
        <div
          key={index}
          className="flex flex-col justify-between items-center text-center"
        >
          <div className="w-full">
            <div className="bg-primary w-fit h-fit mb-5 p-5 mx-auto rounded text-secondary">
              <item.icon className="w-8 h-8" />
            </div>

            {/* Center the number */}
            <div className="flex justify-center items-center text-3xl font-bold gap-1 mx-auto">
              <CountUp
                from={0}
                to={item.number}
                separator=","
                direction="up"
                duration={1.5}
                className="count-up-text"
              />
              <span>+</span>
            </div>
          </div>

          <Heading size="sm" level={3}>
            {item.title}
          </Heading>
        </div>
      ))}
    </div>
  )
}

export default NumbersCountUp
