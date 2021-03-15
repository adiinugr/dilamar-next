import Image from "next/image";

const Hero = ({ name, date }) => {
  return (
    <div className="h-screen relative bg-suta-seashell overflow-hidden">
      <Image
        src="/suta-hanny/suta-hany1.jpg"
        layout="fill"
        objectFit="cover"
        className="absolute"
      />
      <div className="h-full w-full bg-gray-800 absolute opacity-60" />

      <div
        data-aos="fade-up"
        className="h-full w-full absolute text-suta-seashell flex flex-col justify-center items-center"
      >
        <div className="text-2xl font-semibold">The Wedding Of</div>
        <div className="font-display text-6xl md:text-7xl my-4">{name}</div>
        <div className="text-xl">{date}</div>
      </div>
    </div>
  );
};

export default Hero;
