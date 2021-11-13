import type { NextPage } from 'next';
import Head from 'next/head';
import Card from '../components/Card';

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Morgan Di Val - Projects</title>
      </Head>
      <Card title="FooBar" />
    </div>
  );
};

export default Projects;
