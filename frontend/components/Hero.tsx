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

            <h3 className='jobTitle'>React Developer (Remote)</h3>
            <p className='heroAbout md:text-md'>
              I am an enthusiastic Front-End/Full-Stack Developer with a focus
              on React.js, Next 13 and Typescript. <br></br> <br></br> I also
              have experience web3 (blockchain) technologies - such as Solidity
              and Ether.js.
              <br></br> <br></br>I am based in Australia/Asia but I am flexible
              in terms of working hours and can adapt to your time zone needs.{" "}
              <br></br> <br></br> I am eager to contribute to your company goals
              and would love to connect with you!
            </p>
            <div>
              <Link
                href='https://drive.google.com/file/d/1wGvI9tu7ypPXCM3HD7Q6za1B-6-SRW2g/view?usp=sharing'
                target='_blank'
                className='heroResumeButton'
              >
                Download Resume
                <AiOutlineCloudDownload size={20} className='ml-2' />
              </Link>
              <div className='heroEmail'>
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
