"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { NavItem } from "./navItem";
import { navLinks } from "@/lib/navLinks";

type HeaderNavProps = {};

export default function HeaderNav(props: HeaderNavProps) {
  const currentPath = usePathname();
  return (
    <>
      <nav className="hidden md:flex gap-4 items-center mx-auto">
        <ul className="flex gap-4 text-base font-medium">
          {navLinks.map((link) => {
            const isActive =
              currentPath.includes(link.name.toLowerCase()) ||
              currentPath === link.href;

            return <NavItem key={link.name} link={link} isActive={isActive} />;
          })}
        </ul>
      </nav>
    </>
  );
}
