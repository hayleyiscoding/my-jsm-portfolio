import ProjectDetails from "@/components/ProjectDetails";
import { getProjectDetails } from "@/sanity/lib/client";

const Morent = async () => {
  const projects = await getProjectDetails();
  const morent = projects.find((item) => item.name === "Morent");

  return (
    <ProjectDetails
      name={morent?.name}
      phrase1={morent?.phrase1}
      phrase2={morent?.phrase2}
      phrase3={morent?.phrase3}
      headerImage={morent?.headerImage}
      url={morent?.url}
      github={morent?.github}
      myRole={morent?.myRole}
      startDate={morent?.startDate}
      endDate={morent?.endDate}
      techStack={morent?.techStack}
      longDescription={morent?.longDescription}
      problemStatement={morent?.problemStatement}
      secondImage={morent?.secondImage}
      figmaDesign={morent?.figmaDesign}
      challenges={morent?.challenges}
      learnings={morent?.learnings}
      color={morent?.color}
    />
  );
};

export default Morent;
