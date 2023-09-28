"use client";

import { useState } from "react";
import Link from "next/link";
import "animate.css";
import {
  AiOutlineCloseCircle,
  AiOutlineCloudDownload,
  AiOutlineMenu,
} from "react-icons/ai";

import { navLinks } from "@/constants";
import NavItem from "@/components/NavItem";
import NavItemMobile from "@/components/NavItemMobile";
import ModeToggle from "@/components/ModeToggle";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      {/* Main nav */}
      <nav className='container mx-auto lg:px-8'>
        <div className='navDesktop'>
          {/* Show only on mobile */}
          <button
            onClick={() => setShowSidebar((prevState) => !prevState)}
            type='button'
            className='buttonMobile'
          >
            <span className='sr-only'>Open sidebar</span>
            {!showSidebar ? (
              // Hamburger Icon
              <div className='flex items-center justify-center md:justify-start'>
                <AiOutlineMenu size={25} />
              </div>
            ) : (
              // Close Icon
              <div className='flex items-center justify-center'>
                <AiOutlineCloseCircle size={25} />
              </div>
            )}
          </button>
          {/* Top Nav - Mobile and Desktop */}
          <div className='flex-1'>
            <Link
              href='/'
              className='flex justify-start py-2 md:justify-end lg:mr-24 lg:justify-start'
            >
              <div className='logo'>H</div>
              <span className='logoName'>Hayley | React Developer</span>
            </Link>
          </div>
          <div className='flex'>
            {/* Show only on Desktop */}
            <ul className='hidden items-center justify-between gap-[10px] font-light lg:flex'>
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
                  className='resumeButtonDesktop'
                >
                  Resume
                  <AiOutlineCloudDownload size={20} className='ml-2' />
                </Link>
              </li>
            </ul>
            {/* Dark Mode Toggle */}
            <div className='mt-[2px] md:ml-4'>
              <ModeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Nav - drawer */}
      <nav
        className={`dark:bg-custom-black animate__animated animate__fadeInLeft bg-custom-teal fixed z-10 h-full w-screen ${
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
            className='resumeButtonMobile'
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
