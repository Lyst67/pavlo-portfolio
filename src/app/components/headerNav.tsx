'use client';

import { usePathname } from 'next/navigation';
import { NavItem } from './navItem';
import { navLinks } from '@/lib/navLinks';

export default function HeaderNav() {
  const currentPath = usePathname();
  return (
    <>
      <nav className="hidden md:flex items-center mx-auto">
        <ul className="flex md:gap-4 lg:gap-8 xl:gap-10  lg:text-lg font-medium">
          {navLinks.map((link) => {
            const isActive =
              currentPath.includes(link.name.toLowerCase().replace('//', '').trim()) ||
              currentPath === link.href;

            return <NavItem key={link.name} link={link} isActive={isActive} />;
          })}
        </ul>
      </nav>
    </>
  );
}
