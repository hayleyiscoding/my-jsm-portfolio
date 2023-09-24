import { technologies } from "@/constants";
import SkillsIcons from "./SkillsIcons";

interface SkillSectionProps {
  type: string;
  startIndex: number;
  endIndex: number;
}

const SkillSection: React.FC<SkillSectionProps> = ({
  type,
  startIndex,
  endIndex,
}) => {
  return (
    <div className='flex flex-col items-center justify-center p-2'>
      {/* Header */}
      <h4 className='text-white text-center text-xl font-medium dark:text-white'>
        {type}
      </h4>

      {/* Icons */}
      <ul className='flex flex-wrap items-center justify-center gap-4 py-6'>
        {technologies.slice(startIndex, endIndex).map((item) => (
          <SkillsIcons
            key={item.id}
            name={item.name}
            id={item.id}
            icon={item.icon}
          />
        ))}
      </ul>
    </div>
  );
};

export default SkillSection;
