import { workData } from "@/constants";
import SectionHeader from "./SectionHeader";

const WorkExperience = () => {
  return (
    <section
      id='workExperience'
      className='dark:bg-custom-black align-center mx-auto mb-12 mt-10 justify-around rounded-xl bg-custom-red px-2 lg:px-8 pt-12 lg:flex'
    >
      <div className='ml-3 pt-0 text-left md:mt-5'>
        <SectionHeader phrase1='Work ' phrase2='Experience' />
      </div>
      <div className='dark:custom-neumorphic-process custom-neumorphic-teal w-full rounded-xl mt-10 px-6 p-5 lg:w-[50%] lg:pl-12 '>
        <ul className='border-white dark:border-custom-red relative mx-auto mt-12 border-l-4 md:mt-14'>
          {workData.map((item) => (
            <li key={item.id} className='mb-10 ml-4'>
              <div className='dark:bg-black bg-black dark:border-custom-red border-white absolute -left-3 flex h-5 w-5 animate-spin items-center justify-center rounded-full text-white'>
                o
              </div>
              <h2 className='dark:text-custom-red -mt-5 mb-1 text-sm font-normal leading-none text-white opacity-70'>
                {item.type}
              </h2>
              <h3 className='leading-wide text-xl font-medium text-white'>
                {item.title}
                <span className='custom-superscript custom-neumorphic-teal p-1 pr-2 ml-2 dark:custom-neumorphic-skills dark:border-custom-red rounded-xl font-bold dark:border-2 text-white'>
                  &nbsp; {item.duration}
                </span>
              </h3>
              <p className='mb-4 text-sm font-normal text-white dark:text-gray-400 opacity-70'>
                {item.place}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
