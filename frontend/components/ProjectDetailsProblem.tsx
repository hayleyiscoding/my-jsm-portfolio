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
    <section className=' max-w-5xl py-6 dark:px-4 bg-white dark:bg-custom-black rounded-2xl'>
      <div className='mx-auto ml-3'>
        <h5 className='text-custom-red mb-2 px-4'>Problem</h5>
        <h3 className='dark:text-white text-custom-black text-4xl px-4'>
          Problem Statement
        </h3>
        <p className='py-8 font-extralight max-w-4xl text-opacity-80 px-4'>
          {problemStatement}
        </p>
        <Image
          src={secondImage}
          alt='Image related to project'
          className='rounded-md px-4'
        />
      </div>
    </section>
  );
};

export default ProjectDetailsProblem;
