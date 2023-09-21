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
      <nav className='mx-8'>
        <div className='dark:custom-neumorphic-nav my-4 flex w-full items-center justify-between rounded-2xl bg-white px-4 py-2 md:px-6'>
          {/* Hamburger icon - show only on mobile */}
          <button
            onClick={() => setShowSidebar((prevState) => !prevState)}
            type='button'
            className='text-custom-black mr-2 block items-center rounded-xl py-1 text-sm dark:text-white lg:hidden '
          >
            <span className='sr-only'>Open sidebar</span>
            {!showSidebar ? (
              <div className='flex items-center justify-center md:justify-start'>
                <AiOutlineMenu size={20} />
              </div>
            ) : (
              // Close Icon
              <div className='flex items-center justify-center'>
                <AiOutlineCloseCircle size={20} />
              </div>
            )}
          </button>
          {/* Top Nav - Mobile and Desktop */}
          <div className='flex-1'>
            <Link href='/' className='flex py-2 lg:mr-24'>
              <div className='bg-custom-red mx-3 h-8 p-1 text-white md:ml-2'>
                H
              </div>
              <span className='lg:text-md text-custom-black self-center text-sm font-normal tracking-wide dark:font-bold dark:text-white'>
                Hayley | React Developer
              </span>
            </Link>
          </div>
          <div className='flex'>
            <ul className='hidden justify-between gap-[10px] font-light lg:flex'>
              {navLinks.map((navLink) => (
                <NavItem
                  key={navLink.id}
                  name={navLink.name}
                  url={navLink.url}
                />
              ))}
              <li>
                <Link
                  href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
                  target='_blank'
                  className='dark:text-custom-red text-custom-black hover:text-custom-red mt-[7px] flex cursor-pointer items-center justify-center rounded-xl px-3 py-1 pb-2 text-[15px] font-light leading-[4px] dark:font-medium dark:hover:text-white'
                >
                  Resume
                  <AiOutlineCloudDownload size={20} className='ml-2' />
                </Link>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <div className='md:ml-4'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav - drawer */}
      <nav
        className={`dark:bg-custom-black animate__animated animate__fadeInLeft fixed z-10 h-full w-screen bg-white ${
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
            className='text-custom-red flex cursor-pointer justify-center px-3 py-2 pb-4 text-[17px] font-medium hover:text-white dark:border-white'
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
