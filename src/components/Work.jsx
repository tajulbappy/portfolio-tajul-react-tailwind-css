import React from "react";
import { assets } from "../assets/assets";

const AppWork = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo leading-8">
        {" "}
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in building modern web applications and
        solving complex problems.
      </p>
      <div className="grid grid-cols-auto sm:grid-cols-3 my-10 gap-6 dark:text-black">
        <div
          className=" aspect-square bg-no-repeat bg-cover bg-center  border rounded-lg relative group"
          style={{ backgroundImage: `url(${assets.work_1})` }}
        >
          <a href="https://forever-fashion.netlify.app/" target="_blank">
            <div className="bg-gray-200 w-12/13 rounded-md absolute bottom-2 left-1/2 -translate-x-1/2 duration-500 p-2 px-3 flex items-center justify-between group-hover:bottom-5">
              <div>
                <h2 className="font-semibold">E-commerce platform</h2>
                <p className="text-xs text-gray-700">
                  React JS, Tailwind CSS, API Integration
                </p>
              </div>
              <div className="text-center text-xs text-blue-700 border rounded-full border-black w-1/5 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-orange-400 transition">
                Live Demo
              </div>
            </div>
          </a>
        </div>
        <div
          className=" aspect-square bg-no-repeat bg-cover bg-center  border rounded-lg relative group"
          style={{ backgroundImage: `url(${assets.work_2})` }}
        >
          <a href="https://educational-website25.netlify.app/" target="_blank">
            <div className="bg-gray-200 w-12/13 rounded-md absolute bottom-2 left-1/2 -translate-x-1/2 duration-500 p-2 px-3 flex items-center justify-between group-hover:bottom-5">
              <div>
                <h2 className="font-semibold">Educational website</h2>
                <p className="text-xs text-gray-700">
                  React JS, Bootstrap, Routing
                </p>
              </div>
              <div className="text-center text-xs text-blue-700 border rounded-full border-black w-1/5 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-orange-400 transition">
                Live Demo
              </div>
            </div>
          </a>
        </div>
        <div
          className=" aspect-square bg-no-repeat bg-cover bg-center  border rounded-lg relative group"
          style={{ backgroundImage: `url(${assets.work_3})` }}
        >
          <a href="https://innovativesolutions-bd.com/" target="_blank">
            <div className="bg-gray-200 w-12/13 rounded-md absolute bottom-2 left-1/2 -translate-x-1/2 duration-500 p-2 px-3 flex items-center justify-between group-hover:bottom-5">
              <div>
                <h2 className="font-semibold">IT Business Website</h2>
                <p className="text-xs text-gray-700">
                  React Hooks, Context API, State management
                </p>
              </div>
              <div className="text-center text-xs text-blue-700 border rounded-full border-black w-1/5 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-orange-400 transition">
                Live Demo
              </div>
            </div>
          </a>
        </div>
      </div>

      <a
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-[#fcf4ff] duration-500
        dark:text-white dark:border-white dark:hover:bg-darkHover "
        href="https://github.com/tajulbappy?tab=repositories"
        target="_blank"
      >
        Show more
        <img
          className="w-4 dark:hidden"
          src={assets.arrow_right_bold}
          alt="arrow-icon"
        />
        <img
          className="w-4 hidden dark:block"
          src={assets.arrow_right_bold_dark}
          alt="arrow-right-bold-icon"
        />
      </a>
    </div>
  );
};

export default AppWork;
