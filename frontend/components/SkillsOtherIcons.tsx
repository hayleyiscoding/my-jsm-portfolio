import Image from "next/image";

interface SkillsOtherIconsProps {
  name: string;
  icon: string;
  id: number;
}

const SkillsOtherIcons: React.FC<SkillsOtherIconsProps> = ({
  id,
  name,
  icon,
}) => {
  return (
    <li
      key={id}
      className='custom-neumorphic-teal hover:custom-neumorphic-teal-pressed mx-auto mb-7 flex h-[120px] w-[120px] cursor-pointer flex-col items-center justify-center rounded-[100%] p-4'
    >
      {/* Avatar */}
      <Image
        src={icon}
        alt={`${name} icon`}
        width={70}
        height={70}
        className='w-full max-w-[40px] brightness-100 contrast-200 grayscale'
      />

      {/* Name of Icon */}
      <p className='mt-1 flex items-center justify-center text-xs text-white'>
        {name}
      </p>
    </li>
  );
};

export default SkillsOtherIcons;
