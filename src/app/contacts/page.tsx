"use client";

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import MessageForm from "../components/messageForm";
import { Toaster, toast } from "sonner";

type Props = {};
function copy(text: string) {
  navigator.clipboard.writeText(text);
}

export default function Contacts({}: Props) {
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            error:
              "flex gap-4 justify-center items-center bg-dark-bg text-error w-72 h-16 rounded-lg",
            success:
              "flex gap-4 justify-center items-center bg-dark-bg text-success w-72 h-16 rounded-lg",
          },
        }}
      />
      <div className="p-10 h-[80vh]">
        <div className="flex gap-6">
          <div className="w-1/2 text-center">
            <h2 className="mb-6 font-semibold text-4xl tracking-tighter">
              Get in touch
            </h2>
            <p className="text-sm w-3/4 mx-auto mb-5">
              Feel free to reach out if you're looking for a developer, have any
              questions, or just want to connect.
            </p>
            <div className="flex flex-col gap-5 items-center">
              <div className="flex gap-2 items-center underline">
                <Image src={"/mail.svg"} alt="" width={16} height={16} />
                <span onClick={() => copy("p_listopad@ukr.net")}>
                  p_listopad@ukr.net
                </span>
                {/* <Link href={"mailto:p_listopad@ukr.net"} target="_top">
                p_listopad@ukr.net
              </Link> */}
              </div>
              <div className="flex gap-2 items-center">
                <Image src={"/phone.svg"} alt="" width={16} height={16} />
                <Link href={"tel:+380963147746"}>+38(096)3147746</Link>
              </div>
              <div className="flex gap-6 items-center text-sm">
                <Link href={"https://github.com/Lyst67"}>
                  <Image src={"/gith.svg"} alt="" width={16} height={16} />
                </Link>
                <Link href={"https://www.linkedin.com/in/pavlo-lystopad/"}>
                  <Image src={"/link.svg"} alt="" width={16} height={16} />
                </Link>
                <Link href={"https://wa.link/9x1h4y"}>
                  <Image src={"/whatsapp.svg"} alt="" width={16} height={16} />
                </Link>
                <Link href={"https://t.me/PavloLystopad"}>
                  <Image src={"/telegram.svg"} alt="" width={16} height={16} />
                </Link>
              </div>
              <div className="w-fit mx-auto mt-10 text-center uppercase text-salad duration-300 transform hover:scale-110">
                <Link className="flex gap-2 items-center" href={"/work/others"}>
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
            </div>
          </div>

          <div className="w-1/2">
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
}
