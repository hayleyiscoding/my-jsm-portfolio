import Image from "next/image";

const ProjectDetailsTech = ({ techStack }: { techStack: Array<string> }) => {
  return (
    <section className='dark:bg-custom-black w-full max-w-4xl rounded-xl bg-white px-10 py-8 dark:px-4 dark:py-6'>
      <div className=' mb-4'>
        <h5 className='text-custom-red mb-2'>Technologies used</h5>
        <h3 className='text-custom-black text-4xl dark:text-white'>
          Tech Stack
        </h3>
      </div>
      <div>
        <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
          {techStack.map((item) => (
            <li
              key={item}
              className='dark:custom-neumorphic-process border-custom-red mx-auto mb-5 flex h-[80px] w-[80px] flex-col items-center justify-center rounded-[100%] border-b-8 bg-white p-3 shadow-2xl hover:animate-ping dark:border-none'
            >
              <Image
                src={item}
                alt={`${item} icon`}
                width={70}
                className='w-[50px] p-2 brightness-100 contrast-200 grayscale lg:w-[60px]'
              />
              {/* <p className='text-custom-black mt-1 flex items-center justify-center text-xs dark:text-white'>
                {item}
              </p> */}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsTech;
