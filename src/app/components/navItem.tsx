import Link from "next/link";
import React from "react";

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
    <li className="text-lg hover:scale-110 duration-300">
      <Link
        onClick={closeMenu}
        href={link.href}
        className={isActive ? "text-salad" : "text-inherit"}
      >
        {link.name}
      </Link>
    </li>
  );
};
