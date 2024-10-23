import { FaRegCopyright } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <hr className="h-[1px] border-solid border-gray-txt" />
      <div className="flex gap-1 text-xs tracking-tighter sm:tracking-normal h-16 px-8 items-center justify-center">
        <FaRegCopyright className="w-2 h-2" />
        <span>2024 | Created with ❤️️ by Pavlo Lystopad</span>
      </div>
      <hr className="h-[1px] border-solid border-gray-txt" />
    </footer>
  );
}
