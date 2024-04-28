"use client";

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import MessageForm from "../components/messageForm";
import { Toaster } from "sonner";
import ResumeButton from "../components/resumeButton";
import SocialLinks from "../components/socialLinks";
import MyContacts from "../components/myContacts";

type Props = {};

export default function Contacts({}: Props) {
  const baseClass =
    "flex gap-4 justify-center items-center bg-dark-bg w-72 h-16 rounded-lg";
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            error: `text-error ${baseClass}`,
            success: `text-success ${baseClass}`,
            info: `text-info ${baseClass}`,
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
              <MyContacts />
              <SocialLinks />
              <ResumeButton />
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
