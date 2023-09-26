import Image from "next/image";
import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";
import type { Image as ImageType } from "sanity";

import SectionHeader from "./SectionHeader";
import { urlForImage } from "@/sanity/lib/image";

interface ProjectDetailsHeaderProps {
  phrase1: string;
  phrase2: string;
  phrase3: string;
  headerImage: ImageType;
  url: string;
  github: string;
}

const ProjectDetailsHeader: React.FC<ProjectDetailsHeaderProps> = ({
  phrase1,
  phrase2,
  phrase3,
  headerImage,
  url,
  github,
}) => {
  const imageProjectDetailsUrl =
    headerImage && urlForImage(headerImage).width(8000).url();
  return (
    <header className='mt-8 md:mt-12'>
      {/* Header */}
      <div className='px-6 text-center'>
        <h5 className='projectDetailsWebDev'>web dev project</h5>
        <div>
          <SectionHeader
            phrase1={phrase1}
            phrase2={phrase2}
            phrase3={phrase3}
          />
        </div>
      </div>

      {/* Laptop Image */}
      <Image
        src={imageProjectDetailsUrl || ""}
        alt='Screenshot of project in the mockup of a laptop and cell phone'
        className='laptopImage'
        width={1000}
        height={800}
      />

      {/* Buttons */}
      <div className='text-center m-12'>
        {/* Demo Button */}
        <Link href={url} target='_blank' className='demoButton'>
          <span className='mr-2'>
            <BiWorld size={20} />
          </span>
          Demo Site
          <span className='ml-1'>
            <AiOutlineArrowRight size={20} />
          </span>
        </Link>
        {/* Source Button */}
        <Link href={github} target='_blank' className='sourceButton'>
          <span className='mr-2'>
            <AiFillGithub size={20} />
          </span>
          Source Code
          <span className='ml-1'>
            <AiOutlineArrowRight size={20} />
          </span>
        </Link>
      </div>
    </header>
  );
};

export default ProjectDetailsHeader;
