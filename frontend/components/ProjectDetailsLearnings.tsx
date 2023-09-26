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
      {/* Header */}
      <header className='mb-6'>
        <h5 className='text-gray-400 dark:text-custom-teal mb-2'>Problem</h5>
        <h3 className='leading-12 text-3xl lg:text-4xl text-white'>
          Challenges and Learnings
        </h3>
      </header>

      {/* Challenges */}
      <div className='challengesContainer mb-6'>
        <h4 className='mb-6 text-xl font-bold uppercase text-red-500'>
          Challenges
        </h4>
        <ul>
          {challenges.map((challenge) => (
            <li
              key={challenge}
              className='text-base mb-8 font-extralight text-white'
            >
              <span className='mr-2'>🔴</span>
              {challenge}
            </li>
          ))}
        </ul>
      </div>

      {/* Learnings */}
      <div className='challengesContainer'>
        <h4 className='mb-6 text-xl font-bold uppercase text-green-500'>
          Learnings
        </h4>
        <ul>
          {learnings.map((learning) => (
            <li
              key={learning}
              className='text-base mb-8 font-extralight text-white'
            >
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
