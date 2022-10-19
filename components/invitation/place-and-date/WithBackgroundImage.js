import Image from "next/image"
import { RiMap2Line } from "react-icons/ri"
import { Fade } from "react-reveal"
import GoogleMaps from "../parts/GoogleMaps"

const WithBackgroundImage = ({
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
  bgColor = "bg-white",
  textColor = "text-gray-800",
  borderColor,
  bgImagePath,
  akadImagePath,
  resepsiImagePath,
  overlayBgColor = "bg-gray-800",
  overlayOpacity = "opacity-80",
  overlayClassName,
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-white",
  padding,
  isResepsi = true,
  isAkad = true,
  isWithGoogleMaps = true,
  children
}) => {
  return (
    <div
      id="event"
      className={`${bgColor} ${textColor} relative px-8 py-16 md:px-32 overflow-hidden ${padding}`}
    >
      {children}

      {bgImagePath && (
        <Image
          src={bgImagePath}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="katanikah website undangan pernikahan online"
        />
      )}

      <div className="flex flex-col md:flex-row md:gap-24 justify-center">
        {isAkad && (
          <Fade top>
            <div
              className={`w-full ${borderColor} border-2 rounded-lg overflow-hidden h-96 relative mb-4 shadow-xl`}
            >
              {akadImagePath && (
                <Image
                  src={akadImagePath}
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                  alt="katanikah website undangan pernikahan online"
                  placeholder="blur"
                />
              )}
              <div
                className={`h-full w-full ${overlayBgColor} absolute ${overlayOpacity} ${overlayClassName}`}
              />
              <div className="flex flex-col items-center justify-center h-full w-full absolute">
                <div className="text-center mb-4">
                  <p className="font-yellowtail text-4xl mb-4">Akad Nikah</p>
                  <p>{tanggalAkad}</p>
                  <p className="">{waktuAkad}</p>
                </div>
                <div className="text-center px-4">
                  <p className="font-bold text-lg">{namaTempat}</p>
                  <p>{alamatTempat}</p>
                </div>
              </div>
            </div>
          </Fade>
        )}

        {isResepsi && (
          <Fade top>
            <div
              className={`w-full ${borderColor} border-2 rounded-lg overflow-hidden h-96 relative shadow-xl`}
            >
              {resepsiImagePath && (
                <Image
                  src={resepsiImagePath}
                  layout="fill"
                  objectFit="cover"
                  className="absolute"
                  alt="katanikah website undangan pernikahan online"
                  placeholder="blur"
                />
              )}
              <div
                className={`h-full w-full ${overlayBgColor} absolute ${overlayOpacity} ${overlayClassName}`}
              />
              <div className="flex flex-col items-center justify-center h-full w-full absolute">
                <div className="mb-4">
                  <div className="px-4 md:px-0 text-center font-body mb-4 md:mb-0">
                    <p className="font-yellowtail text-4xl mb-4">Resepsi</p>
                    <p>{tanggalResepsi}</p>
                    {waktuResepsi && <p>{waktuResepsi}</p>}
                    {waktuResepsiSesi1 && <p>Sesi 1: {waktuResepsiSesi1}</p>}
                    {waktuResepsiSesi2 && <p>Sesi 2: {waktuResepsiSesi2}</p>}
                    {waktuResepsiSesi3 && <p>Sesi 3: {waktuResepsiSesi3}</p>}
                  </div>
                </div>
                <div className="text-center  px-4">
                  <p className="font-bold text-lg">{namaTempat}</p>
                  <p>{alamatTempat}</p>
                </div>
              </div>
            </div>
          </Fade>
        )}
      </div>

      {isWithGoogleMaps && (
        <>
          <Fade top>
            <div className="h-80 w-full mt-4 relative border-4 border-white rounded-lg overflow-hidden z-0 mx-auto">
              <GoogleMaps lat={lat} lng={lng} />
            </div>
          </Fade>
          <Fade top>
            <a
              data-aos="zoom-in"
              href={googleMapsUri}
              target="_blank"
              rel="noreferrer"
              className={`w-full ${buttonBgColor} ${buttonTextColor} mt-4 rounded-md py-2 cursor-pointer flex items-center justify-center mx-auto`}
            >
              <RiMap2Line size={20} className="mr-2" />{" "}
              <span>View Location</span>
            </a>
          </Fade>
        </>
      )}
    </div>
  )
}

export default WithBackgroundImage
