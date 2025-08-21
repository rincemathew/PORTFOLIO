import React from 'react'
import { Playwrite_AU_QLD } from 'next/font/google'

// import the correct font
const playwrite = Playwrite_AU_QLD({
  subsets: ['latin'], // use 'latin' subset
  display: 'swap',
})

export default function Me() {
  return (
    <div className={`bg-[var(--fourth-color)] w-full h-full flex flex-col items-center justify-center ${playwrite.className}`}>
      <h1 className="text-[var(--primary-color)] text-3xl font-bold px-6 py-2">
        Rince Mathew
      </h1>
      <h6 className="text-[var(--primary-color)] text-3xl font-bold px-6 py-2">
        Web Developer | Tech Enthusiast
      </h6>
    </div>
  )
}
