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
          'This project is a basic React app that lets you count all of the money by adding a series of input fields together and displaying a total.',
          'Tech used: React, TypeScript',
        ]}
        image="/till-counter.jpg"
        liveLink="https://morgandival.github.io/till-counter"
        repoLink="https://github.com/morgandival/till-counter"
      />
      <ProjectCard
        title="Dice Roller"
        description={[
          'A basic React app that generates random dice rolls based on the selected die.',
          'Dice Available: d4, d6, d8, d10, d12, d20, d100.',
          'Tech used: React, TypeScript.',
        ]}
        image="/dice-roller.jpg"
        liveLink="https://morgandival.github.io/dice-roller"
        repoLink="https://github.com/morgandival/dice-roller"
      />
    </div>
  );
};

export default Projects;
