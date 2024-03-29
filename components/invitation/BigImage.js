import Image from "next/image";
import React from "react";

const BigImage = ({ imagePath }) => {
  return (
    <div className="w-full flex justify-center items-center bg-suta-seashell pt-10 md:py-10 px-8 md:px-44 ">
      <div
        data-aos="zoom-in"
        className="relative w-full h-80 md:h-96 border border-suta-light-orange rounded-lg overflow-hidden"
      >
        <Image
          src={imagePath}
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
    </div>
  );
};

export default BigImage;
