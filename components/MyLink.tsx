import { HTMLAttributes, ReactChild } from 'react';
import Link from 'next/link';

export interface Props extends HTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactChild;
}

const MyLink = ({ href, children, ...rest }: Props) => {
  return (
    <Link href={href}>
      <a {...rest}>{children}</a>
    </Link>
  );
};

export default MyLink;
