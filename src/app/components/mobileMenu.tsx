"use client";
import React from "react";
import { NavItem } from "./navItem";
import { navLinks } from "@/lib/navLinks";
import { usePathname } from "next/navigation";
import ResumeButton from "./resumeButton";
import Image from "next/image";
import SocialLinks from "./socialLinks";

type MobileMenuProps = {
  closeMenu: () => void;
  isVisible: boolean;
};

export default function MobileMenu({ closeMenu, isVisible }: MobileMenuProps) {
  const currentPath = usePathname();

  return (
    <>
      {isVisible && (
        <div
          onClick={closeMenu}
          className="fixed top-0 left-0 w-screen h-screen md:hidden"
        />
      )}
      <div
        className={
          isVisible
            ? "fixed top-0 right-0 w-80 h-full p-6 bg-second-bg z-10 ease-in duration-500 md:hidden"
            : "fixed top-0 right-[-100%] w-80 h-full p-6 z-10 ease-in duration-500 md:hidden"
        }
      >
        <button onClick={closeMenu} className="block ml-auto">
          <Image src="/x.svg" alt="x" width={20} height={20} />
        </button>
        <ul className="flex flex-col gap-5 my-8 text-base font-medium">
          {navLinks.map((link) => {
            const isActive =
              currentPath.includes(link.name.toLowerCase()) ||
              currentPath === link.href;

            return (
              <NavItem
                closeMenu={closeMenu}
                key={link.name}
                link={link}
                isActive={isActive}
              />
            );
          })}
        </ul>
        <hr className="h-[1px] mb-5 border-solid border-gray-bg" />

        <SocialLinks />
        <ResumeButton />
      </div>
    </>
  );
}
function isShown() {
  throw new Error("Function not implemented.");
}
