import Image from "next/image";
import { Image as ImageType } from "sanity";

import { urlForImage } from "@/sanity/lib/image";

interface ProjectDetailsProblemProps {
  problemStatement: string;
  secondImage: ImageType;
}

const ProjectDetailsProblem: React.FC<ProjectDetailsProblemProps> = ({
  problemStatement,
  secondImage,
}) => {
  return (
    <section className='problemContainer'>
      <div className='mx-auto ml-3'>
        {/* Header */}
        <h5 className='text-gray-400 dark:text-custom-teal mb-2'>Problem</h5>
        <h3 className='text-white text-3xl lg:text-4xl'>Problem Statement</h3>

        {/* Statement */}
        <p className='py-8 font-extralight max-w-4xl text-white'>
          {problemStatement}
        </p>

        {/* Image */}
        <Image
          src={urlForImage(secondImage).width(1000).url()}
          alt='Image related to project'
          className='rounded-md grayscale'
          width={1000}
          height={800}
        />
      </div>
    </section>
  );
};

export default ProjectDetailsProblem;
