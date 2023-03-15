import type { NextPage } from "next";
import Head from "next/head";

const About: NextPage = (): JSX.Element => {
  const aboutText = [
    `I'm a web developer based in Sydney, Australia.`,
    `I'm proficient with HTML, CSS, JavaScript, PHP and SQL.`,
    `I love the creative and technical challenges inherent in web development.`,
    `I'm always learning about new things.`,
  ];

  const outputAboutText: JSX.Element[] = [];

  aboutText.forEach((value) => {
    outputAboutText.push(
      <p className="col-start-2 col-end-12 text-left lg:col-start-3 lg:col-end-11">
        {value}
      </p>
    );
  });

  return (
    <div className="content text-xl">
      <Head>
        <title>Morgan Di Val - About</title>
      </Head>
      <h2 className="col-start-2 col-end-12 my-4 text-center text-3xl font-bold lg:col-start-3 lg:col-end-11 lg:text-left">
        A little about me
      </h2>
      {outputAboutText}
    </div>
  );
};

export default About;
