import Image from 'next/image';
import React from 'react';

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer>
      <hr className="h-[1px] border-solid border-gray-txt" />
      <div className="flex text-xs tracking-tighter sm:tracking-normal h-16 px-8 items-center justify-center">
        <Image src={'/copyright.svg'} alt="copyright" width={8} height={8} />
        <span>2024 | Created with ❤️️ by Pavlo Lystopad</span>
      </div>
      <hr className="h-[1px] border-solid border-gray-txt" />
    </footer>
  );
}
