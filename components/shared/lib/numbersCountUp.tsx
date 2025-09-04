import CountUp from '@/components/CountUp'
import React from 'react'

function NumbersCountUp() {
  return (
    <div>
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </div>
  )
}

export default NumbersCountUp