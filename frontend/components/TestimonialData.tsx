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
          className='testimonialAvatar'
          src={avatar}
          alt='Avatar'
          width={100}
          height={100}
        />
      </div>

      {/* Quote */}
      <blockquote className='testimonialQuoteContainer'>
        <p className='testimonialQuote'>{testimonial}</p>
      </blockquote>

      {/* Author */}
      <p className='mt-6 text-lg font-semibold text-gray-200 sm:mt-10'>
        {name}
      </p>

      {/* Company */}
      <p className='mt-1 text-xs font-medium text-white'>{company}</p>
    </div>
  );
};

export default TestimonialData;
