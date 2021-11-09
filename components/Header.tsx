import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="col-span-full sm:col-start-2 sm:col-end-7 lg:col-start-3 text-center sm:text-left text-4xl font-bold">
        <h1 className="my-4">
          <Link href="/">
            <a>Morgan Di Val</a>
          </Link>
        </h1>
      </div>
      <div className="col-span-full sm:col-start-7 sm:col-end-12 lg:col-end-11 text-xl text-center sm:text-right">
        <ul>
          <li className="inline-block m-4">
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className="inline-block m-4">
            <Link href="/">
              <a>Projects</a>
            </Link>
          </li>
          <li className="inline-block m-4 lg:mr-0">
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
