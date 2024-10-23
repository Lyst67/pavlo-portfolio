'use client';

import MessageForm from '../components/messageForm';
import { Toaster } from 'sonner';
import ResumeButton from '../components/resumeButton';
import SocialLinks from '../components/socialLinks';
import MyContacts from '../components/myContacts';

export default function Contacts() {
  const baseClass =
    'flex gap-4 justify-center items-center bg-dark-bg w-72 h-16 rounded-lg border-solid border';
  return (
    <>
      <Toaster
        position="bottom-center"
        toastOptions={{
          unstyled: true,
          classNames: {
            error: `text-error border-error ${baseClass}`,
            success: `text-success border-salad ${baseClass}`,
            info: `text-info border-info ${baseClass}`,
          },
        }}
      />
      <div className="grid items-center p-6 sm:p-8 md:p-10 md:h-[80vh]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/2 text-center space-y-6 lg:space-y-8 2xl:space-y-10">
            <h2 className="mb-6 font-semibold text-2xl sm:text-3xl md:text-4xl tracking-tighter">
              Get in touch
            </h2>
            <p className="text-sm xl:text-base w-3/4 xl:w-2/3 mx-auto mb-5">
              Feel free to reach out if you are looking for a developer, have any questions, or just
              want to connect.
            </p>
            <div className="flex flex-col gap-5 items-center">
              <MyContacts />
              <SocialLinks />
              <ResumeButton />
            </div>
          </div>

          <div className="md:w-1/2">
            <MessageForm />
          </div>
        </div>
      </div>
    </>
  );
}
