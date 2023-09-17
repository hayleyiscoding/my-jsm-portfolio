import Link from "next/link";

interface socialLinkProps {
  href: string;
  icon: React.ReactNode;
}

const socialLink: React.FC<socialLinkProps> = ({ href, icon }) => {
  return (
    <Link
      href={href}
      target='_blank'
      rel='noopener'
      className='mb-1 ml-1 flex md:ml-2 md:mr-24 md:w-7'
    >
      <div className='bg-custom-red flex h-6 items-center justify-center rounded-l-xl py-4 pl-1 pr-2 text-white'>
        {icon}
      </div>
    </Link>
  );
};

export default socialLink;
