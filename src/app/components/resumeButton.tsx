import Image from "next/image";
import Link from "next/link";
import React from "react";

type ResumeButtonProps = {};

export default function ResumeButton({}: ResumeButtonProps) {
  return (
    <div className="w-fit mx-auto text-center uppercase text-salad duration-300 transform hover:scale-110">
      <Link
        className="flex gap-2 items-center"
        download
        target="_blank"
        rel="noopener noreferrer"
        href={
          "https://drive.google.com/file/d/1Zke24RghfoNjh66AcesqOnAgrJjxhf-6/view?usp=drive_link"
        }
      >
        <span>resume</span>
        <Image
          src="/down.svg"
          alt="arrow"
          width="0"
          height="0"
          sizes="100vw"
          className="w-3 h-3"
        />
      </Link>
      <hr className="w-full h-[1px] border-solid border-salad" />
    </div>
  );
}
