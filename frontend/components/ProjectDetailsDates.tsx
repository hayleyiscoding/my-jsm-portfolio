import React from "react";

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
    <section className='max-w-4xl dark:bg-custom-red my-8 mx-5 flex flex-col justify-between dark:rounded-2xl md:gap-5 md:px-10 text-center md:flex-row lg:text-left px-4 w-full py-4'>
      <div className='basis-1/3 text-center custom-neumorphic-teal mb-8 md:mb-0 p-6'>
        <h3 className='text-custom-black text-md font-bold'>My Role</h3>
        <h4 className='text-xl font-normal text-white'>{myRole}</h4>
      </div>
      <div className='basis-1/3 text-center custom-neumorphic-teal mb-8 md:mb-0 p-6'>
        <h3 className='text-custom-black text-md font-bold'>Start Date</h3>
        <h4 className='text-xl font-normal text-white'>{startDate}</h4>
      </div>
      <div className='basis-1/3 text-center custom-neumorphic-teal md:mb-0 p-6'>
        <h3 className='text-custom-black text-md font-bold'>End Date</h3>
        <h4 className='text-xl font-normal text-white'>{endDate}</h4>
      </div>
    </section>
  );
};

export default ProjectDetailsDates;
