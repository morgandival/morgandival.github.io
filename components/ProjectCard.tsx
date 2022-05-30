import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  description: Array<string>;
  slug: string;
};

const ProjectCard = (props: Props) => {
  const descriptionOutput: JSX.Element[] = [];

  props.description.forEach((value) => {
    descriptionOutput.push(
      <p key={`card-line-${props.description.indexOf(value)}`} className="my-2">
        {value}
      </p>
    );
  });

  return (
    <div className="col-start-2 col-end-12 my-4 flex flex-wrap rounded-lg bg-light-gray p-4 text-center md:flex-nowrap lg:col-start-3 lg:col-end-11 lg:flex-nowrap">
      <div className="h-auto w-full flex-grow p-4 md:w-3/5 md:text-left lg:w-3/5 lg:text-left">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {descriptionOutput}
        <ul>
          <li className="my-4">
            <Link href={`https://morgandival.github.io/${props.slug}`}>
              <a className="rounded-lg bg-raisin-black py-2 px-6 text-white">
                Live Project
              </a>
            </Link>
          </li>
          <li className="my-4">
            <Link href={`https://github.com/morgandival/${props.slug}`}>
              <a className="rounded-lg bg-raisin-black py-2 px-6 text-white">
                Github Repository
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="relative w-full md:w-2/5 lg:w-2/5">
        <Image
          src={`/${props.slug}.jpg`}
          alt={props.title}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
