import Image from "next/image";
import Link from "next/link";

import { projects } from "@/constants";

const ProjectDetailsMoreCases = () => {
  return (
    <section className='mt-16 max-w-4xl border-t-2 border-t-gray-400 px-6 pb-10 pt-20 dark:border-t-white'>
      <div className='mb-8'>
        <h5 className='text-gray-400 dark:text-custom-red mb-3'>Projects</h5>
        <h3 className='text-white text-3xl lg:text-4xl'>Other Case Studies</h3>
      </div>
      <div className='mb-6'>
        <ul className='flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row md:gap-8'>
          {projects.slice(0, 2).map((project) => (
            <li
              key={project.id}
              className='text-md dark:custom-neumorphic-process custom-neumorphic-teal flex-1 rounded-xl bg-white p-12 font-extralight mb-8'
            >
              <Image
                src={project.cardImage}
                alt='Thumbnail of project'
                className='mb-6 w-full rounded-md object-cover'
                width={500}
                height={500}
              />
              <h5 className='text-white dark:text-custom-red mb-2 text-xl font-bold'>
                {project.name}
              </h5>
              <p className='mb-2 line-clamp-3 w-full font-light leading-7 text-white'>
                {project.about}
              </p>
              <Link
                href='#'
                className='dark:custom-neumorphic-process dark:hover:custom-neumorphic-black-pressed custom-neumorphic-teal hover:custom-neumorphic-teal-pressed my-5 block w-full cursor-pointer rounded-3xl py-3 text-center text-white dark:text-custom-red hover:opacity-70 font-semibold'
              >
                See Case Study
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsMoreCases;
