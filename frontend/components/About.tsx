"use client";

import "animate.css";
import { AiFillLinkedin } from "react-icons/ai";

import DetailsOnHover from "@/components/DetailsOnHover";
import { strengths } from "@/constants";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section
      id='about'
      className='dark:bg-custom-black mt-5 w-full rounded-2xl bg-white px-4 py-7 dark:shadow-md sm:px-6 lg:px-16'
    >
      <div className='mb-12 pt-10 text-center'>
        <SectionHeader phrase1={`About `} phrase2='Me' />
      </div>

      <div className='grid grid-cols-1 gap-8 px-4 sm:grid-cols-3 sm:px-0 xl:grid-cols-5'>
        {strengths.map((strength) => (
          <div className='min-h-[150px] lg:h-[550px]' key={strength.id}>
            <DetailsOnHover summary={strength.title} isOpen={strength.isOpen}>
              <div className='my-5 -mt-2 rounded-b-xl p-1'>
                <p className='mb-4 text-lg font-medium text-white opacity-90'>
                  {strength.quote}
                </p>
                <hr />

                <div className='flex items-center justify-between'>
                  <div className='mr-auto mt-4 min-w-0'>
                    <p className='truncate text-base font-semibold text-white'>
                      {strength.name}
                    </p>
                    <p className='truncate text-xs text-white'>
                      {strength.job}
                    </p>
                  </div>
                  <div className='text-white'>
                    <AiFillLinkedin size={30} className='mt-3' />
                  </div>
                </div>
              </div>
            </DetailsOnHover>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
