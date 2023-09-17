"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  url: string;
  name: string;
}

const NavItem: React.FC<NavItemProps> = ({ url, name }) => {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return path === pathname;
  };
  return (
    <li className='py-2'>
      <Link
        href={url}
        scroll={true}
        className={`highlights hover:text-custom-red active:text-custom-red visited:text-custom-red rounded-xl p-2 text-sm text-white dark:font-semibold dark:text-white ${
          isActivePath(url) ? "font-semibold" : ""
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
