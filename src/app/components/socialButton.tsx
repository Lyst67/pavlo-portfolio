import Link from "next/link";
import React from "react";

type SocialButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function SocialButton({ children, href }: SocialButtonProps) {
  return (
    <button className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-dark-bg  rounded-full border-2 border-solid border-transparent  hover:bg-salad hover:border-dark-bg duration-500">
      <Link target="_blank" rel="noopener noreferrer" href={href}>
        {children}
      </Link>
    </button>
  );
}
