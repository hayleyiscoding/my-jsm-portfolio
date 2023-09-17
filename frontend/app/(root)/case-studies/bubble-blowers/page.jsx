import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/constants";

const BubbleBlowers = () => {
  const project = projects[4];

  return (
    <>
      <ProjectDetails
        header={project.title}
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

export default BubbleBlowers;
