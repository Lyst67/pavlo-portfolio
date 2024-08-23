/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Image from 'next/image';
import { flags, technologies } from '@/lib/skills';
import ContactMeButtons from '../components/contactMeButtons';

type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <div className="px-8 md:px-12 lg:px-20">
      <div className="flex flex-col lg:flex-row lg:gap-5 py-5 min-h-[30vh]">
        <div className="lg:w-1/3 flex justify-around">
          <div className="w-full mb-6 grid  sm:grid-cols-2  sm:justify-around lg:grid-cols-1">
            <h2 className="my-auto lg:mb-4 text-center font-semibold text-2xl  md:text-4xl tracking-tighter">
              About Me
            </h2>
            <div className="mt-4 w-full flex md:items-center justify-center">
              <div className="w-40 md:w-44 lg:w-52 rounded-lg overflow-hidden shadow-[5px_6px_2px_9px_rgba(144,144,144,0.20)]">
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

          <hr className="hidden lg:block w-[2px] h-full border-solid border-gray-bg bg-gray-bg" />
        </div>

        <div className="relative h-[85vh] lg:w-2/3 rounded-xl bg-gradient-to-br from-base-bg via-gray-700 to-base-bg">
          <Image
            src={'/images/black7.webp'}
            alt="spain cost"
            width={0}
            height={0}
            sizes="100vw"
            className="mix-blend-overlay w-full h-[85vh] object-cover opacity-70"
          />
          <div className="absolute top-[50%] md:top-[35%] -translate-y-[50%] p-8">
            <h3 className="mb-2 md:mb-6 md:text-lg font-bold">
              I am a full-stack developer based in Kyiv.
            </h3>
            <hr className="lg:hidden mb-2 h-[1px] border-solid border-gray-bg" />
            <p className="text-sm text-text md:text-base font-semibold mb-10 opacity-85">
              I'm a full-stack developer from Kyiv, looking for some interesting opportunities I
              have a background in the field of design and individual orders in the field of
              fashion. Able to work in contact with the client to fulfill the order as accurately as
              possible. I like to focus on availability during development. Passionate and
              interested in solutions to technical problems. I am currently exploring Next.js, SASS,
              Docker, etc. <br /> While I am not programming, I enjoy learning Spanish and riding a
              handbike. Also, I am developing technical devices for driving cars for people with
              disabilities. But my biggest passion is traveling. I also study more for improving
              skills.
            </p>
            <ContactMeButtons />
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col md:flex-row p-5 sm:p-8 md:p-10 mt-10 min-h-[30vh] rounded-xl bg-gray-bg">
        <div className="md:w-1/3 flex justify-around">
          <div className="grid">
            <h2 className="mb-4 text-center font-semibold text-2xl sm:text-3xl md:text-4xl text-black tracking-tighter">
              About Me
            </h2>
            <div className="w-full flex md:items-center justify-center">
              <div className="md:block md:w-44 lg:w-52 rounded-lg overflow-hidden shadow-[6px_14px_0px_10px_rgba(144,144,144,0.50)] md:shadow-[10px_24px_0px_10px_rgba(144,144,144,0.50)]">
                <Image
                  src="/images/second1.png"
                  alt="my photo"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <hr className="hidden md:block w-[2px] h-full border-solid border-dark-bg bg-dark-bg" />
        </div>

        <div className="md:w-2/3">
          <h3 className="mb-2 md:mb-6 lg:text-lg font-bold text-black">
            I am a full-stack developer based in Kyiv.
          </h3>
          <hr className="md:hidden mb-2 h-[1px] border-solid border-dark-bg" />
          <p className="text-sm lg:text-base font-semibold text-dark-bg mb-10">
            I am a full-stack developer from Kyiv, looking for some interesting
            opportunities I have a background in the field of design and
            individual orders in the field of fashion. Able to work in contact
            with the client to fulfill the order as accurately as possible. I
            like to focus on availability during development. Passionate and
            interested in solutions to technical problems. I am currently
            exploring Next.js, SASS, Docker, etc. <br /> While I am not
            programming, I enjoy learning Spanish and riding a handbike. Also, I
            am developing technical devices for driving cars for people with
            disabilities. But my biggest passion is traveling. Learning more for
            improving skills.
          </p>
          <ContactMeButtons />
        </div>
      </div> */}
      <div className="flex flex-col lg:flex-row mt-8">
        <div className="lg:w-1/3 text-center">
          <h2 className="mb-4 lg:mb-6 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
            My Skills
          </h2>
          <p className="mb-6 text-sm lg:text-base mx-auto">
            The skills, tools, and technologies I use in my daily work and learn now.
          </p>
        </div>
        <div className="lg:w-2/3">
          <ul className="grid grid-cols-4 gap-y-4">
            {technologies.map((item) => {
              return (
                <li key={item.text} className="flex flex-col gap-2 items-center">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <span className="text-xs sm:text-sm md:text-base">{item.text}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="mt-5 h-[1px] border-solid border-gray-txt" />
      <div className="flex flex-col md:flex-row my-8">
        <div className="md:w-1/3">
          <h2 className="mb-6 text-center font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
            Languages
          </h2>
        </div>
        <div className="md:w-2/3">
          <ul className="grid grid-cols-3 md:grid-cols-4">
            {flags.map((flag) => {
              return (
                <li key={flag.description} className="flex flex-col gap-2 items-center">
                  <div className="rounded-full overflow-hidden">
                    <Image
                      src={flag.src}
                      alt={flag.description}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className="w-10 h-10 sm:w-12 sm:h-12"
                    />
                  </div>
                  <span className="text-sm sm:text-base">{flag.level}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
