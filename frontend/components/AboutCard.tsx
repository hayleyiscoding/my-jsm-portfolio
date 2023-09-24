import { AiFillCheckCircle, AiOutlineDown } from "react-icons/ai";

interface AboutCardProps {
  summary: string;
  children: React.ReactNode;
}

const AboutCard: React.FC<AboutCardProps> = ({ summary, children }) => {
  return (
    <div id='AboutCard' className='cursor-pointer rounded-2xl'>
      <details
        open
        className='custom-neumorphic-teal-pressed bg-custom-red rounded-2xl pb-1'
      >
        <summary className='dark:custom-neumorphic-process -ml-1 mb-4 flex flex-col items-center justify-center gap-2 rounded-2xl bg-white p-4 text-center shadow-xl'>
          <span className='text-custom-red'>
            <AiFillCheckCircle size={40} />
          </span>
          <h4 className='text-custom-black text-lg font-light delay-1000 ease-in dark:text-white'>
            {summary}
          </h4>
          <span className='text-custom-black animate-bounce-slow p-2'>
            <AiOutlineDown size={20} />
          </span>
        </summary>
        <div className='px-4'>{children}</div>
      </details>
    </div>
  );
};

export default AboutCard;
