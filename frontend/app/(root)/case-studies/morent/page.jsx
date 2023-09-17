import ProjectDetails from "@/components/ProjectDetails";
import { projects } from "@/constants";

const Morent = () => {
  const morent = projects[0];
  return (
    <>
      <ProjectDetails
        phrase1={`Morent - A Modern `}
        phrase2={`Car Rental`}
        phrase3=' Website'
        imageProjectDetails={morent.imageProjectDetails}
        url={morent.url}
        github={morent.github}
        myRole={morent.myRole}
        startDate={morent.startDate}
        endDate={morent.endDate}
        techStack={morent.techStack}
        longDescription={morent.longDescription}
        problemStatement={morent.problemStatement}
        secondImage={morent.secondImage}
        figmaDesign={morent.figmaDesign}
        challenges={morent.challenges}
        learnings={morent.learnings}
      />
    </>
  );
};

export default Morent;
