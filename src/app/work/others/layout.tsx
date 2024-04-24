import React from "react";
import Portfolio from "../page";

type OtherLayoutProps = {
  children: React.ReactNode;
};

export default function OtherLayout({ children }: OtherLayoutProps) {
  return (
    <>
      <Portfolio />
      {children}
    </>
  );
}
