import Link from 'next/link';

const Header = () => {
  return (
    <header className="grid grid-cols-12 items-center h-24">
      <div className="col-start-3 col-end-7 text-4xl font-bold">
        <h1>
          <Link href="/">
            <a>Morgan Di Val</a>
          </Link>
        </h1>
      </div>
      <div className="col-start-7 col-end-11 text-xl text-right">
        <ul className="">
          <li className="inline-block m-3">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="inline-block m-3">
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li className="inline-block m-3">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
