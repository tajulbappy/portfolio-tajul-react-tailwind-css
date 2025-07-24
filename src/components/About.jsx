import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10  scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>

      <div
        className="flex w-full flex-col
       lg:flex-row items-center gap-20 pt-10"
      >
        <div className="max-w-max mx-auto relative">
          <img
            className="w-64 sm:w-80 rounded-3xl max-w-none"
            src={assets.profile_img_full}
            alt="user-img"
          />

          <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
            <img
              className="w-full animate-spin_slow"
              src={assets.circular_text}
              alt="circular-text"
            />
            <img
              className="w-3/5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
              src={assets.dev_icon}
              alt="circular-text"
            />
          </div>
        </div>
        <div className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo leading-8">
            I am an experienced Frontend Developer with over two years of
            professional expertise in the field. Throughout my career, I have
            had the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img
                className="w-7 mt-3 dark:hidden"
                src={assets.code_icon}
                alt="code-icon"
              />
              <img
                className="w-7 mt-3 hidden dark:block"
                src={assets.code_dark_icon}
                alt="code-icon-dark"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Languages
              </h3>
              <p className="text-gray-600 text-sm dark:text-white leading-6">
                HTML, CSS, JavaScript (ES6+), React Js, TypeScript, Tailwind
                CSS, Bootstrap, Sass.
              </p>
            </li>
            <li
              className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black
            dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50
            "
            >
              <img
                className="w-7 mt-3 dark:hidden"
                src={assets.project_icon}
                alt="project-icon"
              />
              <img
                className="w-7 mt-3 hidden dark:block"
                src={assets.project_dark_icon}
                alt="project-icon-dark"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Projects
              </h3>
              <p className="text-gray-600 text-sm dark:text-white leading-6>BSC in Computer Science & Engineering at Daffodil International University">
                Build more than 7 projects on E-commerce,User management app,
                Portfolio/Corporate, Landing pages, Educational website etc.
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
              <img
                className="w-7 mt-3 dark:hidden"
                src={assets.edu_icon}
                alt="edu-icon"
              />
              <img
                className="w-7 mt-3 hidden dark:block"
                src={assets.edu_dark_icon}
                alt="edu-icon-dark"
              />
              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Education
              </h3>
              <p className="text-gray-600 text-sm dark:text-white leading-6">
                B.Sc. in Computer Science & Engineering at Daffodil
                International University
              </p>
            </li>
          </ul>
          <h4 className="my-5 text-gray-700 font-Ovo dark:text-white">
            Tools i use
          </h4>
          <ul className="flex items-center gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img className="w-5 sm:w-7" src={assets.vscode} alt="vscode" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img className="w-5 sm:w-7" src={assets.vite} alt="vite" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img
                className="w-5 sm:w-7"
                src={assets.prettier}
                alt="prettier"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img className="w-5 sm:w-7" src={assets.eslint} alt="eslint" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img className="w-5 sm:w-7" src={assets.git} alt="git" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
