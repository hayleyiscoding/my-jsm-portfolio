interface SectionHeaderProps {
  phrase1?: string;
  phrase2?: string;
  phrase3?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  phrase1,
  phrase2,
  phrase3,
}) => {
  return (
    <h2 className='sectionHeader'>
      <span className='max-w-lg font-semibold leading-relaxed'>
        {phrase1}
        <span className='headerUnderline'>{phrase2}</span>
        {phrase3}
      </span>
      <br className='block sm:hidden' />
    </h2>
  );
};

export default SectionHeader;
