import Image from "next/image";

import { techUrlMap } from "@/constants";

const ProjectDetailsTech = ({ techStack }: { techStack: Array<string> }) => {
  return (
    <section className='techStackContainer'>
      {/* Header */}
      <header className=' mb-4'>
        <h5 className='text-gray-400 dark:text-custom-teal mb-2'>
          Technologies used
        </h5>
        <h3 className='text-3xl lg:text-4xl text-white'>Tech Stack</h3>
      </header>

      {/* Tech Icons */}
      <div>
        <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
          {techStack.map((item) => (
            <li key={item} className='techStackListItem'>
              <Image
                src={techUrlMap[item]}
                alt={`${item} icon`}
                width={50}
                height={50}
                className='techStackImage'
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsTech;
