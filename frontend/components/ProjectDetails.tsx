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
}) => {
  return (
    <main className='max-w-9xl mx-auto flex-col items-center justify-between flex'>
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

      <section className='dark:text-white text-custom-black font-extralight max-w-4xl py-5 text-opacity-80 px-4'>
        <hr />
        <p className='py-8'>{longDescription}</p>
        <hr />
      </section>

      <ProjectDetailsProblem
        problemStatement={problemStatement}
        secondImage={secondImage}
      />

      <section className='max-w-6xl w-full mb-12 rounded-xl'>
        <div className='bg-blue-500 text-center text-3xl font-bold text-white py-4 px-2 mt-8 rounded-md'>
          <h3>High Fidelity Figma Design</h3>
        </div>
        <Image
          src={figmaDesign}
          alt='Figma Design'
          className='h-[400px] object-cover -mt-1 rounded-sm'
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
