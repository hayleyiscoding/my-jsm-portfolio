import Link from "next/link";

interface NavItemMobileProps {
  url: string;
  name: string;
  setShowSidebar: (newValue: boolean) => void;
}

const NavItemMobile: React.FC<NavItemMobileProps> = ({
  url,
  name,
  setShowSidebar,
}) => {
  const closeSidebar = (): void => {
    setShowSidebar(false);
  };

  return (
    <li>
      <Link
        href={url}
        onClick={closeSidebar}
        className='text-white mx-auto flex flex-col items-center rounded-xl pb-4 dark:text-white hover:underline'
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItemMobile;
