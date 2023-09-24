import Image from "next/image";

interface ProjectDetailsProblemProps {
  problemStatement: string;
  secondImage: string;
}

const ProjectDetailsProblem: React.FC<ProjectDetailsProblemProps> = ({
  problemStatement,
  secondImage,
}) => {
  return (
    <section className='max-w-5xl py-6 dark:px-4 dark:bg-custom-black rounded-2xl'>
      <div className='mx-auto ml-3'>
        <h5 className='text-gray-400 dark:text-custom-red mb-2'>Problem</h5>
        <h3 className='text-white text-3xl lg:text-4xl'>Problem Statement</h3>
        <p className='py-8 font-extralight max-w-4xl text-opacity-80 text-white'>
          {problemStatement}
        </p>
        <Image
          src={secondImage}
          alt='Image related to project'
          className='rounded-md'
        />
      </div>
    </section>
  );
};

export default ProjectDetailsProblem;
