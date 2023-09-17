import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/constants";

const Jobit = () => {
  const project = projects[1];
  return (
    <>
      <ProjectDetails
        phrase1={`Jobit - A Modern `}
        phrase2={` Job Board`}
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

export default Jobit;
