import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/morgan.jpg';

const Index: NextPage = () => {
  return (
    <div className="content items-center">
      <Head>
        <title>Morgan Di Val - Home</title>
      </Head>
      <div className="col-start-2 col-end-12 sm:col-start-2 sm:col-end-8 lg:col-start-3 md:text-left">
        <h2 className="text-2xl my-4 mr-4">
          G&apos;day! I&apos;m Morgan, a web developer and content writer based
          in Sydney Australia.
        </h2>
      </div>
      <div className="col-start-2 col-end-12 sm:col-start-8 sm:col-end-11 md:col-end-12 lg:col-end-11">
        <Image src={heroImage} alt="Morgan" className="rounded-full" />
      </div>
    </div>
  );
};

export default Index;
