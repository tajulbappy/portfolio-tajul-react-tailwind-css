import React from "react";
import { assets } from "../assets/assets";

const AppServices = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-8">
        As a Front-End React Developer I specialize in crafting fast, scalable
        and secure web applications with seamless API integrations, continuous
        optimization and proactive maintenance for startups and enterprises.
      </p>
      <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
          <img className="w-10" src={assets.webdev_icon} alt="webdev-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Frontend Development
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Responsive websites using React, Tailwind, Bootstrap
          </p>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            High-conversion landing pages with modern UI/UX
          </p>
          <a
            className="flex items-center gap-2 text-sm mt-5 dark:text-white"
            href=""
          >
            Read more
            <img
              className="w-4 dark:hidden"
              src={assets.arrow_right_normal}
              alt="right-arrow"
            />
            <img
              className="w-4 hidden dark:block"
              src={assets.arrow_right_white}
              alt="right-arrow-white"
            />
          </a>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
          <img
            className="w-10"
            src={assets.optimizer_icon}
            alt="optimizer-icon"
          />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Website Optimization
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Speed, SEO basics and accessibility improvements
          </p>
          <a
            className="flex items-center gap-2 text-sm mt-5 dark:text-white"
            href=""
          >
            Read more
            <img
              className="w-4 dark:hidden"
              src={assets.arrow_right_normal}
              alt="right-arrow"
            />
            <img
              className="w-4 hidden dark:block"
              src={assets.arrow_right_white}
              alt="right-arrow-white"
            />
          </a>
        </div>
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
          <img className="w-10" src={assets.api_icon} alt="api-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            REST API Integration
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Fetch and display dynamic data using Axios or Fetch API
          </p>
          <a
            className="flex items-center gap-2 text-sm mt-5 dark:text-white"
            href=""
          >
            Read more
            <img
              className="w-4 dark:hidden"
              src={assets.arrow_right_normal}
              alt="right-arrow"
            />
            <img
              className="w-4 hidden dark:block"
              src={assets.arrow_right_white}
              alt="right-arrow-white"
            />
          </a>
        </div>

        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
          <img className="w-10" src={assets.bug_icon} alt="bug-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Web Maintenance & Bug Fixing
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Fix layout, responsiveness, or JavaScript bugs
          </p>
          <a
            className="flex items-center gap-2 text-sm mt-5 dark:text-white"
            href=""
          >
            Read more
            <img
              className="w-4 dark:hidden"
              src={assets.arrow_right_normal}
              alt="right-arrow"
            />
            <img
              className="w-4 hidden dark:block"
              src={assets.arrow_right_white}
              alt="right-arrow-white"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppServices;
