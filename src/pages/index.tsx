import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../src/components/Hero';

const Index: NextPage = (): JSX.Element => {
  return (
    <div className="content items-center">
      <Head>
        <title>Morgan Di Val - Home</title>
      </Head>
      <Hero
        heroText="G'day! I'm Morgan, a web developer and content writer based
          in Sydney Australia."
        heroImage="morgan"
      />
    </div>
  );
};

export default Index;
