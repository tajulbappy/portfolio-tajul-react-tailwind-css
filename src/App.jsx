import React, { useEffect, useState } from "react";
import { assets } from "./assets/assets";
import About from "./components/About";
import AppHeader from "./components/Header";
import AppServices from "./components/Services";
import AppWork from "./components/Work";
import AppContact from "./components/Contact";
import { ToastContainer } from "react-toastify";

const App = () => {
  const [visible, setVisible] = useState(false);
  const [scrollDown, setScrollDown] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger background change after 50px scroll
      setScrollDown(window.scrollY > 50);
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty array ensures effect is only run on mount and unmount

  return (
    <div
      className={`App dark:bg-darkTheme dark:text-white ${
        darkTheme ? "dark" : "light"
      }`}
    >
      {/* ---------Navigation Bar-------- */}
      <div className="overflow-hidden ">
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
          <img src={assets.header_bg_color} alt="header-bg-color" />
        </div>
        <nav
          className={`w-full fixed flex px-5 lg:px-8 xl:px-[8%] py-2 items-center justify-between z-50 ${
            scrollDown &&
            "bg-white dark:bg-darkTheme opacity-95 backdrop-blur-lg shadow-sm dark:shadow-white/5 duration-500"
          }`}
        >
          <a href="#top">
            <img
              className="w-20 cursor-pointer mr-14 rounded-full"
              src={assets.logo}
              alt="logo"
            />
          </a>
          <ul
            className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white dark:border dark:border-white/50 dark:bg-transparent font-Ovo ${
              scrollDown && "dark:border-none transition-all duration-500"
            } `}
          >
            <a href="#top">
              <li className="hover:bg-gray-100 py-1 px-2 border-none rounded-full dark:hover:bg-darkHover">
                Home
              </li>
            </a>
            <a href="#about">
              <li className="hover:bg-gray-100 p-1 px-2 border-none rounded-full dark:hover:bg-darkHover">
                About me
              </li>
            </a>
            <a href="#services">
              <li className="hover:bg-gray-100 p-1 px-2 border-none rounded-full dark:hover:bg-darkHover">
                Services
              </li>
            </a>
            <a href="#work">
              <li className="hover:bg-gray-100 p-1 px-2 border-none rounded-full dark:hover:bg-darkHover">
                My Work
              </li>
            </a>
            <a href="#contact">
              <li className="hover:bg-gray-100 p-1 px-2 border-none rounded-full dark:hover:bg-darkHover">
                Contact me
              </li>
            </a>
          </ul>

          <div className="flex items-center gap-4">
            <button className="cursor-pointer">
              <img
                onClick={() => {
                  setDarkTheme(true);
                }}
                className="w-6 dark:hidden"
                src={assets.moon_icon}
                alt="Toggle dark mode"
              />
              <img
                onClick={() => {
                  setDarkTheme(false);
                }}
                className="w-6 hidden dark:block"
                src={assets.sun_icon}
                alt="Toggle dark mode"
              />
            </button>

            <a
              href="#contact"
              className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50"
            >
              Contact
              <img
                className="w-3 dark:hidden"
                src={assets.arrow_icon}
                alt="arrow-icon"
              />
              <img
                className="w-3 hidden dark:block"
                src={assets.arrow_right_dark}
                alt="arrow-icon"
              />
            </a>

            <button
              onClick={() => {
                setVisible(true);
              }}
              className="block md:hidden ms-3"
            >
              <img
                className="w-6 cursor-pointer dark:hidden"
                src={assets.menu_icon}
                alt="menu-icon"
              />
              <img
                className="w-6 cursor-pointer hidden dark:block"
                src={assets.menu_white}
                alt="menu-white"
              />
            </button>
          </div>
          {/* ---------------Sidebar for small screen-------------- */}

          <ul
            className={`flex md:hidden flex-col gap-1 py-20 px-10 fixed right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkTheme  ${
              visible ? "translate-x-[254px]" : "translate-x-[584px]"
            }`}
          >
            <div
              onClick={() => {
                setVisible(false);
              }}
              className="absolute right-5 top-4"
            >
              <img
                className="w-5 cursor-pointer dark:hidden"
                src={assets.close_icon}
                alt="close-icon"
              />
              <img
                className="w-5 cursor-pointer hidden dark:block"
                src={assets.close_white}
                alt="close-icon"
              />
            </div>

            <a href="#top">
              <li
                className="hover:bg-rose-100 p-2 border-none rounded dark:hover:bg-darkHover"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Home
              </li>
            </a>
            <a href="#about">
              <li
                className="hover:bg-rose-100 p-2 border-none rounded dark:hover:bg-darkHover"
                onClick={() => {
                  setVisible(false);
                }}
              >
                About me
              </li>
            </a>
            <a href="#services">
              <li
                className="hover:bg-rose-100 p-2 border-none rounded dark:hover:bg-darkHover"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Services
              </li>
            </a>
            <a href="#work">
              <li
                className="hover:bg-rose-100 p-2 border-none rounded dark:hover:bg-darkHover"
                onClick={() => {
                  setVisible(false);
                }}
              >
                My Work
              </li>
            </a>
            <a href="#contact">
              <li
                className="hover:bg-rose-100 p-2 border-none rounded dark:hover:bg-darkHover"
                onClick={() => {
                  setVisible(false);
                }}
              >
                Contact me
              </li>
            </a>
          </ul>
        </nav>
      </div>

      {/* ---------Header Section-------- */}
      <AppHeader />

      {/* ---------About Section-------- */}
      <About />

      {/* ---------Services Section-------- */}
      <AppServices />

      {/* ---------Services Section-------- */}
      <AppWork />

      {/* ---------Contact Section-------- */}
      <AppContact />

      {/* ---------Footer Section-------- */}
      <div className="mt-20">
        <div className="text-center">
          <img
            className="w-24 mx-auto mb-2 rounded-full"
            src={assets.logo}
            alt="logo"
          />
          <div className="w-max flex items-center gap-2 mx-auto">
            <img
              className="w-6 dark:hidden"
              src={assets.mail_icon}
              alt="mail-icon"
            />
            <img
              className="w-6 hidden dark:block"
              src={assets.mail_icon_dark}
              alt="mail-icon_dark"
            />
            bappy042@gmail.com
          </div>
        </div>
        <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
          <p className="text-md">
            © 2025 Tajul Islam
            <span className="px-1 font-semibold">|</span>All rights reserved.
          </p>
          <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
            <li>
              <a href="https://github.com/tajulbappy" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/tajul-islam-85653534/"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://wa.me/+8801912394593" target="_blank">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
