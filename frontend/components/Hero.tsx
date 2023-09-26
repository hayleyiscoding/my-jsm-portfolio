import Link from "next/link";
import { AiOutlineCloudDownload } from "react-icons/ai";

import CopyButton from "./CopyButton";
import HeroImage from "./HeroImage";
import SectionHeader from "./SectionHeader";
import { heroInfo } from "@/constants";

const Hero = () => {
  return (
    <section id='hero' className='dark:bg-custom-black my-6 mt-8'>
      <div className='bg-custom-teal dark:bg-custom-black px-4 sm:px-6 lg:px-8 rounded-xl'>
        <div className='heroGrid'>
          <div className='lg-order-1 order-2 p-5'>
            <SectionHeader phrase1={`Hi! I'm Hayley.`} />

            <h3 className='jobTitle'>{heroInfo.job}</h3>
            <p className='heroAbout md:text-base'>{heroInfo.text}</p>
            <div className='md:flex mb-10 justify-between gap-4 bg-custom-teal rounded-xl mt-8'>
              <div className='bg-custom-teal p-2 rounded-xl flex-1'>
                <Link
                  href={heroInfo.resume}
                  target='_blank'
                  className='heroResumeButton'
                >
                  Download Resume
                  <AiOutlineCloudDownload size={20} className='ml-2' />
                </Link>
              </div>
              <div className='heroEmail'>
                {heroInfo.email}
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
