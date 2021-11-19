import Link from 'next/link';
import Image from 'next/image';

type Props = {
  title: string;
  description: Array<string>;
  image: string;
  liveLink: string;
  repoLink: string;
};

const ProjectCard = (props: Props) => {
  const output: Array<JSX.Element> = [];

  props.description.forEach((value) => {
    output.push(<p className="my-2">{value}</p>);
  });

  return (
    <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 my-4 p-4 bg-light-gray rounded-lg text-center flex">
      <div className="flex-grow lg:text-left p-4">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {output}
        <ul>
          <li>
            <Link href={props.liveLink}>See project live</Link>
          </li>
          <li>
            <Link href={props.repoLink}>Link to Github Repository</Link>
          </li>
        </ul>
      </div>
      <div className="relative w-30">
        <Image
          src={props.image}
          alt={props.title}
          layout="fill"
          height={300}
          width={250}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
