import type { NextPage } from "next";
import Head from "next/head";
import ProjectCard from "../components/ProjectCard";

const Projects: NextPage = (): JSX.Element => {
  const projectCards = [
    {
      title: "Till Counter",
      description: [
        "This project is a basic React app that lets you count all of the money by adding a series of input fields together and displaying a total.",
        "Tech used: React, TypeScript",
      ],
      slug: "till-counter",
    },
    {
      title: "Dice Roller",
      description: [
        "A basic React app that generates random dice rolls based on the selected die.",
        "Dice Available: d4, d6, d8, d10, d12, d20, d100.",
        "Tech used: React, TypeScript.",
      ],
      slug: "dice-roller",
    },
  ];

  const cardOutput: JSX.Element[] = [];

  projectCards.forEach((card) => {
    cardOutput.push(
      <ProjectCard
        title={card.title}
        description={card.description}
        slug={card.slug}
        key={`card-${projectCards.indexOf(card)}`}
      />
    );
  });

  return (
    <div className="content">
      <Head>
        <title>Morgan Di Val - Projects</title>
      </Head>
      {cardOutput}
    </div>
  );
};

export default Projects;
