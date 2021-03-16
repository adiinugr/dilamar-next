import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import GoogleMaps from "../../components/GoogleMaps";

const WaktuAlamatAcara = ({
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
      <div className="w-5/6 md:w-3/4 border-gray-500 border-2 rounded-lg overflow-hidden h-screen md:h-96 relative">
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

export default WaktuAlamatAcara;
