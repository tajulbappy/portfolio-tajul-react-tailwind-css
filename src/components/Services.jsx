import React from "react";
import { assets } from "../assets/assets";

const AppServices = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">What i offer</h4>
      <h2 className="text-center text-5xl font-Ovo">My services</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-8">
        As a MERN Stack Developer, I build end-to-end web applications with
        secure authentication, database design, and scalable architecture,
        continus optimization and proactive maintenance for startups and
        enterprises. Available for freelance projects and remote contracts.
      </p>
      <div className="grid grid-cols-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
        <div className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
          <img className="w-10" src={assets.webdev_icon} alt="webdev-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            MERN Stack Development
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Full-stack applications using MongoDB, Express, React and Node.js
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
          <img className="w-10" src={assets.api_icon} alt="optimizer-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Backend API Development
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Secure REST APIs with authentication (JWT), database integration,
            and scalability
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
          <img className="w-10" src={assets.optimizer_icon} alt="api-icon" />
          <h3 className="text-lg my-4 text-gray-700 dark:text-white">
            Database Design
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            MongoDB & PostgreSQL schema design, optimization, and performance
            tuning
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
            Deployment & Hosting
          </h3>
          <p className="text-sm text-gray-600 leading-5 dark:text-white">
            Deploy applications using Vercel, Netlify, Render, and VPS servers
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
