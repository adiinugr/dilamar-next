import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import GoogleMaps from "../../components/GoogleMaps";
import Countdown from "react-countdown";

import { rendererTwo } from "../CountDownRenderer";

export const WaktuAlamatAcaraOne = ({
  tanggalAkad,
  waktuAkad,
  tanggalResepsi,
  waktuResepsiSesi1,
  waktuResepsiSesi2,
  waktuResepsiSesi3,
  namaTempat,
  alamatTempat,
  googleMapsUri,
  lat,
  lng,
  imagePath,
  customColor,
  buttonCustomColor,
}) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} py-16 flex flex-col items-center justify-center overflow-hidden`
      : "bg-suta-seashell text-gray-600 py-16 flex flex-col items-center justify-center overflow-hidden";

  const buttonClassName = () =>
    buttonCustomColor
      ? `w-5/6 md:w-3/4 ${buttonCustomColor} mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center`
      : "w-5/6 md:w-3/4 bg-gray-700 mt-4 text-gray-200 rounded-sm py-2 cursor-pointer flex items-center justify-center";

  return (
    <div className={containerClassName()}>
      <div className="w-5/6 md:w-3/4 border-suta-light-orange border-2 rounded-lg overflow-hidden h-screen md:h-96 relative">
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
          className="absolute -left-10 -bottom-20 w-full h-2/5 md:h-full md:w-2/4"
        >
          <Image src="/rustic-gold/1/left.png" layout="fill" />
        </div>
        <div
          data-aos="slide-left"
          className="absolute -right-10 -top-20 w-full h-2/5 md:h-full md:w-2/4"
        >
          <Image src="/rustic-gold/1/right.png" layout="fill" />
        </div>

        <div className=" flex flex-col items-center justify-center h-full w-full z-20 absolute">
          <div className="w-full flex flex-col md:flex-row">
            <div
              data-aos="zoom-in"
              className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Akad Nikah</p>
              <p>{tanggalAkad}</p>
              <p className="my-4">{waktuAkad}</p>
            </div>
            <div
              data-aos="zoom-in"
              className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Resepsi</p>
              <p>{tanggalResepsi}</p>
              <p className="mt-4">{waktuResepsiSesi1}</p>
              <p>{waktuResepsiSesi2}</p>
              <p className="mb-4">{waktuResepsiSesi3}</p>
            </div>
          </div>
          <div data-aos="zoom-in" className="text-center mt-8 px-4">
            <p className="font-semibold">{namaTempat}</p>
            <p>{alamatTempat}</p>
          </div>
        </div>
      </div>
      <div className="h-80 w-5/6 md:w-3/4 mt-4 relative border-gray-200 border-2 rounded-lg overflow-hidden">
        <GoogleMaps lat={lat} lng={lng} />
      </div>
      <a
        href={googleMapsUri}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName()}
      >
        <MdLocationOn size={20} /> Open Google Maps
      </a>
    </div>
  );
};

export const WaktuAlamatAcaraTwo = ({
  tanggalAkad,
  waktuAkad,
  tanggalResepsi,
  waktuResepsiSesi1,
  waktuResepsiSesi2,
  waktuResepsiSesi3,
  namaTempat,
  alamatTempat,
  googleMapsUri,
  lat,
  lng,
  imagePath,
  customColor,
  buttonCustomColor,
  date,
}) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} flex flex-col items-center justify-center overflow-hidden`
      : "bg-suta-seashell text-gray-600 flex flex-col items-center justify-center overflow-hidden";

  const buttonClassName = () =>
    buttonCustomColor
      ? `w-5/6 md:w-3/4 ${buttonCustomColor} mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center`
      : "w-5/6 md:w-3/4 bg-gray-700 mt-4 text-gray-200 rounded-sm py-2 cursor-pointer flex items-center justify-center";

  return (
    <div id="event" className={containerClassName()}>
      <div className="text-center ">
        <div
          data-aos="zoom-in"
          className="font-display text-4xl md:text-6xl mb-6"
        >
          Save The Date
        </div>
        <div data-aos="zoom-in" className="mb-10">
          InsyaAllah acara pernikahan akan diselenggarakan pada:
        </div>
      </div>
      <div className="w-5/6 md:w-2/4 pattern2 text-kharnisa-imam-gold rounded-lg py-10 px-4">
        <div className="flex flex-col items-center justify-center h-full w-full z-20">
          <div
            data-aos="zoom-in"
            className="px-4 md:px-0 md:w-1/2 text-center font-body mb-14"
          >
            <Image
              src="/kharnisa-imam/engagement-gold.png"
              height={60}
              width={60}
              objectFit="cover"
            />
            <p className="font-display text-4xl md:text-5xl mb-4">Akad Nikah</p>
            <p>{tanggalAkad}</p>
            <p className="my-4">{waktuAkad}</p>
          </div>
          <div
            data-aos="zoom-in"
            className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
          >
            <Image
              src="/kharnisa-imam/wedding-couple-gold.png"
              height={60}
              width={60}
              objectFit="cover"
            />
            <p className="font-display text-4xl md:text-5xl mb-4">Resepsi</p>
            <p>{tanggalResepsi}</p>
            <p className="mt-4">{waktuResepsiSesi1}</p>
            <p>{waktuResepsiSesi2}</p>
            <p className="mb-4">{waktuResepsiSesi3}</p>
          </div>
          <div data-aos="zoom-in" className="text-center mt-8 px-4 mb-14">
            <p className="font-semibold">{namaTempat}</p>
            <p>{alamatTempat}</p>
          </div>
          <div
            data-aos="zoom-in"
            className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8"
          >
            <Image
              src="/kharnisa-imam/clothes-gold.png"
              height={60}
              width={60}
              objectFit="cover"
            />
            <p className="font-display text-4xl md:text-5xl mb-4">Dresscode</p>
            <p>
              Para hadirin pria menggunakan coklat, dan wanita menggunakan merah
              muda
            </p>
          </div>
          <div className="mb-10 text-center w-full md:w-3/6">
            <div className="font-semibold mb-2 text-lg">Waktu Menuju Acara</div>
            <Countdown date={Date.parse(date)} renderer={rendererTwo} />
          </div>
          <div className="border-gray-200 border-2 rounded-lg relative w-full h-64 mb-4">
            <GoogleMaps lat={lat} lng={lng} />
          </div>
          <a
            href={googleMapsUri}
            target="_blank"
            rel="noreferrer"
            className={buttonClassName()}
          >
            <MdLocationOn size={20} /> Open Google Maps
          </a>
        </div>
      </div>
    </div>
  );
};

