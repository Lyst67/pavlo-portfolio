"use client";

import { otherProjects } from "@/lib/otherProjects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OtherProps {}

const Others = ({}: OtherProps): JSX.Element => {
  return (
    <div>
      <ul className="flex flex-col gap-10 items-center">
        {otherProjects.map((project) => {
          const {
            image,
            name,
            description,
            stack,
            type,
            role,
            year,
            site,
            github,
          } = project;
          return (
            <li key={name} className="flex">
              <div className="w-1/2 p-10 bg-second-bg flex justify-center items-center rounded-xl overflow-hidden">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    alt={name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="w-1/2 p-10">
                <h3 className="text-xl">{name}</h3>
                <p className="my-3 text-sm">{description}</p>
                <div className="mb-2">
                  <h4>Technology stack:</h4>
                  <div className="bg-second-bg rounded-lg text-sm">
                    <p>{stack}</p>
                  </div>
                </div>
                <hr className="h-[1px] border-solid border-gray-bg" />
                <ul className=" text-sm">
                  <li className="my-2 flex justify-between">
                    <p>Type</p>
                    <p>{type}</p>
                  </li>
                  <hr className="h-[1px] border-solid border-gray-bg" />
                  <li className="my-2 flex justify-between">
                    <p>Role</p>
                    <p>{role}</p>
                  </li>
                  <hr className="h-[1px] border-solid border-gray-bg" />
                  <li className="my-2 flex justify-between">
                    <p>Year</p>
                    <p>{year}</p>
                  </li>
                  <hr className="h-[1px] border-solid border-gray-bg" />
                </ul>
                <div className="flex gap-4 mt-3 text-salad text-sm uppercase">
                  <div className="duration-300 transform hover:scale-110">
                    <Link href={site} className="flex gap-2 items-center">
                      <span>view project</span>
                      <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-3 h-3"
                      />
                    </Link>
                    <hr className="w-full h-[1px] border-solid border-salad" />
                  </div>
                  <div className="duration-300 transform hover:scale-110">
                    <Link href={github} className="flex gap-2 items-center">
                      <span>GitHub</span>
                      <Image
                        src="/arrow.svg"
                        alt="arrow"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-3 h-3"
                      />
                    </Link>
                    <hr className="w-full h-[1px] border-solid border-salad" />
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="block my-10 mx-auto duration-300 transform hover:scale-125"
      >
        <Image src="/to_top.svg" alt="to top arrow" width={40} height={40} />
      </button>
    </div>
  );
};

export default Others;
