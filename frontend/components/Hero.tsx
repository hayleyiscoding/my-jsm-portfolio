import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

import CopyButton from "./CopyButton";
import HeroImage from "./HeroImage";
import SectionHeader from "./SectionHeader";

const Hero = () => {
  return (
    <section
      id='hero'
      className='dark:bg-custom-black my-8 rounded-2xl bg-white py-8 dark:p-0'
    >
      <div className='px-4 sm:px-6 lg:px-8'>
        <div className='ml-2 grid grid-cols-1 place-items-center items-center lg:ml-12 lg:grid-cols-2'>
          <div className='lg-order-1 order-2 p-5 pt-10'>
            <SectionHeader phrase2={`Hi! I'm Hayley!`} />
            <h3 className='text-custom-black mt-6 text-xl font-medium text-opacity-90 dark:font-normal dark:text-white md:text-2xl lg:-mt-16'>
              React.js Developer (Remote)
            </h3>
            <h5 className='text-custom-red flex py-1 text-xs font-bold text-opacity-90 md:font-normal'>
              <HiLocationMarker size={16} className='mr-1' />
              South African based in Australia/Asia
            </h5>

            <p className='text-md md:text-md text-custom-black mx-auto mt-3 max-w-2xl font-light leading-relaxed text-opacity-70 dark:font-extralight dark:text-white md:mt-8'>
              I am an enthusiastic React developer who would love to help you to
              achieve your company goals. I am flexible in terms of working
              asyncronously and can adapt to your time zone needs. <br></br>{" "}
              <br></br> This portfolio displays a collection of my projects that
              I had a lot of fun creating. I am eager to contribute to your
              upcoming project and would love to connect with you!
            </p>
            <div>
              <Link
                href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
                target='_blank'
                className='bg-custom-red border-custom-black mt-12 flex cursor-pointer items-center justify-center rounded-lg border px-6 py-[14px] text-sm font-medium leading-5 text-white transition-all duration-200 hover:text-white hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:border-white dark:hover:bg-black lg:w-auto'
              >
                Download Resume
                <AiOutlineCloudDownload size={20} className='ml-2' />
              </Link>
              <div className='border-custom-red text-custom-black ml-0 mt-4 flex w-full cursor-pointer items-center justify-center rounded-lg border px-6 py-[15px] text-sm font-medium leading-5 transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 dark:border-white dark:text-white lg:w-auto'>
                hayleyiscoding@gmail.com
                <CopyButton text='hayleyiscoding@gmail.com' />
              </div>
            </div>
          </div>
          <HeroImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
