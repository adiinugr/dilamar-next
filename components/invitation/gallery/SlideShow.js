import Image from "next/image"
import { Fade } from "react-reveal"
import Slider from "react-slick"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export const SlideShow = ({
  bgColor = "bg-gray-600",
  textColor = "text-gray-200",
  children,
  imageData,
  subtitle
}) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    fade: true,
    arrows: false
  }

  return (
    <div
      id="gallery"
      className={`${bgColor} ${textColor} relative overflow-hidden`}
    >
      {children}

      <div className="max-w-2xl m-auto">
        <Fade bottom>
          <div className="text-center px-6 md:px-44">
            <Image
              src="/clients/eka-zaky/wayang-twin.png"
              width={100}
              height={120}
              objectFit="contain"
            />
          </div>
        </Fade>

        <Fade bottom>
          <div className="flex flex-col items-center justify-center mb-8 px-6 md:px-16">
            <div className="text-center">{subtitle}</div>
          </div>
        </Fade>

        <Fade>
          <Slider {...settings} className="slick-arrow">
            {imageData.map((image) => (
              <div key={image.id} className="h-64 md:h-96 w-full relative">
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  alt="katanikah website undangan pernikahan online"
                  placeholder="blur"
                />
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  )
}
