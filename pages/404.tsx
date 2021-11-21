import type { NextPage } from 'next';
import Head from 'next/head';

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col h-full">
      <Head>
        <title>Morgan Di Val - Page not found</title>
      </Head>
      <div className="m-auto">
        <p>This is not the page you are looking for</p>
        <p>Back to home</p>
      </div>
    </div>
  );
};

export default NotFound;
