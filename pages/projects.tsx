import type { NextPage } from 'next';
import Head from 'next/head';
import ProjectCard from '../components/ProjectCard';

const Projects: NextPage = () => {
  return (
    <div className="grid col-span-full grid-cols-12 my-4">
      <Head>
        <title>Morgan Di Val - Projects</title>
      </Head>
      <ProjectCard
        title="FooBar"
        description={['alpha', 'beta']}
        image="placeholder"
      />
    </div>
  );
};

export default Projects;
