"use client";
import Image from "next/image";
import React from "react";

type BurgerButtonProps = {
  showMenu: () => void;
};

export default function BurgerButton({ showMenu }: BurgerButtonProps) {
  return (
    <button
      onClick={showMenu}
      className="ml-auto md:hidden hover:scale-110 focus:scale-110 duration-300"
    >
      <Image src="/mobil_menu.svg" alt="burger button" width={28} height={16} />
    </button>
  );
}
