import Image from "next/image";
import Link from "next/link";

import SectionHeader from "./SectionHeader";
import { AiFillGithub } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

interface ProjectDetailsHeaderProps {
  phrase1: string;
  phrase2: string;
  phrase3: string;
  imageProjectDetails: string;
  url: string;
  github: string;
}

const ProjectDetailsHeader: React.FC<ProjectDetailsHeaderProps> = ({
  phrase1,
  phrase2,
  phrase3,
  imageProjectDetails,
  url,
  github,
}) => {
  return (
    <header className='mt-8 md:mt-12'>
      <div className='px-6 text-center'>
        <h5 className='uppercase tracking-[0.5em] font-bold dark:text-custom-red text-black mx-auto text-md my-2'>
          web dev project
        </h5>
        <div>
          <SectionHeader
            phrase1={phrase1}
            phrase2={phrase2}
            phrase3={phrase3}
          />
        </div>
      </div>
      <Image
        src={imageProjectDetails}
        alt='Screenshot of project in the mockup of a laptop and cell phone'
        className='object-cover max-w-[400px] md:max-w-[700px] px-6 mx-auto mt-8'
      />
      <div className='text-center m-12'>
        <Link
          href={url}
          target='_blank'
          className='mb-2 pb-2 text-white cursor-pointer inline-flex items-center justify-center px-8 py-1 mt-1 text-xl font-medium leading-5 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:hover:text-white dark:text-white dark:highlights hover:underline underline-offset-4 dark:hover:no-underline'
        >
          <div className='mr-2'>
            <BiWorld size={20} />
          </div>
          Demo Site
          <svg
            className='w-6 h-6 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 7l5 5m0 0l-5 5m5-5H6'
            />
          </svg>
        </Link>
        <Link
          href={github}
          target='_blank'
          className='mb-2 pb-2 cursor-pointer inline-flex items-center justify-center px-1 py-1 mt-1 ml-0 md:ml-7 text-xl font-medium leading-5 transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:hover:text-white dark:text-white dark:highlights text-white hover:underline underline-offset-4 dark:hover:no-underline'
        >
          <div className='mr-2'>
            <AiFillGithub size={20} />
          </div>
          Source Code
          <svg
            className='w-6 h-6 ml-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth='2'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M13 7l5 5m0 0l-5 5m5-5H6'
            />
          </svg>
        </Link>
      </div>
    </header>
  );
};

export default ProjectDetailsHeader;
