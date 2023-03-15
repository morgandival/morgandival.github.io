import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const NotFound: NextPage = (): JSX.Element => {
  return (
    <div className="content">
      <Head>
        <title>Morgan Di Val - Page not found</title>
      </Head>
      <div className="col-start-2 col-end-12 text-2xl lg:col-start-3 lg:col-end-11">
        <p className="my-8">This is not the page you are looking for...</p>
        <p className="my-8">
          <Link href="/">
            <a className="rounded-lg bg-raisin-black py-2 px-6 text-white">
              Back to home
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFound;
