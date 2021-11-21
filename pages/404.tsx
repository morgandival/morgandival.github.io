import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Morgan Di Val - Page not found</title>
      </Head>
      <div className="m-auto text-xl">
        <p>This is not the page you are looking for.</p>
        <p>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
