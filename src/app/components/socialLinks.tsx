import { socialLinks } from "@/lib/socialLinks";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export default function SocialLinks({}: Props) {
  return (
    <ul className="flex gap-8 items-center justify-center mb-5 md:mb-20 mx-auto text-sm">
      {socialLinks.map((link) => {
        return (
          <li key={link.alt}>
            <Link target="_blank" rel="noopener noreferrer" href={link.href}>
              <Image
                className="hover:scale-125 focus:scale-125 duration-300"
                src={link.src}
                alt={link.alt}
                width={16}
                height={16}
              />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
