"use client";
import { useTheme } from 'next-themes'

import React from "react";
import Image from "next/image";

export default function Themes() {
  const { theme, setTheme } = useTheme()
  const handleClick = (index) => {
    // console.log(`Clicked on image ${index + 1}`);
    setTheme(`theme-${index + 1}`); // Set the theme based on the clicked image index
    // You can also store the theme in localStorage or cookies if needed
    
  };

  return (
    <div className="grid grid-cols-6 md:grid-cols-3 w-full h-full gap-2 p-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          onClick={() => handleClick(i)}
          className="w-full h-full cursor-pointer transition-transform hover:scale-105 flex items-center justify-center"
        >
          <Image
            src={`/themes/Color-Hunt-Palette-${(i % 6) + 1}.png`}
            alt={`Palette ${i + 1}`}
            width={0}
            height={0}
            // sizes="100vw"
            className="w-auto h-full object-contain"
          />
        </div>
      ))}
    </div>
  );
}
