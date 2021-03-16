import Image from "next/image";

const Hero = ({ name, date, customColor, imagePath }) => {
  const containerClassName = () =>
    customColor
      ? `h-screen relative ${customColor} overflow-hidden`
      : "h-screen relative bg-suta-seashell overflow-hidden";

  return (
    <div className={containerClassName()}>
      {imagePath && (
        <>
          <Image
            src={imagePath}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
          <div className="h-full w-full bg-gray-800 absolute opacity-60" />
        </>
      )}

      <div
        data-aos="slide-right"
        className="absolute -left-10 -bottom-20 w-full h-2/5 md:h-4/5 md:w-2/4"
      >
        <Image src="/rustic-gold/1/left.png" layout="fill" />
      </div>
      <div
        data-aos="slide-left"
        className="absolute -right-10 -top-20 w-full h-2/5 md:h-4/5 md:w-2/4"
      >
        <Image src="/rustic-gold/1/right.png" layout="fill" />
      </div>

      <div
        data-aos="fade-up"
        className="h-full w-full absolute flex flex-col justify-center items-center"
      >
        <div className="text-2xl md:text-3xl font-semibold">The Wedding Of</div>
        <div className="font-display text-6xl md:text-8xl my-4">{name}</div>
        <div className="text-xl md:text-2xl">{date}</div>
      </div>
    </div>
  );
};

export default Hero;
