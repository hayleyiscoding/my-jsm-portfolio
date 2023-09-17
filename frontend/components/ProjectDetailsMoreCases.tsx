import Image from "next/image";
import Link from "next/link";

import { projects } from "@/constants";

const ProjectDetailsMoreCases = () => {
  return (
    <section className='mt-16 max-w-4xl border-t-2 border-t-gray-400 dark:border-t-white px-6 pb-10 pt-20'>
      <div className='mb-8'>
        <h5 className='text-custom-red mb-3'>Projects</h5>
        <h3 className='text-custom-black text-4xl dark:text-white'>
          Other Case Studies
        </h3>
      </div>
      <div className='mb-6'>
        <ul className='flex flex-col flex-wrap items-center justify-center gap-3 md:flex-row md:gap-8'>
          {projects.slice(0, 2).map((project) => (
            <li
              key={project.id}
              className='text-md bg-white dark:custom-neumorphic-projects flex-1 p-12 font-extralight md:mb-8 rounded-xl'
            >
              <Image
                src={project.cardImage}
                alt='Thumbnail of project'
                className='mb-6 w-full rounded-md object-cover'
              />
              <h5 className='text-custom-red mb-2 text-xl font-bold'>
                {project.name}
              </h5>
              <p className='mb-2 line-clamp-3 w-full font-light leading-7'>
                {project.about}
              </p>
              <Link
                href='#'
                className='bg-custom-red my-5 block w-full cursor-pointer rounded-3xl py-3 text-center hover:opacity-70'
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
