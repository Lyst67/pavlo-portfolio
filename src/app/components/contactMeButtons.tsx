import React from "react";
import Button from "./button";
import Link from "next/link";
import LinkedInBtn from "./linkedInBtn";
import GitHubBtn from "./gitHubBtn";

type Props = {};

export default function ContactMeButtons({}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Button>
        <Link href={"/contacts"}>contact me</Link>
      </Button>
      <LinkedInBtn />
      <GitHubBtn />
    </div>
  );
}
