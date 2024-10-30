import Link from 'next/link';
import Image from 'next/image';
import { SiGooglemaps } from 'react-icons/si';

export default function GoogleMapsLink() {
  return (
    <div className="w-fit">
      <Link
        className="flex gap-2 items-center hover:text-salad duration-500"
        href={'https://maps.app.goo.gl/hxBt8hcqaV8noxheA'}
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGooglemaps className="w-5 h-5" />
        <span>Brovary Kyiv area, Ukraine</span>
        <Image
          src="/lang/ua_flag.svg"
          alt="ukraine flag"
          width="0"
          height="0"
          sizes="100vw"
          className="w-5 h-4"
        />
      </Link>
    </div>
  );
}
