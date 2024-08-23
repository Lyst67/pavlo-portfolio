import Link from 'next/link';
import React from 'react';

type LinkRoundButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function LinkRoundButton({ children, href }: LinkRoundButtonProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={href}>
      <div className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-second-bg rounded-full border border-solid border-transparent text-salad hover:text-second-bg hover:bg-salad  hover:border-second-bg duration-500 ease-linear">
        {children}
      </div>
    </Link>
  );
}
