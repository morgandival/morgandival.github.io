import Image from 'next/image';

type Props = {
  heroText: string;
  heroImage: string;
};

const Hero = (props: Props): JSX.Element => {
  return (
    <>
      <div className="col-start-2 col-end-12 sm:col-start-2 sm:col-end-8 lg:col-start-3 md:text-left">
        <h2 className="text-2xl my-4 mr-4">{props.heroText}</h2>
      </div>
      <div className="col-start-2 col-end-12 sm:col-start-8 sm:col-end-11 md:col-end-12 lg:col-end-11 text-center md:text-right lg:text-right">
        <Image
          src={`${props.heroImage}.jpg`}
          alt="Morgan"
          width={350}
          height={350}
          className="m-auto rounded-full"
        />
      </div>
    </>
  );
};

export default Hero;
