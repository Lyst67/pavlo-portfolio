"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "@/lib/projects";
import { usePathname } from "next/navigation";

type PortfolioProps = {};

export default function Portfolio({}: PortfolioProps) {
  const currentPath = usePathname();
  const isPathOthers = currentPath.endsWith("/others");
  return (
    <div className="p-10">
      <div className="mb-10">
        <h2 className="mb-6 font-semibold text-4xl tracking-tighter">
          Featured Projects
        </h2>
        <p className="text-sm w-96">
          Here are some of the selected projects that showcase my passion for
          front-end/back-end development.
        </p>
      </div>
      <div>
        <ul className="flex flex-col gap-10 items-center">
          {projects.map((project) => {
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
        {!isPathOthers && (
          <div className="w-fit mx-auto mt-10 text-center uppercase text-salad duration-300 transform hover:scale-110">
            <Link className="flex gap-2 items-center" href={"/work/others"}>
              <span>view more</span>
              <Image
                src="/arrow-right-down.svg"
                alt="arrow"
                width="0"
                height="0"
                sizes="100vw"
                className="w-5 h-5"
              />
            </Link>
            <hr className="w-full h-[1px] border-solid border-salad" />
          </div>
        )}
      </div>
    </div>
  );
}
