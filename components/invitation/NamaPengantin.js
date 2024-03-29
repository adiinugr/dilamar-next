import Image from "next/image";
import React from "react";

export const NamaPengantin1 = ({
  namaWanita,
  ortuWanita,
  namaPria,
  ortuPria,
  customColor,
}) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} py-20 px-8 md:px-40 overflow-hidden`
      : "bg-suta-seashell text-suta-lapis-lazuli py-20 px-8 md:px-40 overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
        <div
          className="md:w-1/3 text-center font-body mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <p className="font-display text-3xl mb-3">
            {namaWanita || "Dliyan Purwana Suta, S.H."}
          </p>
          <p>
            {ortuWanita ||
              "Putra dari Bapak Drs. Zaenal Hayat dan Ibu Kuraesin"}
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0"
        >
          &
        </div>
        <div data-aos="fade-left" className="md:w-1/3 text-center font-body">
          <p className="font-display text-3xl mb-3">
            {namaPria || "Hanny Suryani, S.Pd"}.
          </p>
          <p>
            {ortuPria ||
              "Putri dari Bapak Drs. Nana Suryana (Alm.) dan Ibu Nursamsiyah"}
          </p>
        </div>
      </div>
    </div>
  );
};

export const NamaPengantin2 = ({
  namaPria,
  namaWanita,
  ortuPria,
  ortuWanita,
  customColor,
}) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} relative py-20 px-8 md:px-40 overflow-hidden`
      : "relative bg-suta-seashell text-suta-lapis-lazuli py-20 px-8 md:px-40 overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div
        data-aos="slide-right"
        className="absolute -left-10 -bottom-20 w-full h-1/2 md:h-full md:w-1/4"
      >
        <Image src="/rustic-gold/1/left.png" layout="fill" />
      </div>
      <div
        data-aos="slide-left"
        className="absolute -right-10 -top-20 w-full h-1/2 md:h-full md:w-1/4"
      >
        <Image src="/rustic-gold/1/right.png" layout="fill" />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full z-20 ">
        <div
          className="md:w-1/3 text-center font-body mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <p className="font-display text-3xl mb-3">{namaWanita}</p>
          <p>{ortuWanita}</p>
        </div>
        <div
          data-aos="zoom-in"
          className="md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0"
        >
          &
        </div>
        <div data-aos="fade-left" className="md:w-1/3 text-center font-body">
          <p className="font-display text-3xl mb-3">{namaPria}</p>
          <p>{ortuPria}</p>
        </div>
      </div>
    </div>
  );
};

export const NamaPengantinThree = ({
  namaPria,
  namaWanita,
  ortuPria,
  ortuWanita,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imagePathPria,
  imagePathWanita,
}) => {
  return (
    <div
      className={`relative ${bgColor} ${textColor} py-6 px-8 md:px-40 overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex flex-col md:flex-row w-full items-center font-body mb-8 md:mb-0"
          data-aos="fade-left"
        >
          <div className="w-full md:w-1/2 mx-4 mb-6 md:mb-0">
            <div className="bg-gray-50 w-full h-96 flex justify-center p-3 pb-8">
              <div className="w-full h-full relative">
                <Image
                  src={imagePathWanita}
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 mx-4 text-center md:text-left">
            <p className="font-display text-3xl md:text-5xl mb-3">
              {namaWanita}
            </p>
            <p>{ortuWanita}</p>
          </div>
        </div>
        <div className=" md:w-1/3 text-center font-display text-7xl md:text-8xl my-10">
          - & -
        </div>
        <div
          className="flex flex-col-reverse md:flex-row w-full items-center font-body mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <div className="w-full md:w-1/2 mx-4 text-center md:text-left">
            <p className="font-display text-3xl md:text-5xl mb-3">{namaPria}</p>
            <p>{ortuPria}</p>
          </div>
          <div className="w-full md:w-1/2 mx-4 mb-6 md:mb-0">
            <div className="bg-gray-50 w-full h-96 flex justify-center p-3 pb-8">
              <div className="w-full h-full relative">
                <Image
                  src={imagePathPria}
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
