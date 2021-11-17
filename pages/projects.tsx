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
        title="Till Counter"
        description={[
          'This should be a paragraph.',
          'This should also be a paragraph.',
        ]}
        image="Morgan"
      />
    </div>
  );
};

export default Projects;
