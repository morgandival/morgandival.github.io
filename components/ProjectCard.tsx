type Props = {
  title: string;
  description: Array<string>;
  image: string;
};

const ProjectCard = (props: Props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.image}.jpg</p>
    </div>
  );
};

export default ProjectCard;
