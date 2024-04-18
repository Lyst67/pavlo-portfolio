import React from "react";

type SocialButtonProps = {
  children: React.ReactNode;
};

export default function SocialButton({ children }: SocialButtonProps) {
  return (
    <button className="flex items-center justify-center w-10 h-10 bg-dark-bg  rounded-full border border-solid border-transparent  hover:scale-125 duration-500">
      {children}
    </button>
  );
}
