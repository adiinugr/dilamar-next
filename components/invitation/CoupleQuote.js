import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

const CoupleQuoteStandard = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-700",
  imagePathPria,
  imagePathWanita,
  quotePria,
  quoteWanita,
  children
}) => {
  return (
    <section
      className={`relative ${bgColor} ${textColor} py-16 px-10 md:px-32 overflow-hidden`}
    >
      {children}

      <Fade>
        <div className="bg-white shadow-blur-20 rounded-lg flex flex-col justify-center p-3 mb-8">
          <div className="w-full h-56 relative">
            <Image
              src={imagePathWanita}
              layout="fill"
              objectFit="cover"
              className="absolute"
              placeholder="blur"
              alt="katanikah website undangan pernikahan online"
            />
          </div>
          <p className="mt-4 text-center">{quoteWanita}</p>
        </div>
      </Fade>
      <Fade>
        <div className="bg-white shadow-blur-20 rounded-lg flex flex-col justify-center p-3">
          <div className="w-full h-56 relative">
            <Image
              src={imagePathPria}
              layout="fill"
              objectFit="cover"
              className="absolute"
              placeholder="blur"
              alt="katanikah website undangan pernikahan online"
            />
          </div>
          <p className="mt-4 text-center">{quotePria}</p>
        </div>
      </Fade>
    </section>
  );
};

export { CoupleQuoteStandard };
