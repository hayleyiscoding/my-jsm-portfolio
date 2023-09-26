import { AiFillCheckCircle, AiOutlineDown } from "react-icons/ai";

interface AboutCardHeaderProps {
  summary: string;
  children: React.ReactNode;
}

const AboutCardHeader: React.FC<AboutCardHeaderProps> = ({
  summary,
  children,
}) => {
  return (
    <section id='AboutCardHeader' className='rounded-2xl'>
      <details
        open
        className='custom-neumorphic-teal-pressed bg-custom-teal rounded-2xl pb-1'
      >
        <summary className='summary'>
          <span className='text-custom-teal'>
            <AiFillCheckCircle size={40} />
          </span>
          <h4 className='text-custom-black text-lg font-light dark:text-white'>
            {summary}
          </h4>
          <span className='text-custom-black dark:text-custom-teal animate-bounce-slow p-2'>
            <AiOutlineDown size={20} />
          </span>
        </summary>
        <div className='px-4'>{children}</div>
      </details>
    </section>
  );
};

export default AboutCardHeader;
