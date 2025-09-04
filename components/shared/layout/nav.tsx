import React from 'react'
import Image from 'next/image'

function Nav() {
  return (
    <div className='fixed top-0 z-50 flex justify-between items-center w-full p-8 text-white'>
      <div className='max-w-12'>
        <Image
          src={"/icons/logoWhite.svg"}
          alt={'logo'}
          width={100}
          height={100}
        />
      </div>

      <ul className='text-primary flex gap-4'>
        <li>Home</li>
        <li>Services</li>
        <li>Portfolio</li>
        <li>Contact us</li>
      </ul>
    </div>
  )
}

export default Nav