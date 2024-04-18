import Image from "next/image";
import React from "react";
import Button from "./compoents/button";
import SocialButton from "./compoents/socialButton";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-bg text-black px-8 py-20 w-1/2 font-sans font-semibold text-7xl">
        <p>Hi, I am</p>
        <h1 className="tracking-tighter">Pavlo Lystopad</h1>
        <p className="my-10 text-base font-semibold text-dark-bg">
          A Kyiv based Full-Stack developer passionate about building accessible
          and user friendly websites.
        </p>
        <div className="flex gap-4">
          <Button>Contact Me</Button>
          <SocialButton>
            <Image src="/link.svg" alt="linkedIn" width={20} height={20} />
          </SocialButton>
          <SocialButton>
            <Image src="/gith.svg" alt="gitHub" width={20} height={20} />
          </SocialButton>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center justify-end"></div>
    </div>
  );
}
