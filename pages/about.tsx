import type { NextPage } from 'next';
import Head from 'next/head';

const About: NextPage = () => {
  const aboutText = [
    'This is some dummy place holder text.',
    'This is some more dummy place holder text.',
  ];

  const outputAboutText: JSX.Element[] = [];

  aboutText.forEach((value) => {
    outputAboutText.push(
      <p className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 text-left">
        {value}
      </p>
    );
  });

  return (
    <div className="content text-xl">
      <Head>
        <title>Morgan Di Val - About</title>
      </Head>
      {outputAboutText}
    </div>
  );
};

export default About;
