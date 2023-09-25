import SectionHeader from "./SectionHeader";
import SkillSection from "./SkillSection";
import SkillsOther from "./SkillsOther";

const Skills = () => {
  return (
    <section id='skills' className='my-10 px-4 sm:px-6 lg:px-24'>
      <div className='md:py-7'>
        {/* Header */}
        <header className='mb-12 pt-10 text-center'>
          <SectionHeader phrase1={`My `} phrase2='Skills' />
        </header>

        <div className='flex flex-col items-center'>
          {/* Frontend */}
          <SkillSection type='Frontend' startIndex={2} endIndex={10} />

          {/* Backend */}
          <SkillSection type='Backend' startIndex={10} endIndex={15} />

          {/* Web3 */}
          <SkillSection type='Web 3' startIndex={15} endIndex={21} />

          {/* Remote Teamwork and Testing */}
          <SkillSection
            type='Remote Teamwork and Testing'
            startIndex={28}
            endIndex={34}
          />
          {/* Other Skills */}
          <SkillsOther type='Other Skills' startIndex={21} endIndex={28} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
