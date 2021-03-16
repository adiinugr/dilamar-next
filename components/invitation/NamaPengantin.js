import React from "react";

export const NamaPengantin1 = () => {
  return (
    <div className="bg-suta-seashell py-20 px-8 md:px-40 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-center h-full w-full z-20 text-suta-lapis-lazuli">
        <div
          className="md:w-1/3 text-center font-body mb-8 md:mb-0"
          data-aos="fade-right"
        >
          <p className="font-display text-3xl mb-3">
            Dliyan Purwana Suta, S.H.
          </p>
          <p>Putra dari Bapak Drs. Zaenal Hayat dan Ibu Kuraesin</p>
        </div>
        <div
          data-aos="zoom-in"
          className="md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0"
        >
          &
        </div>
        <div data-aos="fade-left" className="md:w-1/3 text-center font-body">
          <p className="font-display text-3xl mb-3">Hanny Suryani, S.Pd.</p>
          <p>Putri dari Bapak Drs. Nana Suryana (Alm.) dan Ibu Nursamsiyah</p>
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
  bgColor,
  textColor,
}) => {
  const containerClassName = () =>
    bgColor && textColor
      ? `${bgColor} ${textColor} py-20 px-8 md:px-40 overflow-hidden`
      : "bg-suta-seashell text-suta-lapis-lazuli py-20 px-8 md:px-40 overflow-hidden";

  return (
    <div className={containerClassName()}>
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
