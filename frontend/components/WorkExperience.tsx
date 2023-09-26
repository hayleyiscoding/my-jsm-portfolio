import { workData } from "@/constants";
import SectionHeader from "./SectionHeader";

const WorkExperience = () => {
  return (
    <section id='workExperience' className='workExpContainer'>
      {/* Header - Column 1 */}
      <div className='ml-3 pt-0 text-left md:mt-5'>
        <SectionHeader phrase1='Work ' phrase2='Experience' />
      </div>

      {/* List - Column 2 */}
      <div className='workExpCol2'>
        <ul className='workExpList'>
          {workData.map((item) => (
            <li key={item.id} className='mb-10 ml-4'>
              {/* Circle */}
              <div className='workExpCircle'>o</div>
              {/* Type */}
              <h2 className='workExpType'>{item.type}</h2>
              {/* Title */}
              <h3 className='leading-wide text-xl font-medium text-white'>
                {item.title}
                {/* Duration */}
                <span className='workExpDuration'>&nbsp; {item.duration}</span>
              </h3>
              {/* Place */}
              <p className='workExpPlace'>{item.place}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WorkExperience;
