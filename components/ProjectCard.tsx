import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  description: Array<string>;
  slug: string;
};

const ProjectCard = (props: Props) => {
  const descriptionOutput: Array<JSX.Element> = [];

  props.description.forEach((value) => {
    descriptionOutput.push(<p className="my-2">{value}</p>);
  });

  return (
    <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 my-4 p-4 bg-light-gray rounded-lg text-center flex flex-wrap md:flex-nowrap lg:flex-nowrap">
      <div className="flex-grow md:text-left lg:text-left p-4 h-auto w-full md:w-3/5 lg:w-3/5">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {descriptionOutput}
        <ul>
          <li className="my-2">
            <Link href={`https://morgandival.github.io/${props.slug}`}>
              Live Project
            </Link>
          </li>
          <li className="my-2">
            <Link href={`https://github.com/morgandival/${props.slug}`}>
              Github Repository
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
