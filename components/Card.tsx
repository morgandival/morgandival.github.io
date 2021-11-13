type Props = {
  title: string;
};

const Card = (props: Props): JSX.Element => {
  return (
    <div>
      <p>{props.title} This is a card.</p>
    </div>
  );
};

export default Card;
