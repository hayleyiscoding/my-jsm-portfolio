import ProjectDetails from "@/components/ProjectDetails";
import { getProjectDetails } from "@/sanity/lib/client";

const AiPromptShare = async () => {
  const projects = await getProjectDetails();
  const project = projects.find((item) => item.name === "AI Prompt");

  return (
    <>
      <ProjectDetails
        phrase1={project?.phrase1}
        phrase2={project?.phrase2}
        headerImage={project?.headerImage}
        url={project?.url}
        github={project?.github}
        myRole={project?.myRole}
        startDate={project?.startDate}
        endDate={project?.endDate}
        techStack={project?.techStack}
        longDescription={project?.longDescription}
        problemStatement={project?.problemStatement}
        secondImage={project?.secondImage}
        figmaDesign={project?.figmaDesign}
        challenges={project?.challenges}
        learnings={project?.learnings}
        color={project?.color}
      />
    </>
  );
};

export default AiPromptShare;
