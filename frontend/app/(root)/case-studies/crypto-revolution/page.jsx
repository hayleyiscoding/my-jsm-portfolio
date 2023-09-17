import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/constants";

const CryptoRevolution = () => {
  const project = projects[3];
  return (
    <>
      <ProjectDetails
        phrase1={`Crypto Rev - A `}
        phrase2={`Crypto Crowdfunding`}
        phrase3={` Website`}
        imageProjectDetails={project.imageProjectDetails}
        url={project.url}
        github={project.github}
        myRole={project.myRole}
        startDate={project.startDate}
        endDate={project.endDate}
        techStack={project.techStack}
        longDescription={project.longDescription}
        problemStatement={project.problemStatement}
        secondImage={project.secondImage}
        figmaDesign={project.figmaDesign}
        challenges={project.challenges}
        learnings={project.learnings}
      />
    </>
  );
};

export default CryptoRevolution;
