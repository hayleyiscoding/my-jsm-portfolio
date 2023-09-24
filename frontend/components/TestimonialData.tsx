import Image from "next/image";

interface TestimonialDataProps {
  avatar: string;
  testimonial: string;
  name: string;
  company: string;
}

const TestimonialData: React.FC<TestimonialDataProps> = ({
  avatar,
  testimonial,
  name,
  company,
}) => {
  return (
    <div className='swiper-slide rounded-xl px-10 text-center dark:border-white'>
      {/* Avatar */}
      <div className='custom-neumorphic-teal-pressed mx-auto rounded-[100%]'>
        <Image
          className='grayscale-40 mx-auto h-[100px] w-[100px] rounded-[100%] object-cover p-[7px]'
          src={avatar}
          alt='Avatar'
        />
      </div>

      {/* Quote */}
      <blockquote className='custom-neumorphic-teal-pressed mt-3 rounded-md px-4 py-6 opacity-80 sm:mt-8 md:px-10 '>
        <p className='md:text-md text-sm font-light leading-6 text-white px-10 lg:px-4'>
          {testimonial}
        </p>
      </blockquote>

      {/* Author */}
      <p className='mt-6 text-lg font-semibold text-gray-200 sm:mt-10'>
        {name}
      </p>
      <p className='mt-1 text-xs font-medium text-white'>{company}</p>
    </div>
  );
};

export default TestimonialData;
