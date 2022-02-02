import Image from "next/image";
import React from "react";
import Fade from "react-reveal/Fade";

import ImageLoader from "../../helpers/ImageLoader";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col-reverse md:flex-row gap-8 md:gap-24 md:justify-between px-8 md:px-24 pb-16 pt-32 md:py-0 items-center md:h-screen"
    >
      <Fade bottom>
        <div className="flex flex-col">
          <p className="text-4xl md:text-5xl font-bold mb-3 uppercase text-dark">
            Bisa Request
          </p>
          <div className="text-4xl md:text-5xl bg-main text-white font-bold px-4 py-2 self-start transform -skew-x-12">
            Semaumu
          </div>
          <p className="mt-7 text-gray-500 md:text-lg">
            Satu-satunya jasa undangan website yang bisa memenuhi keinginanmu.
            Mau minta desain seperti apapun? Boleh.
          </p>
          <button className="bg-main self-start mt-7 px-8 py-3 hover:bg-dark text-white font-semibold rounded-lg focus:outline-none focus:ring focus:ring-green-200">
            Order Now
          </button>
        </div>
        <div>
          <Image
            loader={ImageLoader}
            src="pexels-photo-2959192.jpeg"
            width={600}
            height={400}
            className="rounded-2xl"
          />
        </div>
      </Fade>
    </div>
  );
};

export default Hero;
