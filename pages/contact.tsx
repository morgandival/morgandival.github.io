import type { NextPage } from 'next';
import Head from 'next/head';

const Contact: NextPage = () => {
  const contactMethods = [
    {
      name: 'Email',
      colour: 'bg-raisin-black',
      icon: 'bi-envelope',
      link: 'mailto:morgandival@gmail.com',
    },
    {
      name: 'LinkedIn',
      colour: 'bg-indigo-dye',
      icon: 'bi-linkedin',
      link: 'https://www.linkedin.com/in/morgandival',
    },
    {
      name: 'GitHub',
      colour: 'bg-raisin-black',
      icon: 'bi-github',
      link: 'https://github.com/morgandival',
    },
    {
      name: 'Twitter',
      colour: 'bg-oxford-blue',
      icon: 'bi-twitter',
      link: 'https://twitter.com/morgandival',
    },
    {
      name: 'Blog',
      colour: 'bg-raisin-black',
      icon: 'bi-pen',
      link: 'https://www.garrulousgrimoire.com',
    },
  ];

  const outputContactMethods: JSX.Element[] = [];

  contactMethods.forEach((obj) => {
    outputContactMethods.push(
      <a
        className={`block rounded-lg py-2 px-6 text-xl ${obj.colour} m-4 text-white`}
        href={obj.link}
      >
        <i className={'bi ' + obj.icon}></i>
        {' ' + obj.name}
      </a>
    );
  });

  return (
    <div className="content">
      <Head>
        <title>Morgan Di Val - Contact</title>
      </Head>
      <div className="col-start-2 col-end-12 lg:col-start-5 lg:col-end-9">
        <h2 className="my-8 text-2xl font-bold">Want to get in touch?</h2>
      </div>
      <div className="col-start-2 col-end-12 lg:col-start-5 lg:col-end-9">
        {outputContactMethods}
      </div>
    </div>
  );
};

export default Contact;
