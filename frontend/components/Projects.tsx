import Link from "next/link";
import Image from "next/image";
import { BiSolidRightArrowAlt } from "react-icons/bi";

import SectionHeader from "./SectionHeader";
import { getProjects } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";

const Projects = async () => {
  const allProjects = await getProjects();

  return (
    <section id='projects' className='dark:bg-custom-black pb-10'>
      <div className='mx-auto mb-12 pt-16 md:px-24'>
        <div className='text-center text-white'>
          {/* Header */}
          <SectionHeader phrase1={`Featured `} phrase2='Projects' />

          {/* Projects */}
          <div className='projectsContainer'>
            {allProjects.map((project) => {
              const projectImageUrl = urlForImage(project.image)
                .width(1000)
                .url();
              return (
                <div key={project?.name} className='projectContainer'>
                  <div className='projectImageContainer'>
                    <Image
                      src={projectImageUrl}
                      alt={project?.image?.alt}
                      width={1000}
                      height={1000}
                      className='projectImage'
                    />
                    <Link href={`/case-studies/${project?.slug.current}`}>
                      <div className='projectImageLink'></div>
                    </Link>
                  </div>
                  <div className='p-6'>
                    {/* Title */}
                    <h5 className='projectTitle'>
                      {project?.name}&nbsp;
                      <span className='custom-superscript custom-text-shadow'>
                        {project?.superscript}
                      </span>
                    </h5>

                    {/* Type of Project */}
                    <p className='projectType'>{project?.type}</p>

                    {/* Button */}
                    <div>
                      <Link
                        className='projectButton'
                        href={`/case-studies/${project?.slug.current}`}
                      >
                        Project Details&nbsp;
                        <BiSolidRightArrowAlt size={20} />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
