import Image from "next/image";

import ContactBlock from "@/components/ContactBlock";
import ProjectDetailsHeader from "./ProjectDetailsHeader";
import ProjectDetailsDates from "./ProjectDetailsDates";
import ProjectDetailsTech from "./ProjectDetailsTech";
import ProjectDetailsProblem from "./ProjectDetailsProblem";
import ProjectDetailsProcess from "./ProjectDetailsProcess";
import ProjectDetailsLearnings from "./ProjectDetailsLearnings";
import ProjectDetailsMoreCases from "./ProjectDetailsMoreCases";

interface ProjectDetailsProps {
  phrase1: string;
  phrase2: string;
  phrase3: string;
  imageProjectDetails: string;
  url: string;
  github: string;
  myRole: string;
  startDate: string;
  endDate: string;
  techStack: Array<string>;
  longDescription: string;
  problemStatement: string;
  secondImage: string;
  figmaDesign: string;
  challenges: Array<string>;
  learnings: Array<string>;
  color: string;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  phrase1,
  phrase2,
  phrase3,
  imageProjectDetails,
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
  return (
    <main
      id='projectDetails'
      className='max-w-9xl mx-auto flex flex-col items-center justify-between'
    >
      <ProjectDetailsHeader
        phrase1={phrase1}
        phrase2={phrase2}
        phrase3={phrase3}
        imageProjectDetails={imageProjectDetails}
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
          src={figmaDesign}
          alt='Figma Design'
          className='-mt-1 h-[400px] rounded-sm object-cover'
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
