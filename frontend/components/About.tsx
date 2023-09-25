import { AiFillLinkedin } from "react-icons/ai";

import { strengths } from "@/constants";
import SectionHeader from "./SectionHeader";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <section
      id='about'
      className='mt-10 w-full rounded-2xl py-7 sm:px-6 lg:px-24'
    >
      <div className='mb-12 pt-9 text-center'>
        <SectionHeader phrase1={`About `} phrase2='Me' />
      </div>

      <div className='grid grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-0 xl:grid-cols-5'>
        {strengths.map((strength) => (
          <div className='min-h-[150px] lg:h-[470px]' key={strength.id}>
            <AboutCard summary={strength.title}>
              <div className='my-5 -mt-2 rounded-b-xl p-1'>
                <p className='mb-4 text-sm font-light text-white opacity-90'>
                  {strength.quote}
                </p>
                <hr className='bg-black' />

                <div className='flex items-center justify-between'>
                  <div className='mr-auto mt-4 min-w-0'>
                    <p className='text-base font-semibold text-white'>
                      {strength.name}
                    </p>
                    <p className='text-xs text-white'>{strength.job}</p>
                  </div>
                  <div className='text-white'>
                    <AiFillLinkedin size={30} className='mt-3' />
                  </div>
                </div>
              </div>
            </AboutCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
