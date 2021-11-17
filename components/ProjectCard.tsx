import Image from 'next/image';

type Props = {
  title: string;
  description: Array<string>;
  image: string;
};

const ProjectCard = (props: Props) => {
  const output: Array<JSX.Element> = [];

  props.description.forEach((value) => {
    output.push(<p>{value}</p>);
  });

  const projectCardImage = `/${props.image}.jpg`;

  return (
    <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 my-4 p-4 bg-light-gray rounded-lg text-center flex flex-grow flex-wrap">
      <div className="flex-grow">
        <h3 className="text-xl font-bold">{props.title}</h3>
        {output}
        <p>Insert image here.</p>
      </div>
      <div>
        <Image
          src={projectCardImage}
          alt={props.title}
          width={350}
          height={350}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
