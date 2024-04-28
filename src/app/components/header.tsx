"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import HeaderNav from "./headerNav";
import ResumeButton from "./resumeButton";
import BurgerButton from "./burgerButton";
import MobileMenu from "./mobileMenu";

interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    setShow(false);
    document.body.style.overflow = "auto";
  };

  return (
    <header>
      <div className="flex h-11 md:h-16 px-8 items-center">
        <div className="flex gap-4 items-center ">
          <Image
            src="/logo_white.png"
            alt="my logo"
            width="0"
            height="0"
            sizes="100vw"
            className="w-9 h-9"
          />
          <Link href={"/"}>
            <div className="hidden md:block duration-300 hover:scale-110">
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
      <hr className="h-[1px] border-solid border-gray-txt" />
    </header>
  );
};
