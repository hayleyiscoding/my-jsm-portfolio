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
    <li key={id} className='skillsOtherIconsListItem'>
      {/* Avatar */}
      <Image
        src={icon}
        alt={`${name} icon`}
        width={70}
        height={70}
        className='skillsOtherImage'
      />

      {/* Name of Icon */}
      <p className='mt-1 flex items-center justify-center text-xs text-white'>
        {name}
      </p>
    </li>
  );
};

export default SkillsOtherIcons;
