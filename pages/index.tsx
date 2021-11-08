import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/Morgan.jpg';

const Home: NextPage = () => {
  return (
    <div className="col-start-3 col-end-11 grid grid-cols-12 items-center m-4">
      <Head>
        <title>Morgan Di Val - Home</title>
      </Head>
      <div className="col-start-1 col-end-9">
        <h2 className="text-2xl">
          Hi, I&apos;m Morgan, a web developer and content writer based in
          Sydney Australia.
        </h2>
      </div>
      <div className="col-start-9 col-end-13">
        <Image
          src={heroImage}
          alt="Morgan"
          className="rounded-full"
          height="300"
          width="300"
        />
      </div>
    </div>
  );
};

export default Home;
