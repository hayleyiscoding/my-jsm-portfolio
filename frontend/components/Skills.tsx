import Image from "next/image.js";
import { technologies } from "@/constants/index";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  return (
    <section
      id='skills'
      className='dark:bg-custom-black rounded-xl bg-white px-4 shadow-xl sm:px-6 lg:px-8 '
    >
      <div className='mt-8 pb-4 md:py-7'>
        <div className='mb-12 pt-10 text-center'>
          <SectionHeader phrase1={`My `} phrase2='Skills' />
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex flex-col items-center justify-center px-4'>
            <h4 className='text-custom-red text-center text-xl'>Frontend</h4>
            <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
              {technologies.slice(2, 10).map((item) => (
                <li
                  key={item.id}
                  className='dark:custom-neumorphic-process border-custom-red mx-auto mb-5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[100%] border-b-8 bg-white p-3 shadow-2xl hover:animate-ping dark:border-none'
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className='w-[50px] p-2 brightness-100 contrast-200 grayscale lg:w-[60px]'
                  />
                  <p className='text-custom-black mt-1 flex items-center justify-center text-xs dark:text-white'>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center justify-center p-4'>
            <h4 className='text-custom-red text-center text-xl'>Backend</h4>
            <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
              {technologies.slice(10, 14).map((item) => (
                <li
                  key={item.id}
                  className='border-custom-red dark:custom-neumorphic-process mx-auto mb-5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[100%] border-b-8 bg-white p-3 shadow-2xl hover:animate-ping dark:border-none'
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className='w-[50px] p-2 brightness-100 contrast-200 grayscale lg:w-[60px]'
                  />

                  <p className='text-custom-black mt-1 flex items-center justify-center text-xs dark:text-white'>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className='items center flex flex-col justify-center p-4'>
            <h4 className='text-custom-red text-center text-xl'>Web 3</h4>
            <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
              {technologies.slice(14, 20).map((item) => (
                <li
                  key={item.id}
                  className='dark:custom-neumorphic-process border-custom-red mx-auto mb-5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[100%] border-b-8 bg-white p-3 px-5 shadow-2xl hover:animate-ping dark:border-none'
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className='w-[50px] p-2 brightness-100 contrast-200 grayscale lg:w-[60px]'
                  />
                  <p className='text-custom-black mt-1 flex items-center justify-center text-xs dark:text-white'>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className='flex flex-col items-center justify-center p-4'>
            <h4 className='text-custom-red text-center text-xl'>
              Remote Collaboration and Testing
            </h4>
            <ul className='flex flex-wrap items-center justify-center gap-5 py-6'>
              {technologies.slice(27, 34).map((item) => (
                <li
                  key={item.id}
                  className='dark:custom-neumorphic-process border-custom-red mx-auto mb-5 flex h-[120px] w-[120px] flex-col items-center justify-center rounded-[100%] border-b-8 bg-white  p-3 shadow-2xl hover:animate-ping dark:border-none'
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    className='w-[50px] p-2 brightness-100 contrast-200 grayscale lg:w-[60px]'
                  />
                  <p className='text-custom-black mt-1 flex items-center justify-center text-xs dark:text-white'>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className='bg-custom-red mt-24 flex w-full flex-col justify-start rounded-xl py-3'>
            <h4 className='px-2 py-7 text-center text-xl font-bold text-white'>
              Other Skills
            </h4>
            <ul className='flex-wrap justify-start gap-3 p-6 pb-1 text-center md:flex'>
              {technologies.slice(20, 27).map((item) => (
                <li
                  key={item.id}
                  className='custom-neumorphic-teal mx-auto mb-7 flex h-[140px] w-[140px] flex-col items-center justify-center p-5 hover:animate-ping'
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={70}
                    className='w-full max-w-[40px] brightness-100 contrast-200 grayscale'
                  />
                  <p className='mt-1 flex items-center justify-center text-xs text-white'>
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
