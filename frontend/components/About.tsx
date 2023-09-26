import { AiFillLinkedin } from "react-icons/ai";

import { strengths } from "@/constants";
import { SectionHeader, AboutCardHeader } from "../components/index";

const About = () => {
  return (
    <section id='about' className='aboutContainer'>
      {/* Header */}
      <div className='mb-12 pt-9 text-center'>
        <SectionHeader phrase1={`About `} phrase2='Me' />
      </div>
      {/* Cards */}
      <div className='aboutGrid'>
        {strengths.map((strength) => (
          <AboutCardHeader summary={strength.title} key={strength.id}>
            <div className='min-h-[150px] lg:h-[270px]'>
              <div className='my-5 -mt-2 rounded-b-xl p-1'>
                {/* Quote */}
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
            </div>
          </AboutCardHeader>
        ))}
      </div>
    </section>
  );
};

export default About;
