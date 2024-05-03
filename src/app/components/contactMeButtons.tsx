import React from "react";
import Button from "./button";
import Link from "next/link";
import LinkedInButton from "./linkedInButton";
import GitHubButton from "./gitHubButton";

type Props = {};

export default function ContactMeButtons({}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Button>
        <Link href={"/contacts"}>contact me</Link>
      </Button>
      <LinkedInButton />
      <GitHubButton />
    </div>
  );
}
