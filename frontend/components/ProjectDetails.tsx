import Image from "next/image";

import {
  ContactBlock,
  ProjectDetailsHeader,
  ProjectDetailsDates,
  ProjectDetailsTech,
  ProjectDetailsProblem,
  ProjectDetailsProcess,
  ProjectDetailsLearnings,
  ProjectDetailsMoreCases,
} from "../components/index";
import { ProjectDetails } from "@/sanity/types/ProjectDetails";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

const ProjectDetails: React.FC<ProjectDetails> = ({
  name,
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
  const figmaColor = color;

  return (
    <main id='projectDetails' className='projectDetailsContainer'>
      {/* Header */}
      <ProjectDetailsHeader
        phrase1={phrase1}
        phrase2={phrase2}
        phrase3={phrase3}
        headerImage={headerImage}
        url={url}
        github={github}
      />

      {/* Role and Dates */}
      <ProjectDetailsDates
        myRole={myRole}
        startDate={startDate}
        endDate={endDate}
      />

      {/* Tech Stack */}
      <ProjectDetailsTech techStack={techStack} />

      {/* Description */}
      <section className='projectDescription'>
        <hr />
        <div className='py-8 space-y-4'>
          <PortableText value={longDescription} />
        </div>
        <hr />
      </section>

      {/* Problem Statement */}
      <ProjectDetailsProblem
        problemStatement={problemStatement}
        secondImage={secondImage}
      />

      {/* Figma Design */}
      <section className='mb-12 max-w-6xl rounded-xl'>
        <div className={`${figmaColor} projectFigma`}>
          <h3>High Fidelity Figma Design</h3>
        </div>
        <Image
          src={imageUrl}
          alt='Figma Design'
          className='-mt-1 rounded-sm object-cover'
          width={10000}
          height={400}
        />
      </section>

      {/* Process */}
      <ProjectDetailsProcess />

      {/* Challenges and Learnings */}
      <ProjectDetailsLearnings challenges={challenges} learnings={learnings} />

      {/* More Case Studies */}
      <ProjectDetailsMoreCases projectName={name} />

      {/* Contact Block */}
      <ContactBlock />
    </main>
  );
};

export default ProjectDetails;
