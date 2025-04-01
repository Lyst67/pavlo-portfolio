import Link from 'next/link';
import { HiMiniArrowDownTray } from 'react-icons/hi2';

export default function ResumeButton() {
  return (
    <button className="w-fit flex items-center gap-3 h-8 sm:h-9 lg:h-10 px-6 mx-auto rounded-lg border border-solid border-transparent hover:border-salad focus:border-salad text-medium uppercase text-salad duration-500">
      <Link
        className="flex gap-2 items-center"
        download
        target="_blank"
        rel="noopener noreferrer"
        href={
          'https://drive.google.com/file/d/1ezGt_A6R-CYbQv0EiKlIqSbkX9WyfVe_/view?usp=drive_link'
        }
      >
        <span>resume</span>
        <HiMiniArrowDownTray />
      </Link>
    </button>
  );
}
