'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HeaderNav from './headerNav';
import ResumeButton from './resumeButton';
import BurgerButton from './burgerButton';
import MobileMenu from './mobileMenu';
import { usePathname } from 'next/navigation';

export const Header = () => {
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const currentPath = usePathname();
  const isHome = currentPath.endsWith('/');

  const handleShow = () => {
    setShow(!show);
    document.body.style.overflow = 'hidden';
  };
  const closeMenu = () => {
    setShow(false);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={
        isHome && isTopOfPage ? 'fixed w-full z-10'
          : isHome && !isTopOfPage ? 'hidden'
            : ''
      }
    >
      <div className="flex h-11 xl:h-16 md:h-16 px-8 lg:px-12 xl:px-20 items-center">
        <div>
          <Link href={'/'} className="flex gap-1 items-center">
            <Image
              src="/logo_white.png"
              alt="my logo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-9 h-9"
            />
            <div className="hidden sm:block duration-300 hover:scale-110 focus:scale-110">
              Pavlo Lystopad
            </div>
          </Link>
        </div>
        <HeaderNav />
        <div className="hidden md:block">
          <ResumeButton />
        </div>
        <BurgerButton showMenu={handleShow} />
        <MobileMenu closeMenu={closeMenu} isVisible={show} />
      </div>
      {!isHome && <hr className="h-[1px] border-solid border-gray-txt" />}
    </header>
  );
};
