import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const NotFound: NextPage = () => {
  return (
    <div className="content">
      <Head>
        <title>Morgan Di Val - Page not found</title>
      </Head>
      <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 text-2xl">
        <p className="my-8">This is not the page you are looking for.</p>
        <p className="my-8">
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
