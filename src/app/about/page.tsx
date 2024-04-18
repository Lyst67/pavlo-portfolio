import React from "react";
import Button from "../compoents/button";
import SocialButton from "../compoents/socialButton";
import Image from "next/image";

const technologies = [
  { image: "./skills/html.svg", text: "HTML5" },
  { image: "./skills/css.svg", text: "CSS3" },
  { image: "./skills/js.svg", text: "Javascript" },
  { image: "./skills/react.svg", text: "React" },
  { image: "./skills/tailwind.svg", text: "TailwindCSS" },
  { image: "./skills/typescript.svg", text: "Typescript" },
  { image: "./skills/node.svg", text: "Node.js" },
  { image: "./skills/next.svg", text: "Next.js" },
];

type AboutProps = {};

export default function About({}: AboutProps) {
  return (
    <>
      <div className="flex p-10 mx-20 mt-10 min-h-[50vh] rounded-xl bg-gray-bg">
        <div className="w-1/3 flex justify-around">
          <h2 className="text-center font-sans font-semibold text-4xl text-black tracking-tighter">
            About Me
          </h2>
          <hr className="w-[2px] h-full border-solid border-dark-bg bg-dark-bg" />
        </div>

        <div className="w-2/3">
          <h3 className="mb-6 text-lg font-sans font-bold text-black">
            I am a full-stack developer based in Kyiv.
          </h3>
          <p className="text-base font-sans font-semibold text-dark-bg mb-10">
            I am a full-stack developer from Kyiv, looking for something
            interesting opportunities I have a background in the field of design
            and individual orders in the field of fashion. Able to work in
            contact with the client to fulfill the order as accurately as
            possible. I like to focus on availability during development.
            Passionate and interested in solutions to technical problems. I am
            currently exploring Next.js, SASS, etc. While I am not programming,
            I enjoy learning Spanish, I am developing technical devices for
            driving cars for people with disabilities. But my biggest passion is
            traveling. Learning more for improving skills.
          </p>
          <div className="flex gap-4">
            <Button>Download Resume</Button>
            <SocialButton>
              <Image src="/link.svg" alt="linkedIn" width={20} height={20} />
            </SocialButton>
            <SocialButton>
              <Image src="/gith.svg" alt="gitHub" width={20} height={20} />
            </SocialButton>
          </div>
        </div>
      </div>
      <div className="flex mx-20 my-10">
        <div className="w-1/3">
          <h2 className="mb-6 text-center font-sans font-semibold text-4xl tracking-tighter">
            My Skills
          </h2>
          <p className="text-sm font-sans text-center">
            The skills, tools, and technologies I use in my daily work.
          </p>
        </div>
        <div className="w-2/3">
          <ul className="grid grid-cols-4">
            {technologies.map((item) => {
              return (
                <li key={item.text} className="">
                  <Image
                    src={item.image}
                    alt={item.text}
                    width={64}
                    height={64}
                  />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
