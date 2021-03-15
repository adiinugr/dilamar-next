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
}) => {
  return (
    <div className="bg-suta-seashell text-suta-seashell py-16 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-5/6 md:w-3/4 border-suta-seashell border-2 rounded-lg overflow-hidden h-screen md:h-96 relative">
        <Image
          src="/suta-hanny/suta-hany2.jpg"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="h-full w-full bg-gray-800 absolute opacity-60" />
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
        className="w-5/6 md:w-3/4 bg-gray-700 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center"
      >
        <MdLocationOn size={20} /> Open Google Maps
      </a>
    </div>
  );
};

export default WaktuAlamatAcara;
