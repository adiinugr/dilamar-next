import Image from "next/image"
import { Fade } from "react-reveal"
import { TitleH1 } from "../parts/BigTitle"

const SimpleImage = ({
  title,
  subtitle,
  namaPria,
  namaWanita,
  ortuPria,
  ortuWanita,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imagePathPria,
  imagePathWanita,
  manFirst,
  children
}) => {
  return (
    <div
      id="couple"
      className={`relative ${bgColor} ${textColor} py-16 px-10 md:px-32 overflow-hidden`}
    >
      {children}

      <Fade top>
        <>
          {title && <TitleH1>{title}</TitleH1>}
          {subtitle && <p className="text-center mb-6">{subtitle}</p>}
        </>
      </Fade>

      <div
        className={`flex ${
          manFirst
            ? "flex-col-reverse md:flex-row-reverse"
            : "flex-col md:flex-row"
        } items-center justify-center`}
      >
        <div className={`flex flex-col w-full items-center font-body md:mb-0`}>
          {imagePathWanita && (
            <div className="w-full mx-4 mb-6 md:mb-0 ">
              <Fade top>
                <div className="w-full h-64 flex justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src={imagePathWanita}
                      layout="fill"
                      objectFit="contain"
                      className="absolute"
                      placeholder="blur"
                      alt="katanikah website undangan pernikahan online"
                    />
                  </div>
                </div>
              </Fade>
            </div>
          )}

          <div className="w-full mx-4 text-center md:mt-8">
            <Fade top>
              <p className="font-yellowtail text-3xl md:text-4xl mb-3">
                {namaWanita}
              </p>
              <p className="text-xl">{ortuWanita}</p>
            </Fade>
          </div>
        </div>
        <Fade top>
          <div className=" md:w-1/3 text-center font-yellowtail text-6xl md:text-8xl my-10">
            &
          </div>
        </Fade>
        <div className="flex flex-col-reverse w-full items-center font-body md:mb-0">
          <div className="w-full mx-4 text-center md:mt-8">
            <Fade top>
              <p className="font-yellowtail text-3xl md:text-4xl mb-3">
                {namaPria}
              </p>
              <p className="text-xl">{ortuPria}</p>
            </Fade>
          </div>
          {imagePathPria && (
            <div className="w-full mx-4 mb-6 md:mb-0">
              <Fade top>
                <div className="w-full h-64 flex justify-center">
                  <div className="w-full h-full relative">
                    <Image
                      src={imagePathPria}
                      layout="fill"
                      objectFit="contain"
                      className="absolute"
                      placeholder="blur"
                      alt="katanikah website undangan pernikahan online"
                    />
                  </div>
                </div>
              </Fade>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SimpleImage
