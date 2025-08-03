import React from "react";
import { medium, youtube, website } from "./images/blog-svg";

export default function Blog() {
  return (
    <div className="bg-[var(--secondary-color)] w-full h-full flex flex-col items-center justify-center gap-6 p-4">
      {/* Blog Title */}
      <h1 className="text-[var(--primary-color)] text-3xl font-bold border-2 border-[var(--primary-color)] px-6 py-2 rounded-xl">
        Blog
      </h1>

      {/* Icons Row */}
      <div className="flex items-center justify-center gap-6 mt-4">
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

        {/* Website Icon */}
        <a
          href="https://my-learning-blog-alpha.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-20 h-20 text-[var(--primary-color)]"
        >
          {website}
        </a>
      </div>
    </div>
  );
}
