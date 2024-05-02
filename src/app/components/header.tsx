"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderNav from "./headerNav";
import ResumeButton from "./resumeButton";
import BurgerButton from "./burgerButton";
import MobileMenu from "./mobileMenu";
import { usePathname } from "next/navigation";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [show, setShow] = useState(false);
  const currentPath = usePathname();
  const isHome = currentPath.endsWith("/");

  const handleShow = () => {
    setShow(!show);
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header className={isHome ? "fixed w-full z-10" : ""}>
      <div className="flex h-11 md:h-16 px-8 lg:px-12 xl:px-20 items-center">
        <div className="flex gap-1 items-center ">
          <Image
            src="/logo_white.png"
            alt="my logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9 h-9"
          />
          <Link href={"/"}>
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
