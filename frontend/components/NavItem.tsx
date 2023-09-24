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
    <li className='py-2 text-white'>
      <Link
        href={url}
        scroll={true}
        className={`font-normal dark:highlights dark:decoration-custom-red dark:hover:no-underline hover:underline decoration-[2px] underline-offset-[4px] rounded-xl p-2 text-sm dark:text-white ${
          isActivePath(url)
            ? "decoration-white underline decoration-[2px] underline-offset-[4px]"
            : ""
        }`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
