import { Inter } from 'next/font/google';
import { toast } from 'sonner';
import { GoMail } from 'react-icons/go';
import { GoCopy } from 'react-icons/go';
import { FiPhone } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

function copy(text: string) {
  navigator.clipboard.writeText(text);
  toast.info('Added to clipboard!');
}

export default function MyContacts() {
  return (
    <>
      <div
        onClick={() => copy('p_listopad@ukr.net')}
        className="flex gap-2 items-center cursor-copy hover:scale-110 duration-300"
      >
        <GoMail className="w-4 h-4" />
        <span>p_listopad@ukr.net</span>
        <GoCopy className="w-5 h-5" />
        {/* <Link href={"mailto:p_listopad@ukr.net"} target="_top">
                p_listopad@ukr.net
              </Link> */}
      </div>
      <div
        onClick={() => copy('+380963147746')}
        className="flex gap-2 items-center cursor-copy hover:scale-110 duration-300"
      >
        <FiPhone className="w-4 h-4" />
        <span className={inter.className}>+38(096)3147746</span>
        <GoCopy className="w-5 h-5" />
        {/* <Link href={"tel:+380963147746"}>+38(096)3147746</Link> */}
      </div>
    </>
  );
}
