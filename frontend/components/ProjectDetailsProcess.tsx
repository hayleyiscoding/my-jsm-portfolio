import Image from "next/image";

import { processIcons } from "@/constants";

const ProjectDetailsProcess = () => {
  return (
    <section className='w-full max-w-4xl p-4'>
      <div className='mb-4 ml-1 py-6'>
        <h5 className='text-gray-400 dark:text-custom-red mb-2'>Way of Work</h5>
        <h3 className='mb-4 text-3xl lg:text-4xl text-white'>My Process</h3>
      </div>
      <div>
        <ul className='flex flex-wrap items-center justify-start gap-4 py-2 text-opacity-80'>
          {processIcons.map((item) => (
            <li
              key={item.id}
              className='dark:custom-neumorphic-process dark:hover:custom-neumorphic-black-pressed mx-auto mb-5 flex h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] flex-col items-center justify-center rounded-[100%] custom-neumorphic-teal hover:custom-neumorphic-teal-pressed p-8 lg:p-4 shadow-xl'
            >
              <div className='bg-custom-red rounded-[100%] p-3'>
                <Image
                  src={item.icon}
                  alt={`${item} icon`}
                  className='w-[20px] lg:w-[40px] brightness-100 contrast-200 grayscale'
                />
              </div>
              <p className='text-white mt-3 flex items-center justify-center dark:text-white text-xs'>
                {item.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsProcess;
