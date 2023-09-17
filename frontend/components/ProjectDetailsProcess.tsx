import Image from "next/image";

import { processIcons } from "@/constants";

const ProjectDetailsProcess = () => {
  return (
    <section className='w-full max-w-4xl py-4 px-4'>
      <div className='mb-4 py-6 ml-1'>
        <h5 className='text-custom-red mb-2'>Way of Work</h5>
        <h3 className='text-custom-black mb-4 text-4xl dark:text-white'>
          My Process
        </h3>
      </div>
      <div>
        <ul className='flex flex-wrap items-center justify-start gap-4 py-2 text-opacity-80'>
          {processIcons.map((item) => (
            <li
              key={item.id}
              className='dark:custom-neumorphic-process bg-white shadow-xl rounded-[100%] mx-auto mb-5 flex h-[150px] w-[150px] flex-col items-center justify-center p-4 hover:animate-ping'
            >
              <div className='bg-custom-red rounded-[100%] p-3'>
                <Image
                  src={item.icon}
                  alt={`${item} icon`}
                  width={70}
                  className='w-full max-w-[40px] brightness-100 contrast-200 grayscale'
                />
              </div>
              <p className='mt-3 flex items-center justify-center dark:text-white text-custom-black'>
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
