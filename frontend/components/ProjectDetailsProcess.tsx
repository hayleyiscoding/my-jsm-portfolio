import Image from "next/image";

import { processIcons } from "@/constants";

const ProjectDetailsProcess = () => {
  return (
    <section className='w-full max-w-4xl p-4'>
      {/* Header */}
      <header className='mb-4 ml-1 py-6'>
        <h5 className='text-gray-400 dark:text-custom-teal mb-2'>
          Way of Work
        </h5>
        <h3 className='mb-4 text-3xl lg:text-4xl text-white'>My Process</h3>
      </header>

      {/* Icons */}
      <div>
        <ul className='processIconsList'>
          {processIcons.map((item) => (
            <li key={item.id} className='processIconsListItem'>
              <div className='bg-custom-teal rounded-[100%] p-3'>
                <Image
                  src={item.icon}
                  alt={`${item} icon`}
                  className='processIconsImage'
                  width={40}
                  height={40}
                />
              </div>
              <p className='processIconsName'>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsProcess;
