import Image from "next/image"
import React from "react"
import dynamic from "next/dynamic"
import { Fade } from "react-reveal"

const Snowfall = dynamic(() => import("react-snowfall"), { ssr: false })

const BasicHero = ({
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
  textPos = "middle",
  children
}) => {
  const textPosition = () => {
    if (textPos === "top") {
      return "top-20"
    } else if (textPos === "bottom") {
      return "bottom-20"
    } else {
      return "top-1/2 -translate-y-1/2"
    }
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
        className={`absolute w-full left-1/2 transform -translate-x-1/2 ${textPosition()} flex flex-col justify-end items-center`}
      >
        {initialText && (
          <Fade bottom>
            <div className="text-5xl md:text-8xl mb-16 font-display">
              {initialText}
            </div>
          </Fade>
        )}
        <Fade bottom>
          <div className="md:text-xl font-poppins">{titleText}</div>
          <div className={`font-honey-carrot ${nameTextSize} my-6`}>{name}</div>
          <div className="md:text-xl font-poppins">{date}</div>
        </Fade>
      </div>

      {isSnow && (
        <Snowfall speed={[0.5, 0.8]} wind={[0, 0.5]} color={snowColor} />
      )}
    </section>
  )
}

export default BasicHero
