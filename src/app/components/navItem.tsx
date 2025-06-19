import Link from 'next/link';

type NavItemProps = {
  link: {
    href: string;
    name: string;
  };
  isActive: boolean;
  workLink: boolean;
  closeMenu?: () => void;
};

export const NavItem = ({ link, isActive, workLink, closeMenu }: NavItemProps) => {
  return (
    <li className="hover:scale-110 focus:scale-110 duration-300">
      <Link
        onClick={closeMenu}
        href={link.href}
        className={isActive ? 'text-salad underline' : !isActive && workLink ? 'text-text animate-pulse' : 'text-inherit'}
      >
        {link.name}
      </Link>
    </li>
  );
};
