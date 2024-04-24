import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type="submit"
      className="flex items-center gap-3 h-10 px-4 py-2 bg-dark-bg  rounded-3xl border border-solid border-transparent text-base font-semibold uppercase text-salad after:w-2 after:h-2 after:rounded-full after:bg-salad hover:scale-110 duration-300"
    >
      {children}
    </button>
  );
}
