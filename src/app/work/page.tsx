import Image from "next/image";
import Link from "next/link";
import React from "react";

type PortfolioProps = {};

export default function Portfolio({}: PortfolioProps) {
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
          <li className="flex">
            <div className="w-1/2 p-10 bg-second-bg flex justify-center items-center rounded-xl overflow-hidden">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="/images/daily-energy.png"
                  alt="daily energy site"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-1/2 p-10">
              <h3 className="text-xl">
                Daily Energy Dose.
                <br />
                <span className="text-base">Command project with BackEnd.</span>
              </h3>
              <p className="my-3 text-sm">
                An eight-page application with adaptive design for counting
                calories burned during training and calories consumed with food.
              </p>
              <div className="mb-2">
                <h4>Technology stack:</h4>
                <div className="bg-second-bg rounded-lg text-sm">
                  <p>
                    React.js, Redux-Persist, Emoution/css, Formik, Yup, Axios,
                    Node.js, Mongoose, MongoDB, Express, Jest, Joy, Morgan,
                    Swagger...
                  </p>
                </div>
              </div>
              <hr className="h-[1px] border-solid border-gray-bg" />
              <ul className=" text-sm">
                <li className="my-2 flex justify-between">
                  <p>Role</p>
                  <p>Front-end developer</p>
                </li>
                <hr className="h-[1px] border-solid border-gray-bg" />
                <li className="my-2 flex justify-between">
                  <p>Year</p>
                  <p>2023</p>
                </li>
                <hr className="h-[1px] border-solid border-gray-bg" />
              </ul>
              <div className="flex gap-4 mt-3 text-salad uppercase underline">
                <Link
                  href={
                    "https://sokilskill.github.io/project-daily-energy-dose/"
                  }
                  className="flex gap-2 justify-center"
                >
                  <span>view project</span>
                  <Image src="/arrow.svg" alt="arrow" width={14} height={14} />
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
