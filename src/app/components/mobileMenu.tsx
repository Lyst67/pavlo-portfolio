'use client';

import { NavItem } from './navItem';
import { navLinks } from '@/lib/navLinks';
import { usePathname } from 'next/navigation';
import ResumeButton from './resumeButton';
import SocialLinks from './socialLinks';
import { IoCloseOutline } from 'react-icons/io5';

type MobileMenuProps = {
  closeMenu: () => void;
  isVisible: boolean;
};

export default function MobileMenu({ closeMenu, isVisible }: MobileMenuProps) {
  const currentPath = usePathname();

  return (
    <>
      {isVisible && (
        <div onClick={closeMenu} className="fixed top-0 left-0 w-screen h-screen md:hidden" />
      )}
      <div
        className={
          isVisible
            ? 'fixed top-0 right-0 w-80 h-full p-6 bg-second-bg z-10 ease-in duration-500 md:hidden'
            : 'fixed top-0 right-[-100%] w-80 h-full p-6 z-10 ease-in duration-500 md:hidden'
        }
      >
        <button
          onClick={closeMenu}
          className="block ml-auto focus:scale-125 hover:scale-125 duration-300"
        >
          <IoCloseOutline className="w-10 h-10" />
        </button>
        <ul className="flex flex-col gap-8 my-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive =
              currentPath.includes(link.name.toLowerCase()) || currentPath === link.href;
              const workLink = link.href === "/work"
            return (
              <NavItem closeMenu={closeMenu} key={link.name} link={link} isActive={isActive} workLink={workLink} />
            );
          })}
        </ul>
        <hr className="h-[1px] mb-8 border-solid border-gray-bg" />
        <div className="grid gap-10">
          <SocialLinks />
          <ResumeButton />
        </div>
      </div>
    </>
  );
}
