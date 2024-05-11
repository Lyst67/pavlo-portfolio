import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="submit"
      className="flex items-center gap-3 h-9 lg:h-10 px-4 bg-second-bg rounded-xl border border-solid border-transparent text-xs sm:text-sm md:text-base uppercase text-salad after:w-2 after:h-2 after:rounded-full after:bg-salad hover:bg-salad hover:text-dark-bg hover:after:bg-dark-bg hover:border-dark-bg duration-500 after:duration-500 ease-linear"
    >
      {children}
    </button>
  );
}
