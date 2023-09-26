import Image from "next/image";

interface SkillsIconsProps {
  name: string;
  icon: string;
  id: number;
}

const SkillsIcons: React.FC<SkillsIconsProps> = ({ id, name, icon }) => {
  return (
    <li key={id} className='skillIconListItem'>
      {/* Icon */}
      <Image
        src={icon}
        alt={`${name} icon`}
        className='skillIconImage'
        width={60}
        height={60}
      />

      {/* Name of Icon */}
      <p className='skillIconName'>{name}</p>
    </li>
  );
};

export default SkillsIcons;
