import Image from "next/image"
import { Fade } from "react-reveal"

const RusticRectangularImage = ({
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
      className={`relative ${bgColor} ${textColor} py-16 px-10 md:px-32 overflow-hidden ${padding}`}
    >
      {children}

      <Fade bottom>
        <h1 className="font-honey-carrot text-center text-[44px] mb-4">
          Calon Pengantin
        </h1>
      </Fade>

      <div className={`flex items-center justify-center flex-col md:flex-row`}>
        <div className={`flex flex-col w-full items-center font-body`}>
          <Fade bottom>
            <div className="w-80 h-80 relative">
              <div className="absolute p-20 w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={imagePathWanita}
                  className="w-full h-full"
                  alt="katanikah website undangan pernikahan online"
                />
              </div>
              <div className="absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/images/frame/rectangular-frame.png"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Fade>

          <div className="w-full mx-4 text-center mt-2">
            <Fade bottom>
              <p className="font-yellowtail text-3xl md:text-4xl mb-3">
                {namaWanita}
              </p>
              <p className="text-lg font-poppins">{ortuWanita}</p>
            </Fade>
          </div>
        </div>
        <Fade bottom>
          <div className=" md:w-1/3 text-center font-honey-carrot text-7xl md:text-8xl my-10">
            &
          </div>
        </Fade>
        <div className="flex flex-col w-full items-center font-body">
          <Fade bottom>
            <div className="w-80 h-80 relative">
              <div className="absolute p-20 w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src={imagePathPria}
                  className="w-full h-full"
                  alt="katanikah website undangan pernikahan online"
                />
              </div>
              <div className="absolute w-full h-full left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <img
                  src="/images/frame/rectangular-frame.png"
                  className="w-full h-full"
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

export default RusticRectangularImage
