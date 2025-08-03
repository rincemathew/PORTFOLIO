import React from 'react'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  subsets: ['Playwrite AU QLD", cursive;'],
  display: 'swap',
})

export default function Me() {
  return (
    <div className='bg-[var(--fourth-color)] w-full h-full flex flex-col items-center justify-center'>
      <h1 className='text-[var(--primary-color)] text-3xl font-bold px-6 py-2'>
        Rince Mathew
      </h1>
      <h6 className='text-[var(--primary-color)] text-3xl font-bold px-6 py-2'>
        Web Developer | Tech Enthusiast
      </h6>
    </div>
  )
}
