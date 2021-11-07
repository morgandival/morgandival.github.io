import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import heroImage from '../public/Morgan.jpg';

const Home: NextPage = () => {
  return (
    <div className="col-start-3 col-end-11">
      <Head>
        <title>Morgan Di Val - Home</title>
      </Head>
      <div>
        <h2 className="text-2xl">
          Hi, I&apos;m Morgan, a web developer and content writer based in
          Sydney Australia.
        </h2>
      </div>
      <div className="col-start-8 col-end-11">
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
