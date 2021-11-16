import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const Projects: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Morgan Di Val - Projects</title>
      </Head>
      <ProjectCard title="FooBar" description={['alpha', 'beta']} image="" />
    </div>
  );
};

export default Projects;
