import React from "react";
import Button from "./button";
import Link from "next/link";
import SocialButton from "./socialButton";
import LinkedIcon from "./linkedIcon";
import GitHubIcon from "./gitHubIcon";

type Props = {};

export default function ContactMeButtons({}: Props) {
  return (
    <div className="flex gap-4 my-2 md:mt-4 items-center">
      <Button>
        <Link href={"/contacts"}>Contact Me</Link>
      </Button>
      <SocialButton href={"https://www.linkedin.com/in/pavlo-lystopad/"}>
        <LinkedIcon />
      </SocialButton>
      <SocialButton href={"https://github.com/Lyst67"}>
        <GitHubIcon />
      </SocialButton>
    </div>
  );
}
