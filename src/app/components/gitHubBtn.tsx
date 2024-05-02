import Link from "next/link";
import React from "react";

type GitHubBtnProps = {};

export default function GitHubBtn({}: GitHubBtnProps) {
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={"https://www.linkedin.com/in/pavlo-lystopad/"}
    >
      <button className="flex items-center justify-center w-9 h-9 lg:w-10 lg:h-10 bg-second-bg bg-[url('/gith.svg')] bg-no-repeat bg-center rounded-full border border-solid border-transparent  hover:bg-salad hover:bg-[url('/gith_dark.svg')] hover:border-dark-bg duration-500"></button>
    </Link>
  );
}
