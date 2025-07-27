import React from "react";
import { medium, youtube, website } from "./images/blog-svg";

export default function Blog() {
  return (
    <div className="bg-[var(--secondary-color)] w-full h-full flex items-center justify-center gap-6 p-4">
      {/* Medium Icon */}
      <a
        href="https://medium.com/@rincemathew572/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 text-[var(--primary-color)]"
      >
        {medium}
      </a>

      {/* YouTube Icon */}
      <a
        href="https://www.youtube.com/@uneducatedcoder"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20 text-[var(--primary-color)]"
      >
        {youtube}
      </a>

      {/* website */}
      <a
        href="https://my-learning-blog-alpha.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-20 h-20"
      >
        {website}
        
      </a>
    </div>
  );
}
