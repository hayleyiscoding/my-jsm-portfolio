import { workData } from "@/constants";
import SectionHeader from "./SectionHeader";

const Work = () => {
  return (
    <section
      id='experience'
      className='dark:bg-custom-black align-center container mx-auto mt-5 justify-around rounded-xl bg-white px-8 pt-12 lg:flex'
    >
      <div className='ml-3 pt-0 text-left md:mt-5'>
        <SectionHeader phrase2='Experience' />
      </div>
      <div className='col-1 w-full md:mt-10 md:p-5 lg:w-[70%] lg:pl-12'>
        <ul className='border-custom-red container relative mx-auto mt-24 border-l dark:border-gray-700 md:mt-5'>
          {workData.map((item) => (
            <li key={item.id} className='mb-10 ml-4'>
              <div className='bg-custom-red dark:border-custom-red absolute -left-1.5 flex h-3 w-3 animate-spin items-center justify-center rounded-full border border-white text-white'>
                +
              </div>
              <h2 className='dark:text-custom-red -mt-5 mb-1 text-sm font-normal leading-none text-gray-400'>
                {item.type}
              </h2>
              <h3 className='text-custom-red leading-wide text-lg font-medium dark:text-white'>
                {item.title}
                <span className='custom-superscript custom-text-shadow dark:custom-neumorphic-skills dark:border-custom-red rounded-xl bg-white font-normal dark:border-2'>
                  &nbsp; {item.duration}
                </span>
              </h3>
              <p className='mb-4 text-base font-normal text-gray-500 dark:text-gray-400'>
                {item.place}
              </p>
              <p className='md:text-md text-custom-black mb-4 text-sm font-light dark:font-extralight dark:text-gray-400 dark:text-opacity-70'>
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Work;
