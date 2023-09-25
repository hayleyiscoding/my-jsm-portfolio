import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as ImageType } from "sanity";

interface ProjectDetailsProblemProps {
  problemStatement: string;
  secondImage: ImageType;
}

const ProjectDetailsProblem: React.FC<ProjectDetailsProblemProps> = ({
  problemStatement,
  secondImage,
}) => {
  return (
    <section className='max-w-4xl py-6 dark:px-1 dark:bg-custom-black rounded-2xl'>
      <div className='mx-auto ml-3'>
        <h5 className='text-gray-400 dark:text-custom-red mb-2'>Problem</h5>
        <h3 className='text-white text-3xl lg:text-4xl'>Problem Statement</h3>
        <p className='py-8 font-extralight max-w-4xl text-opacity-80 text-white'>
          {problemStatement}
        </p>
        <Image
          src={urlForImage(secondImage).width(8000).url()}
          alt='Image related to project'
          className='rounded-md grayscale'
          width={8000}
          height={800}
        />
      </div>
    </section>
  );
};

export default ProjectDetailsProblem;
