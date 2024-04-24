"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

const navLinks = [
  { href: "/", name: "Home" },
  { href: "/work", name: "Work" },
  { href: "/about", name: "About" },
  { href: "/contacts", name: "Contacts" },
];
const hover = "hover:scale-110 duration-300";
interface HeaderProps {}

export const Header = (props: HeaderProps) => {
  const currentPath = usePathname();

  return (
    <header>
      <div className="flex h-16 px-8 items-center">
        <div className="flex gap-4 items-center ">
          <Image src="/logo_pl_w.png" alt="my logo" width={32} height={32} />
          <div>Pavlo Lystopad</div>
        </div>
        <nav className="flex gap-4 items-center mx-auto">
          <ul className="flex gap-4 text-base font-semibold">
            {navLinks.map((link) => {
              const isActive =
                currentPath.includes(link.name.toLowerCase()) ||
                currentPath === link.href;

              return (
                <li
                  key={link.name}
                  className="duration-300 transform hover:scale-125"
                >
                  <Link
                    href={link.href}
                    className={isActive ? "text-salad" : "text-inherit"}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="w-fit  text-center uppercase text-salad duration-300 transform hover:scale-110">
          <Link className="flex gap-2 items-center" href={"/work/others"}>
            <span>resume</span>
            <Image
              src="/down.svg"
              alt="arrow"
              width="0"
              height="0"
              sizes="100vw"
              className="w-3 h-3"
            />
          </Link>
          <hr className="w-full h-[1px] border-solid border-salad" />
        </div>
      </div>
      <hr className="h-[1px] border-solid border-gray-bg" />
    </header>
  );
};
