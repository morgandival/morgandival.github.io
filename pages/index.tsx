import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/Morgan.jpg';

const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-12 items-center my-8">
      <Head>
        <title>Morgan Di Val - Home</title>
      </Head>
      <div className="col-start-3 col-end-8">
        <h2 className="text-2xl mr-4">
          G&apos;day! I&apos;m Morgan, a web developer and content writer based
          in Sydney Australia.
        </h2>
      </div>
      <div className="col-start-8 col-end-11 text-right">
        <Image src={heroImage} alt="Morgan" className="rounded-full ml-4" />
      </div>
    </div>
  );
};

export default Home;
