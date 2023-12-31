import { technologies } from "@/constants";
import SkillsOtherIcons from "./SkillsOtherIcons";

interface SkillsOtherProps {
  type: string;
  startIndex: number;
  endIndex: number;
}

const SkillsOther: React.FC<SkillsOtherProps> = ({
  type,
  startIndex,
  endIndex,
}) => {
  return (
    <div className='skillsOtherContainer'>
      {/* Header */}
      <h4 className='px-2 py-7 text-center text-xl font-bold text-white'>
        {type}
      </h4>

      {/* Icons */}
      <ul className='flex-wrap justify-start gap-2 p-1 text-center md:flex'>
        {technologies.slice(startIndex, endIndex).map((item) => (
          <SkillsOtherIcons
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

export default SkillsOther;
