import Image from "next/image";

interface SkillsIconsProps {
  name: string;
  icon: string;
  id: number;
}

const SkillsIcons: React.FC<SkillsIconsProps> = ({ id, name, icon }) => {
  return (
    <li
      key={id}
      className='dark:custom-neumorphic-process hover:custom-neumorphic-teal-pressed custom-neumorphic-teal dark:hover:custom-neumorphic-black-pressed mx-auto mb-5 flex h-[110px] w-[110px] cursor-pointer flex-col items-center justify-center rounded-[100%] p-2 shadow-2xl'
    >
      {/* Icon */}
      <Image
        src={icon}
        alt={`${name} icon`}
        className='w-[50px] p-2 lg:w-[60px] dark:contrast-100 contrast-400'
      />

      {/* Name of Icon */}
      <p className='text-white mt-1 flex items-center justify-center text-xs dark:text-white'>
        {name}
      </p>
    </li>
  );
};

export default SkillsIcons;
