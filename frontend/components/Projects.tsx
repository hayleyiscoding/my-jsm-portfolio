import Link from "next/link";

import SectionHeader from "./SectionHeader";
import { getProjects } from "@/sanity/lib/client";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

const Projects = async () => {
  const allProjects = await getProjects();

  return (
    <section id='projects' className='dark:bg-custom-black pb-10'>
      <div className='mx-auto mb-12 pt-16 md:px-24'>
        <section className='text-center text-white'>
          <SectionHeader phrase1={`Featured `} phrase2='Projects' />
          <div className='md:text-md mt-12 grid gap-x-6 gap-y-8 text-sm lg:grid-cols-3 lg:gap-x-12 p-8 custom-neumorphic-teal-pressed bg-custom-red '>
            {allProjects.map((project) => {
              const projectImageUrl = urlForImage(project.image)
                .width(250)
                .url();
              return (
                <div
                  key={project?.name}
                  className='custom-neumorphic-teal mb-1 block rounded-lg dark:border-white lg:mb-0'
                >
                  <div className='md:custom-zoom relative m-4 overflow-hidden rounded-[10px] bg-cover bg-no-repeat custom-neumorphic-teal'>
                    <Image
                      src={projectImageUrl}
                      alt={project?.image?.alt}
                      width={1000}
                      height={1000}
                      className='w-full rounded-t-lg text-white custom-neumorphic-teal'
                    />
                    <a href={`/case-studies/${project?.slug.current}`}>
                      <div className='absolute inset-0 h-full w-full overflow-hidden bg-fixed shadow-2xl transition duration-300 ease-in-out'></div>
                    </a>
                    {/* <svg
                      className='shadow-4xl absolute'
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 1440 320'
                      style={{ left: "-210", bottom: "-10" }}
                    >
                      <path
                        fill='white'
                        d='M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
                      ></path>
                    </svg> */}
                  </div>
                  <div className='p-6'>
                    <h5 className='border-b-white border-b-80% text-white mb-3 border-b pb-3 text-xl font-bold dark:text-white'>
                      {project?.name}&nbsp;
                      <span className='custom-superscript custom-text-shadow'>
                        {project?.superscript}
                      </span>
                    </h5>
                    <p className='text-md text-white mb-4 pb-2 font-extralight'>
                      {project?.type}
                    </p>
                    <div>
                      <Link
                        className='custom-neumorphic-teal hover:custom-neumorphic-teal-pressed mt-2 inline-flex cursor-pointer items-center justify-center rounded-xl p-3 px-5 text-sm font-light leading-5 text-white shadow-xl transition-all duration-200 focus:ring-black'
                        href={`/case-studies/${project?.slug.current}`}
                      >
                        Project Details
                        <svg
                          className='ml-2 h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          strokeWidth='2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13 7l5 5m0 0l-5 5m5-5H6'
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
