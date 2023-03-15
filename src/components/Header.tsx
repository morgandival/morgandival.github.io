import { ReactChild } from "react";
import MyLink from "./MyLink";

const links = [
  {
    href: "/about",
    children: "About",
    styles: "inline-block m-4",
  },
  {
    href: "/projects",
    children: "Projects",
    styles: "inline-block m-4",
  },
  {
    href: "/contact",
    children: "Contact",
    styles: "inline-block m-4 md:mr-0 lg:mr-0",
  },
];

const output: Array<ReactChild> = [];

links.forEach((link) => {
  output.push(
    <li
      className={link.styles}
      key={`link-${links.indexOf(link)}`}
    >
      <MyLink href={link.href}>{link.children}</MyLink>
    </li>
  );
});

const Header = (): JSX.Element => {
  return (
    <header className="py-4">
      <div className="col-span-full text-center text-4xl font-bold sm:col-start-2 sm:col-end-7 sm:text-left lg:col-start-3">
        <h1 className="my-4">
          <MyLink href="/">Morgan Di Val</MyLink>
        </h1>
      </div>
      <div className="col-span-full text-center text-xl sm:col-start-7 sm:col-end-12 sm:text-right lg:col-end-11">
        <ul>{output}</ul>
      </div>
    </header>
  );
};

export default Header;
