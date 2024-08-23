import React from 'react';
import Button from './button';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import LinkRoundButton from './linkRoundButton';

type Props = {};

export default function ContactMeButtons({}: Props) {
  return (
    <div className="flex gap-4 items-center">
      <Button>
        <Link href={'/contacts'}>contact me</Link>
      </Button>
      <LinkRoundButton href="https://www.linkedin.com/in/pavlo-lystopad/">
        <FaLinkedinIn className="w-6 h-6" />
      </LinkRoundButton>
      <LinkRoundButton href="https://github.com/Lyst67">
        <FaGithub className="w-6 h-6" />
      </LinkRoundButton>
    </div>
  );
}
