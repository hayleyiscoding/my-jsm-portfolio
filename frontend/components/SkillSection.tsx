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
    <div className='skillSectionContainer'>
      {/* Header */}
      <h4 className='skillSectionHeader'>{type}</h4>

      {/* Icons */}
      <ul className='skillSectionList'>
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
