/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Button from "./components/button";
import SocialButton from "./components/socialButton";
import Link from "next/link";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <div className="flex">
        <div className="bg-gray-bg text-black px-8 py-20 w-1/2 font-semibold">
          <span className="text-6xl text-dark-bg tracking-tighter">
            Hi, I am
          </span>
          <h1 className="text-7xl tracking-tighter">Pavlo Lystopad</h1>
          <p className="mt-10 mb-5 text-base font-semibold text-dark-bg">
            A Kyiv based Full-Stack developer passionate about building
            accessible and user friendly websites.
          </p>
          <div className="mb-5">
            <Link
              className="flex gap-1 items-center"
              href={"https://maps.app.goo.gl/hxBt8hcqaV8noxheA"}
            >
              <Image
                src="/map.svg"
                alt="location"
                width="0"
                height="0"
                sizes="100vw"
                className="w-5 h-5"
              />
              <span>Brovary Kyiv area, Ukraine</span>
              <Image
                src="/lang/ua_flag.svg"
                alt="ukraine flag"
                width="0"
                height="0"
                sizes="100vw"
                className="w-5 h-4"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <Button>
              <Link href={"/contacts"}>Contact Me</Link>
            </Button>
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
      <div className="px-8 py-6 bg-second-bg bg-[url('/itb.svg')] bg-right bg-no-repeat bg-contain">
        <h2 className="text-xl">About me</h2>
        <p className="my-3 text-xs w-2/3">
          I'm a full stack developer (React.js & Node.js) with a focus on
          creating exceptional digital experiences that are accessible, visually
          appealing, and responsive. Even though I have been creating web
          applications for only more than 1 year, I am rapidly gaining
          experience because I really like to learn new technologies.
        </p>
        <button className="duration-300 transform hover:scale-110">
          <Link
            href={"/about"}
            className="underline uppercase text-sm text-salad"
          >
            more about me
          </Link>
        </button>
      </div>
    </>
  );
}
