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
    <h2 className='text-white mt-4 text-3xl font-extralight dark:text-white md:mt-4 md:text-5xl lg:mb-16'>
      <span className='max-w-lg font-semibold leading-relaxed'>
        {phrase1}
        <span className='decoration-custom-red kipInk font-semibold leading-relaxed underline decoration-8 underline-offset-1'>
          {phrase2}
        </span>
        {phrase3}
      </span>
      <br className='block sm:hidden' />
    </h2>
  );
};

export default SectionHeader;
