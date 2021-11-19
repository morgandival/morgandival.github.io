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
          'This project is a basic React App that lets you count all of the money by adding a series of input fields together and displaying a total.',
          'Tech used: React, TypeScript',
        ]}
        image="/till-counter.jpg"
        liveLink="https://morgandival.github.io/till-counter"
        repoLink="https://github.com/morgandival/till-counter"
      />
    </div>
  );
};

export default Projects;
