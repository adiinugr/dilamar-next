import Image from "next/image"
import { RiMap2Line } from "react-icons/ri"
import { Fade } from "react-reveal"
import GoogleMaps from "../parts/GoogleMaps"

const OnlyText = ({
  namaTempat,
  tanggalAkad,
  waktuAkad,
  tanggalResepsi,
  waktuResepsi,
  alamatTempat,
  googleMapsUri,
  lat,
  lng,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-white",
  buttonBorder,
  padding,
  isWithGoogleMaps = true,
  children
}) => {
  return (
    <div
      id="event"
      className={`${bgColor} ${textColor} relative px-8 py-16 md:px-32 overflow-hidden ${padding}`}
    >
      {children}
      <Fade left>
        <div className="absolute top-6 left-0">
          <Image
            src="/clients/eka-zaky/wayang-left.png"
            width={80}
            height={120}
            objectFit="contain"
          />
        </div>
      </Fade>
      <Fade right>
        <div className="absolute top-6 right-0">
          <Image
            src="/clients/eka-zaky/wayang-right.png"
            width={80}
            height={120}
            objectFit="contain"
          />
        </div>
      </Fade>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 justify-center">
        <Fade bottom>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="text-center mb-4">
              <p className="font-honey-carrot text-4xl mb-4">Akad Nikah</p>
              <p>{tanggalAkad}</p>
              <p className="">{waktuAkad}</p>
            </div>
            <div className="text-center px-4">
              <p className="font-bold text-lg">{namaTempat}</p>
              <p>{alamatTempat}</p>
            </div>
          </div>
        </Fade>

        <Fade bottom>
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="mb-4">
              <div className="px-4 md:px-0 text-center font-body mb-4 md:mb-0">
                <p className="font-honey-carrot text-4xl mb-4">Resepsi</p>
                <p>{tanggalResepsi}</p>
                {waktuResepsi && <p>{waktuResepsi}</p>}
              </div>
            </div>
            <div className="text-center  px-4">
              <p className="font-bold text-lg">{namaTempat}</p>
              <p>{alamatTempat}</p>
            </div>
          </div>
        </Fade>
      </div>

      {isWithGoogleMaps && (
        <>
          <Fade bottom>
            <div className="h-80 w-full mt-6 relative border-4 border-white rounded-lg overflow-hidden z-0 mx-auto">
              <GoogleMaps lat={lat} lng={lng} />
            </div>
          </Fade>
          <Fade bottom>
            <a
              href={googleMapsUri}
              target="_blank"
              rel="noreferrer"
              className={`w-full ${buttonBgColor} ${buttonBorder} ${buttonTextColor} mt-4 rounded-md py-2 cursor-pointer flex items-center justify-center mx-auto`}
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

export default OnlyText
