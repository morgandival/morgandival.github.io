import Image from 'next/image';

type Props = {
  title: string;
  description: Array<string>;
  image: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div className="col-start-2 col-end-12 lg:col-start-3 lg:col-end-11 my-4 p-4 bg-light-gray rounded">
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.image}.jpg</p>
    </div>
  );
};

export default ProjectCard;
