interface ProjectDetailsLearningsProps {
  learnings: Array<string>;
  challenges: Array<string>;
}

const ProjectDetailsLearnings: React.FC<ProjectDetailsLearningsProps> = ({
  learnings,
  challenges,
}) => {
  return (
    <section className='max-w-4xl px-4 py-6'>
      <div className='mb-6'>
        <h5 className='text-custom-red mb-2'>Problem</h5>
        <h3 className='text-custom-black text-4xl dark:text-white leading-12'>
          Challenges and Learnings
        </h3>
      </div>
      <div className='bg-white dark:custom-neumorphic-projects mb-6 rounded-xl p-12'>
        <h4 className='mb-6 text-xl font-bold uppercase text-red-500'>
          Challenges
        </h4>
        <ul>
          {challenges.map((challenge) => (
            <li key={challenge} className='text-md mb-8 font-extralight'>
              <span className='mr-2'>🔴</span>
              {challenge}
            </li>
          ))}
        </ul>
      </div>
      <div className='bg-white dark:custom-neumorphic-projects rounded-xl p-8'>
        <h4 className='mb-6 text-xl font-bold uppercase text-green-500'>
          Learnings
        </h4>
        <ul>
          {learnings.map((learning) => (
            <li key={learning} className='text-md mb-8 font-extralight'>
              <span className='mr-2'>🟢</span>
              {learning}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectDetailsLearnings;
