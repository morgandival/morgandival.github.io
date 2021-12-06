import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Morgan Di Val - Page not found</title>
      </Head>
      <div className="m-auto text-2xl">
        <p className="m-4">This is not the page you are looking for.</p>
        <p className="m-4">
          <Link href="/">
            <a className="bg-raisin-black text-white rounded-lg py-2 px-6">
              Back to home
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
