import Image from "next/image"
import { Fade } from "react-reveal"

const RectangularFadeImage = ({
  namaPria,
  namaWanita,
  ortuPria,
  ortuWanita,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imagePathPria,
  imagePathWanita,
  children,
  padding
}) => {
  return (
    <div
      id="couple"
      className={`relative ${bgColor} ${textColor} py-16 md:px-32 overflow-hidden ${padding}`}
    >
      {children}

      <Fade bottom>
        <h1 className="font-honey-carrot text-center text-[44px] mb-6 px-10">
          Calon Pengantin
        </h1>
      </Fade>

      <div className={`flex items-center justify-center flex-col md:flex-row`}>
        <div className={`flex flex-col items-center font-body`}>
          <Fade bottom>
            <div className="w-full h-64 relative">
              <div className="absolute w-full h-14 top-0 left-0 z-30 bg-gradient-to-b from-black"></div>
              <div className="absolute w-full h-14 bottom-0 left-0 z-30 bg-gradient-to-t from-black"></div>
              <div className="absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={imagePathWanita}
                  layout="fill"
                  objectFit="cover"
                  alt="katanikah website undangan pernikahan online"
                />
              </div>
            </div>
          </Fade>

          <div className="w-full mx-4 text-center mt-4 px-8">
            <Fade bottom>
              <p className="font-yellowtail text-3xl md:text-4xl mb-3">
                {namaWanita}
              </p>
              <p className="text-lg font-poppins">{ortuWanita}</p>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className=" md:w-1/3 text-center font-honey-carrot text-7xl md:text-8xl my-10 px-8">
            &
          </div>
        </Fade>
        <div className="flex flex-col w-full items-center font-body">
          <Fade bottom>
            <div className="w-full h-64 relative">
              <div className="absolute w-full h-14 top-0 left-0 z-30 bg-gradient-to-b from-black"></div>
              <div className="absolute w-full h-14 bottom-0 left-0 z-30 bg-gradient-to-t from-black"></div>
              <div className="absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  src={imagePathPria}
                  layout="fill"
                  objectFit="cover"
                  alt="katanikah website undangan pernikahan online"
                />
              </div>
            </div>
          </Fade>

          <div className="w-full mx-4 text-center mt-2">
            <Fade bottom>
              <p className="font-yellowtail text-3xl md:text-4xl mb-3">
                {namaPria}
              </p>
              <p className="text-lg font-poppins">{ortuPria}</p>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RectangularFadeImage
