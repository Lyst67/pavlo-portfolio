import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';

type LinkToButtonProps = {
  children: React.ReactNode;
  href: string;
};

export default function LinkToButton({ children, href }: LinkToButtonProps) {
  return (
    <div className="duration-300 transform hover:scale-110 text-salad text-sm uppercase">
      <Link href={href} className="flex gap-2 items-center">
        <span>{children}</span>
        <GoArrowUpRight className="w-5 h-5" />
      </Link>
      <hr className="w-full h-[1px] border-solid border-salad" />
    </div>
  );
}
