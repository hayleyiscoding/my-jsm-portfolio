import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CopyButton from "./CopyButton";
import HeroImage from "./HeroImage";
import SectionHeader from "./SectionHeader";

const Hero = () => {
  return (
    <section id='hero' className='dark:bg-custom-black my-6 mt-8'>
      <div className='bg-custom-red dark:bg-custom-black px-4 sm:px-6 lg:px-8 rounded-xl'>
        <div className='ml-2 grid grid-cols-1 place-items-center items-center lg:ml-12 lg:grid-cols-2'>
          <div className='lg-order-1 order-2 p-5'>
            <SectionHeader phrase1={`Hi! I'm Hayley.`} />

            <h3 className='text-white dark:text-custom-red mt-6 text-xl font-medium text-opacity-90 dark:font-normal md:text-2xl lg:-mt-16'>
              React Developer (Remote)
            </h3>
            <p className='text-md md:text-md text-white mx-auto mt-3 max-w-2xl font-light leading-relaxed  dark:font-extralight dark:text-white md:mt-8'>
              I am an enthusiastic Front-End/Full-Stack Developer with a focus
              on React.js, Next.js and Typescript. <br></br> <br></br> I am
              based in Australia/Asia but I am flexible in terms of working
              hours and can adapt to your time zone needs. <br></br> <br></br>{" "}
              This portfolio displays a collection of my projects - both web2
              and web3. I am eager to contribute to your company goals and would
              love to connect with you!
            </p>
            <div>
              <Link
                href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
                target='_blank'
                className='custom-neumorphic-teal dark:custom-neumorphic-process hover:custom-neumorphic-teal-pressed dark:hover:custom-neumorphic-black-pressed text-md mt-8 flex cursor-pointer items-center justify-center rounded-lg px-6 py-[18px] font-bold leading-5 text-white dark:text-custom-red transition-all duration-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2  dark:border-custom-red lg:w-auto bg-black'
              >
                Download Resume
                <AiOutlineCloudDownload size={20} className='ml-2' />
              </Link>
              <div className='text-white text-md mb-10 ml-0 mt-5 flex w-full cursor-pointer items-center justify-center rounded-lg bg-custom-red px-6 py-[18px] font-medium leading-5 transition-all duration-200 dark:border-white custom-neumorphic-teal-pressed dark:text-white lg:w-auto'>
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
