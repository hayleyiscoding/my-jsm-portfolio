import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/constants";

const AiPromptShare = () => {
  const project = projects[2];
  return (
    <>
      <ProjectDetails
        phrase1={`AI Prompt - A Website for Sharing Useful `}
        phrase2={`AI Prompts`}
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

export default AiPromptShare;
