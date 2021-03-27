import Image from "next/image";
import React from "react";

export const GalleryOne = () => {
  return (
    <div
      id="gallery"
      className="bg-kharnisa-imam-silver text-kharnisa-imam-gold py-10"
    >
      <div className="text-center font-display text-4xl md:text-5xl mb-8">
        Gallery
      </div>
      <div className="text-center my-6">#MenjadiImamnyaNisa</div>
      <div
        data-aos="fade-up"
        className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
      >
        <Image
          src="/kharnisa-imam/couple.png"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div
        data-aos="fade-up"
        className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
      >
        <Image
          src="/kharnisa-imam/couple2.png"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div
        data-aos="fade-up"
        className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
      >
        <Image
          src="/kharnisa-imam/couple3.png"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div
        data-aos="fade-up"
        className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
      >
        <Image
          src="/kharnisa-imam/couple4.png"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
      <div
        data-aos="fade-up"
        className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
      >
        <Image
          src="/kharnisa-imam/couple5.png"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
      </div>
    </div>
  );
};
