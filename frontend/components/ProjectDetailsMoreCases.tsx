import Image from "next/image";
import Link from "next/link";

import { getProjectDetails } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

interface ProjectDetailsMoreCasesProps {
  projectName: string;
}

const ProjectDetailsMoreCases: React.FC<ProjectDetailsMoreCasesProps> = async ({
  projectName,
}) => {
  const projects = await getProjectDetails();

  let filteredProjects = projects
    ?.filter((project) => project.name !== projectName)
    .slice(0, 2);

  return (
    <section id='moreCases' className='moreCasesContainer'>
      {/* Header */}
      <header className='mb-8'>
        <h5 className='text-gray-400 dark:text-custom-teal mb-3'>Projects</h5>
        <h3 className='text-white text-3xl lg:text-4xl'>Other Case Studies</h3>
      </header>

      {/* Two Cards */}
      <div className='mb-6'>
        <ul className='moreCasesList'>
          {filteredProjects.map((project) => (
            <li key={project._id} className='moreCasesListItem'>
              {/* Image */}
              <Image
                src={urlForImage(project.cardImage).width(500).url() || ""}
                alt='Thumbnail of project'
                className='mb-6 w-full rounded-md object-cover'
                width={500}
                height={500}
              />

              {/* Project Name */}
              <h5 className='moreCasesProjectName'>{project.name}</h5>

              {/* Project Description */}
              <div className='moreCasesProjectText'>
                <PortableText value={project.longDescription} />
              </div>

              {/* Button */}
              <Link
                href={`/case-studies/${project?.slug.current}`}
                className='moreCasesButton'
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
