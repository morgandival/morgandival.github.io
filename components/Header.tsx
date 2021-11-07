import Link from 'next/link';

const Header = () => {
  return (
    <header className="h-24 col-start-1 col-end-13 grid grid-cols-12 bg-indigo-dye text-white content-center">
      <div className="col-start-3 col-end-7 py-5 text-4xl font-bold">
        <Link href="/">
          <a>
            <h1>Morgan Di Val</h1>
          </a>
        </Link>
      </div>
      <div className="col-start-7 col-end-11 py-5 text-xl text-right">
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
