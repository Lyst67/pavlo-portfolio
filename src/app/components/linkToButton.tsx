import Image from "next/image";
import Link from "next/link";
import React from "react";

type LinkToButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function LinkToButton({ children, href }: LinkToButtonProps) {
  return (
    <div className="duration-300 transform hover:scale-110 text-salad text-sm uppercase">
      <Link href={href} className="flex gap-2 items-center">
        <span>{children}</span>
        <Image
          src="/arrow.svg"
          alt="arrow"
          width="0"
          height="0"
          sizes="100vw"
          className="w-3 h-3"
        />
      </Link>
      <hr className="w-full h-[1px] border-solid border-salad" />
    </div>
  );
}
