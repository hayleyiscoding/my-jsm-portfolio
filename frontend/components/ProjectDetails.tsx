import Image from "next/image";

import ContactBlock from "@/components/ContactBlock";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsDates from "./ProjectDetailsDates";
import ProjectDetailsTech from "./ProjectDetailsTech";
import ProjectDetailsProblem from "./ProjectDetailsProblem";
import ProjectDetailsProcess from "./ProjectDetailsProcess";
import ProjectDetailsLearnings from "./ProjectDetailsLearnings";
import ProjectDetailsMoreCases from "./ProjectDetailsMoreCases";
import { ProjectDetails } from "@/sanity/types/ProjectDetails";
import { urlForImage } from "@/sanity/lib/image";

const ProjectDetails: React.FC<ProjectDetails> = ({
  phrase1,
  phrase2,
  phrase3,
  headerImage,
  url,
  github,
  myRole,
  startDate,
  endDate,
  techStack,
  longDescription,
  problemStatement,
  secondImage,
  figmaDesign,
  challenges,
  learnings,
  color,
}) => {
  const imageUrl = urlForImage(figmaDesign).width(8000).url() || "";
  return (
    <main
      id='projectDetails'
      className='max-w-9xl mx-auto flex flex-col items-center justify-between'
    >
      <ProjectDetailsHeader
        phrase1={phrase1}
        phrase2={phrase2}
        phrase3={phrase3}
        headerImage={headerImage}
        url={url}
        github={github}
      />
      <ProjectDetailsDates
        myRole={myRole}
        startDate={startDate}
        endDate={endDate}
      />
      <ProjectDetailsTech techStack={techStack} />

      <section className='text-white max-w-4xl px-4 py-5 font-extralight text-opacity-80 dark:text-white'>
        <hr />
        <p className='py-8'>{longDescription}</p>
        <hr />
      </section>

      <ProjectDetailsProblem
        problemStatement={problemStatement}
        secondImage={secondImage}
      />

      <section className='mb-12 w-full max-w-6xl rounded-xl'>
        <div
          className={`${color} mt-8 rounded-md px-2 py-4 text-center text-3xl font-bold text-white`}
        >
          <h3>High Fidelity Figma Design</h3>
        </div>
        <Image
          src={imageUrl}
          alt='Figma Design'
          className='-mt-1 h-[400px] rounded-sm object-cover'
          width={10000}
          height={400}
        />
      </section>

      <ProjectDetailsProcess />

      <ProjectDetailsLearnings challenges={challenges} learnings={learnings} />

      <ProjectDetailsMoreCases />

      <ContactBlock />
    </main>
  );
};

export default ProjectDetails;
