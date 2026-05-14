import React from "react";
import { assets } from "../assets/assets";

const myTechStack = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "REST API",
  "JWT Auth",
  "Tailwind CSS",
  "Bootstrap",
];

const AppHeader = () => {
  return (
    <div
      id="top"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 mt-20 md:mt-10 md:scroll-mt-20"
    >
      <img
        className="w-36 h-36 rounded-full"
        src={assets.profile_img_pp}
        alt="profile-img"
      />
      <h3 className="flex items-center gap-2 text-xl md:text-2xl font-Ovo">
        Hi! I'm Tajul Islam{" "}
        <img className="w-6" src={assets.hand_icon} alt="hand-icon" />
      </h3>
      <h1 className="text-3xl sm:text-4xl font-Ovo">
        MERN Stack Developer building scalable full-stack web applications
      </h1>

      <p className="max-w-2xl mx-auto font-Ovo leading-8">
        I develop high-performance full-stack applications using MongoDB,
        Express, React, and Node.js. I focus on building scalable, secure, and
        user-friendly solutions for real-world business needs.
      </p>

      {/* Tech Stack Badges */}
      <div className="flex flex-wrap justify-center gap-2 mt-2">
        {myTechStack.map((tech, index) => (
          <span
            key={index}
            className="text-sm px-3 py-1 bg-gray-200 dark:bg-darkTheme text-gray-800 dark:text-gray-200 rounded-full border border-gray-300 dark:border-gray-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* ---------- */}

      <div className="flex flex-col sm:flex-row gap-4 py-4">
        <a
          href="#contact"
          className="px-8 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me
          <img className="w-4" src={assets.arrow_right} alt="right-arrow" />
        </a>

        <a
          href={assets.resume}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3 border border-gray-500 rounded-full flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <img className="w-4" src={assets.download_icon} alt="right-arrow" />
        </a>
      </div>
    </div>
  );
};

export default AppHeader;
