import Link from 'next/link';

type NavItemProps = {
  link: {
    href: string;
    name: string;
  };
  isActive: boolean;
  closeMenu?: () => void;
};

export const NavItem = ({ link, isActive, closeMenu }: NavItemProps) => {
  return (
    <li className="hover:scale-110 focus:scale-110 duration-300">
      <Link
        onClick={closeMenu}
        href={link.href}
        className={isActive ? 'text-salad underline' : 'text-inherit'}
      >
        {link.name}
      </Link>
    </li>
  );
};
