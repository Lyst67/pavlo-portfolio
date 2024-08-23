import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react';
import { toast } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

function copy(text: string) {
  navigator.clipboard.writeText(text);
  toast.info('Added to clipboard!');
}

type Props = {};

export default function MyContacts({}: Props) {
  return (
    <>
      <div
        onClick={() => copy('p_listopad@ukr.net')}
        className="flex gap-2 items-center cursor-copy hover:scale-110 duration-300"
      >
        <Image src={'/mail.svg'} alt="mail" width={16} height={16} />
        <span>p_listopad@ukr.net</span>
        <Image src={'/copy_button.svg'} alt="copy" width={24} height={24} />
        {/* <Link href={"mailto:p_listopad@ukr.net"} target="_top">
                p_listopad@ukr.net
              </Link> */}
      </div>
      <div
        onClick={() => copy('+380963147746')}
        className="flex gap-2 items-center cursor-copy hover:scale-110 duration-300"
      >
        <Image className="stroke-inherit" src={'/phone.svg'} alt="" width={16} height={16} />
        <span className={inter.className}>+38(096)3147746</span>
        <Image
          className="stroke-inherit"
          src={'/copy_button.svg'}
          alt="copy"
          width={24}
          height={24}
        />
        {/* <Link href={"tel:+380963147746"}>+38(096)3147746</Link> */}
      </div>
    </>
  );
}
