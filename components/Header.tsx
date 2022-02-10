import MyLink from './MyLink';

const links = [
  { href: '/about', children: 'About' },
  { href: '/projects', children: 'Projects' },
  { href: '/contact', children: 'Contact' },
];

const Header = (): JSX.Element => {
  return (
    <header>
      <div className="col-span-full sm:col-start-2 sm:col-end-7 lg:col-start-3 text-center sm:text-left text-4xl font-bold">
        <h1 className="my-4">
          <MyLink href="/">Morgan Di Val</MyLink>
        </h1>
      </div>
      <div className="col-span-full sm:col-start-7 sm:col-end-12 lg:col-end-11 text-xl text-center sm:text-right">
        <ul>
          {links.forEach((link) => {
            return (
              <MyLink href={link.href} className="inline-block m-4">
                {link.children}
              </MyLink>
            );
          })}
          ;
        </ul>
      </div>
    </header>
  );
};

export default Header;
