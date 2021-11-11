type Props = {
  title: string;
};

const Card = (props: Props) => {
  return (
    <div>
      <p>{props.title} This is a card.</p>
    </div>
  );
};

export default Card;
