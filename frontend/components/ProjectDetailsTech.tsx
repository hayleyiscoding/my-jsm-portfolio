import Image from "next/image";
import { techUrlMap } from "@/constants";

const ProjectDetailsTech = ({ techStack }: { techStack: Array<string> }) => {
  return (
    <section className='dark:bg-custom-black bg-custom-red w-full max-w-4xl rounded-xlsx px-10 py-8 dark:px-4 dark:py-6'>
      <div className=' mb-4'>
        <h5 className='text-gray-400 dark:text-custom-red mb-2'>
          Technologies used
        </h5>
        <h3 className='text-3xl lg:text-4xl text-white'>Tech Stack</h3>
      </div>
      <div>
        <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
          {techStack.map((item) => (
            <li
              key={item}
              className='dark:custom-neumorphic-process dark:hover:custom-neumorphic-black-pressed custom-neumorphic-teal hover:custom-neumorphic-teal-pressed mx-auto flex h-[80px] w-[80px] cursor-pointer flex-col items-center justify-center rounded-[100%] bg-white p-3 shadow-2xl dark:border-none'
            >
              <Image
                src={techUrlMap[item]}
                alt={`${item} icon`}
                width={50}
                height={50}
                className='w-[50px] p-2 lg:w-[60px] dark:contrast-100 contrast-200'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsTech;
