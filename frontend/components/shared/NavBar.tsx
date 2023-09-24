"use client";

import { useState } from "react";
import Link from "next/link";
import "animate.css";

import { navLinks } from "@/constants";
import {
  AiOutlineCloseCircle,
  AiOutlineCloudDownload,
  AiOutlineMenu,
} from "react-icons/ai";
import NavItem from "@/components/NavItem";
import NavItemMobile from "@/components/NavItemMobile";
import { ModeToggle } from "@/components/ModeToggle";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      {/* Main nav */}
      <nav className='mx-8 lg:px-1'>
        <div className='dark:custom-neumorphic-process my-6 flex w-full items-center justify-between rounded-3xl custom-neumorphic-teal px-4 py-2 md:px-6'>
          {/* Hamburger icon - show only on mobile */}
          <button
            onClick={() => setShowSidebar((prevState) => !prevState)}
            type='button'
            className='text-white block items-center rounded-xl py-1 text-sm dark:text-white lg:hidden'
          >
            <span className='sr-only'>Open sidebar</span>
            {!showSidebar ? (
              <div className='flex items-center justify-center md:justify-start'>
                <AiOutlineMenu size={30} />
              </div>
            ) : (
              // Close Icon
              <div className='flex items-center justify-center'>
                <AiOutlineCloseCircle size={30} />
              </div>
            )}
          </button>
          {/* Top Nav - Mobile and Desktop */}
          <div className='flex-1'>
            <Link href='/' className='flex py-2 lg:mr-24'>
              <div className='dark:bg-custom-red bg-white mx-3 h-8 p-1 dark:text-white text-custom-red md:ml-2'>
                H
              </div>
              <span className='text-white dark:text-custom-red self-center text-sm font-medium tracking-wide dark:font-medium lg:text-lg'>
                Hayley | React Developer
              </span>
            </Link>
          </div>
          <div className='flex'>
            <ul className='hidden justify-between items-center gap-[10px] font-light lg:flex'>
              {navLinks.map((navLink) => (
                <NavItem
                  key={navLink.id}
                  name={navLink.name}
                  url={navLink.url}
                />
              ))}
              <li className='ml-2'>
                <Link
                  href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
                  target='_blank'
                  className='dark:text-custom-red text-white hover:text-white flex cursor-pointer items-center justify-center rounded-xl px-5 py-3 text-[15px] font-light leading-[4px] dark:font-medium dark:hover:text-white border border-white hover:custom-neumorphic-teal-pressed dark:hover:border-custom-red dark:hover:bg-custom-red'
                >
                  Resume
                  <AiOutlineCloudDownload size={20} className='ml-2' />
                </Link>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <div className='md:ml-4 mt-[2px]'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav - drawer */}
      <nav
        className={`dark:bg-custom-black animate__animated animate__fadeInLeft fixed z-10 h-full w-screen bg-custom-red ${
          showSidebar ? "visible lg:hidden" : "hidden"
        }`}
      >
        <ul className='mt-20 flex flex-col space-y-12 pt-20 font-light'>
          {navLinks.map((navLink) => (
            <NavItemMobile
              key={navLink.id}
              name={navLink.name}
              url={navLink.url}
              setShowSidebar={setShowSidebar}
            />
          ))}
          <Link
            href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
            target='_blank'
            className='flex cursor-pointer justify-center px-3 py-2 pb-4 text-[17px] font-medium hover:underline dark:border-white text-white dark:text-custom-red'
          >
            Resume
            <AiOutlineCloudDownload size={25} className='ml-2' />
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
