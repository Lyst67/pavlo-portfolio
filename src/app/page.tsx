/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ContactMeButtons from "./components/contactMeButtons";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <>
      <div className="flex flex-col gap-8 items-center md:gap-2 md:flex-row pt-5 px-8">
        <div className="bg-gray-bg text-black p-4 md:p-6 lg:p-10  md:w-2/3 lg:w-3/5 rounded-xl overflow-hidden font-semibold">
          <div className="w-3/5 max-w-72 mx-auto mb-8 md:hidden rounded-lg overflow-hidden shadow-[6px_14px_0px_10px_rgba(144,144,144,0.50)]">
            <Image
              src="/images/my_photo_6.webp"
              alt="my photo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
          <div className="lg:mt-3 xl:mt-5 ">
            <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-dark-bg tracking-tighter">
              Hi, I am
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl tracking-tighter">
              Pavlo Lystopad
            </h1>
            <p className="lg:w-4/5 mt-2 md:mt-4 lg:mt-5 mb-2 md:mb-3 lg:mb-5 text-sm md:text-base font-semibold text-dark-bg">
              A Kyiv based Full-Stack developer passionate about building
              accessible and user friendly websites.
            </p>
          </div>

          <div className="mb-3 md:mb-5">
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
          <ContactMeButtons />
        </div>
        <div className="w-full md:w-1/3 lg:w-2/5 flex md:items-center justify-center order-[-1] md:order-1">
          <div className="hidden md:block md:w-44 lg:w-52 rounded-lg overflow-hidden shadow-[6px_14px_0px_10px_rgba(144,144,144,0.50)] md:shadow-[10px_24px_0px_10px_rgba(144,144,144,0.50)]">
            <Image
              src="/images/my_photo_6.webp"
              alt="my photo"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="px-8 py-6 bg-second-bg bg-[url('/itb.svg')] bg-right bg-no-repeat bg-contain">
        <h2 className="text-xl">About me</h2>
        <p className="my-2 md:my-3 text-xs w-3/4 md:w-2/3">
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
