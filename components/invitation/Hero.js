import Image from "next/image"
import dynamic from "next/dynamic"
import { Fade } from "react-reveal"

const Snowfall = dynamic(() => import("react-snowfall"), { ssr: false })

export const Hero = ({
  name,
  date,
  titleText = "We Are Getting Married",
  initialText,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  nameTextSize = "text-5xl md:text-7xl",
  overlayClassName,
  imagePath,
  snowColor = "#ffffff",
  isSnow = true,
  overlayPosition = "inset-0",
  textPosition = "center",
  children
}) => {
  const textPositionFunction = () => {
    if (textPosition === "top") return "justify-start py-20"
    if (textPosition === "center") return "justify-center"
    if (textPosition === "bottom") return "justify-end py-20"
  }

  return (
    <section
      id="hero"
      className={`h-screen relative ${bgColor} ${textColor} overflow-hidden`}
    >
      {imagePath && (
        <Image
          src={imagePath}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="katanikah website undangan pernikahan online"
          priority={true}
        />
      )}

      <div className={`absolute ${overlayPosition} ${overlayClassName}`} />

      {children}

      <div
        className={`h-full w-full absolute flex flex-col ${textPositionFunction()} items-center`}
      >
        {initialText && (
          <Fade bottom>
            <div className="text-5xl md:text-8xl mb-16 font-display">
              {initialText}
            </div>
          </Fade>
        )}
        <Fade bottom>
          <div className="text-lg md:text-xl">{titleText}</div>
          <div className={`font-yellowtail ${nameTextSize} my-4`}>{name}</div>
          <div className="text-xl md:text-xl">{date}</div>
        </Fade>
      </div>

      {isSnow && (
        <Snowfall speed={[0.5, 0.8]} wind={[0, 0.5]} color={snowColor} />
      )}
    </section>
  )
}