export const WaktuAlamatAcaraThree = ({
  bgImagePath,
  tanggalAkad,
  waktuAkad,
  tanggalResepsi,
  waktuResepsi,
  waktuResepsiSesi1,
  waktuResepsiSesi2,
  waktuResepsiSesi3,
  namaTempat,
  alamatTempat,
  googleMapsUri,
  lat,
  lng,
  customColor,
  buttonCustomColor,
}) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} py-16 flex flex-col items-center justify-center overflow-hidden`
      : "bg-suta-seashell text-suta-seashell py-16 flex flex-col items-center justify-center overflow-hidden";

  const buttonClassName = () =>
    buttonCustomColor
      ? `w-5/6 md:w-3/4 ${buttonCustomColor} mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center`
      : "w-5/6 md:w-3/4 bg-gray-300 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center";
  return (
    <div id="event" className={containerClassName()}>
      <div className="w-5/6 md:w-3/4 border-suta-seashell border-2 rounded-lg overflow-hidden h-screen md:h-96 relative">
        {bgImagePath && (
          <Image
            src={bgImagePath}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        )}
        <div className="h-full w-full bg-gray-800 absolute opacity-70" />
        <div className=" flex flex-col items-center justify-center h-full w-full z-20 absolute">
          <div className="w-full flex flex-col md:flex-row">
            <div
              data-aos="zoom-in"
              className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Akad Nikah</p>
              <p>{tanggalAkad}</p>
              <p className="my-4">{waktuAkad}</p>
            </div>
            <div
              data-aos="zoom-in"
              className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Resepsi</p>
              <p>{tanggalResepsi}</p>
              {waktuResepsi && <p className="mt-4">{waktuResepsi}</p>}
              {waktuResepsiSesi1 && (
                <p className="mt-4">Sesi 1: {waktuResepsiSesi1}</p>
              )}
              {waktuResepsiSesi2 && <p>Sesi 2: {waktuResepsiSesi2}</p>}
              {waktuResepsiSesi3 && (
                <p className="mb-4">Sesi 3: {waktuResepsiSesi3}</p>
              )}
            </div>
          </div>
          <div data-aos="zoom-in" className="text-center mt-8 px-4">
            <p className="font-semibold">{namaTempat}</p>
            <p>{alamatTempat}</p>
          </div>
        </div>
      </div>
      <div className="h-80 w-5/6 md:w-3/4 mt-4 relative border-gray-200 border-2 rounded-lg overflow-hidden">
        <GoogleMaps lat={lat} lng={lng} />
      </div>
      <a
        href={googleMapsUri}
        target="_blank"
        rel="noreferrer"
        className={buttonClassName()}
      >
        <MdLocationOn size={20} /> Open Google Maps
      </a>
    </div>
  );
};

export const WaktuAlamatAcaraFour = ({
  tanggalAkad,
  waktuAkad,
  tanggalResepsi,
  waktuResepsi,
  waktuResepsiSesi1,
  waktuResepsiSesi2,
  waktuResepsiSesi3,
  namaTempat,
  alamatTempat,
  googleMapsUri,
  lat,
  lng,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  borderColor,
  akadImagePath,
  resepsiImagePath,
  overlayBgColor = "bg-gray-800",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-gray-200",
  isResepsi = true,
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} py-8 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div
        data-aos="slide-left"
        className={`w-5/6 md:w-3/4 ${borderColor} border-2 rounded-lg overflow-hidden h-96 relative mb-4 shadow-xl`}
      >
        {akadImagePath && (
          <Image
            src={akadImagePath}
            layout="fill"
            objectFit="cover"
            className="absolute"
          />
        )}
        <div
          className={`h-full w-full ${overlayBgColor} absolute opacity-80`}
        />
        <div className="flex flex-col items-center justify-center h-full w-full z-20 absolute">
          <div className="text-center">
            <p className="font-display text-4xl mb-4">Akad Nikah</p>
            <p>{tanggalAkad}</p>
            <p className="my-4">{waktuAkad}</p>
          </div>
          <div className="text-center mt-8 px-4">
            <p className="font-semibold">{namaTempat}</p>
            <p>{alamatTempat}</p>
          </div>
        </div>
      </div>

      {isResepsi && (
        <div
          data-aos="slide-right"
          className={`w-5/6 md:w-3/4 ${borderColor} border-2 rounded-lg overflow-hidden h-96 relative shadow-xl`}
        >
          {resepsiImagePath && (
            <Image
              src={resepsiImagePath}
              layout="fill"
              objectFit="cover"
              className="absolute"
            />
          )}
          <div
            className={`h-full w-full ${overlayBgColor} absolute opacity-80`}
          />
          <div className="flex flex-col items-center justify-center h-full w-full z-20 absolute">
            <div className="">
              <div className="px-4 md:px-0 text-center font-body mb-8 md:mb-0">
                <p className="font-display text-4xl mb-4">Resepsi</p>
                <p>{tanggalResepsi}</p>
                {waktuResepsi && <p className="mt-4">{waktuResepsi}</p>}
                {waktuResepsiSesi1 && (
                  <p className="mt-4">Sesi 1: {waktuResepsiSesi1}</p>
                )}
                {waktuResepsiSesi2 && <p>Sesi 2: {waktuResepsiSesi2}</p>}
                {waktuResepsiSesi3 && (
                  <p className="mb-4">Sesi 3: {waktuResepsiSesi3}</p>
                )}
              </div>
            </div>
            <div className="text-center mt-8 px-4">
              <p className="font-semibold">{namaTempat}</p>
              <p>{alamatTempat}</p>
            </div>
          </div>
        </div>
      )}

      <div className="h-80 w-5/6 md:w-3/4 mt-4 relative border-gray-200 border-2 rounded-lg overflow-hidden">
        <GoogleMaps lat={lat} lng={lng} />
      </div>
      <a
        data-aos="zoom-in"
        href={googleMapsUri}
        target="_blank"
        rel="noreferrer"
        className={`w-5/6 md:w-3/4 ${buttonBgColor} ${buttonTextColor} mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center`}
      >
        <MdLocationOn size={20} /> Open Google Maps
      </a>
    </div>
  );
};
