'use client';

import { RxHamburgerMenu } from 'react-icons/rx';

type BurgerButtonProps = {
  showMenu: () => void;
};

export default function BurgerButton({ showMenu }: BurgerButtonProps) {
  return (
    <button
      onClick={showMenu}
      className="ml-auto md:hidden hover:scale-110 focus:scale-110 duration-300 ease-linear"
    >
      <RxHamburgerMenu className="w-8 h-8" />
    </button>
  );
}
