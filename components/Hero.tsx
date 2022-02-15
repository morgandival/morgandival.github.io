import Image from 'next/image';

type Props = {
  heroText: string;
  heroImage: string;
};

const Hero = (props: Props): JSX.Element => {
  return (
    <>
      <div className="col-start-2 col-end-12 sm:col-start-2 sm:col-end-8 md:text-left lg:col-start-3">
        <h2 className="my-4 mr-4 text-2xl">{props.heroText}</h2>
      </div>
      <div className="col-start-2 col-end-12 text-center sm:col-start-8 sm:col-end-11 md:col-end-12 md:text-right lg:col-end-11 lg:text-right">
        <Image
          src={`${props.heroImage}.jpg`}
          alt={props.heroImage}
          width={350}
          height={350}
          className="m-auto rounded-full"
        />
      </div>
    </>
  );
};

export default Hero;
