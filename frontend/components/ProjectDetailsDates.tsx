interface ProjectDetailsProps {
  myRole: string;
  startDate: string;
  endDate: string;
}

const ProjectDetailsDates: React.FC<ProjectDetailsProps> = ({
  myRole,
  startDate,
  endDate,
}) => {
  return (
    <section className='datesContainer'>
      <div className='datesSectionContainer'>
        <h3 className='datesSectionTitle'>My Role</h3>
        <h4 className='text-xl font-normal text-white'>{myRole}</h4>
      </div>
      <div className='datesSectionContainer'>
        <h3 className='datesSectionTitle'>Start Date</h3>
        <h4 className='text-xl font-normal text-white'>{startDate}</h4>
      </div>
      <div className='datesSectionContainer'>
        <h3 className='datesSectionTitle'>End Date</h3>
        <h4 className='text-xl font-normal text-white'>{endDate}</h4>
      </div>
    </section>
  );
};

export default ProjectDetailsDates;
