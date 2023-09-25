import { AiFillCheckCircle, AiOutlineDown } from "react-icons/ai";

interface AboutCardProps {
  summary: string;
  children: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ summary, children }) => {
  return (
    <section id='AboutCard' className='rounded-2xl'>
      <details
        open
        className='custom-neumorphic-teal-pressed bg-custom-red rounded-2xl pb-1'
      >
        <summary className='summary'>
          <span className='text-custom-red'>
            <AiFillCheckCircle size={40} />
          </span>
          <h4 className='text-custom-black text-lg font-light dark:text-white'>
            {summary}
          </h4>
          <span className='text-custom-black animate-bounce-slow p-2'>
            <AiOutlineDown size={20} />
          </span>
        </summary>
        <div className='px-4'>{children}</div>
      </details>
    </section>
  );
};

export default AboutCard;
