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
        className={`navItemLink ${isActivePath(url) ? "navActive" : ""}`}
      >
        {name}
      </Link>
    </li>
  );
};

export default NavItem;
