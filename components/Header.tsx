import { ReactChild } from 'react';
import MyLink, { Props } from './MyLink';

const links = [
  { href: '/about', children: 'About', styles: 'inline-block m-4' },
  { href: '/projects', children: 'Projects', styles: 'inline-block m-4' },
  {
    href: '/contact',
    children: 'Contact',
    styles: 'inline-block m-4 md:mr-0 lg:mr-0',
  },
];

const output: Array<ReactChild> = [];

links.forEach((link) => {
  output.push(
    <li className={link.styles} key={`link-${links.indexOf(link)}`}>
      <MyLink href={link.href}>{link.children}</MyLink>
    </li>
  );
});

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="col-span-full sm:col-start-2 sm:col-end-7 lg:col-start-3 text-center sm:text-left text-4xl font-bold">
        <h1 className="my-4">
          <MyLink href="/">Morgan Di Val</MyLink>
        </h1>
      </div>
      <div className="col-span-full sm:col-start-7 sm:col-end-12 lg:col-end-11 text-xl text-center sm:text-right">
        <ul>{output}</ul>
      </div>
    </header>
  );
};

export default Header;
