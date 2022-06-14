import Image from "next/image"
import React from "react"
import Countdown from "react-countdown"
import { Fade } from "react-reveal"

const Renderer = ({ days, hours, minutes, seconds, completed }) => {
  const itemContainerClassname = `text-center rounded-lg`
  const paragraphValueClassname = `text-xl md:text-3xl font-medium`
  const paragraphPlaceholderClassname = `text-md`

  if (completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">4 Desember 2021</p>
      </div>
    )
  } else {
    return (
      <>
        <div className="text-center mb-3">
          <p className="text-2xl">{days}</p>
          <p className="text-md">Day(s)</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{hours}</p>
            <p className={paragraphPlaceholderClassname}>Hour(s)</p>
          </div>
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{minutes}</p>
            <p className={paragraphPlaceholderClassname}>Min(s)</p>
          </div>
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{seconds}</p>
            <p className={paragraphPlaceholderClassname}>Sec(s)</p>
          </div>
        </div>
      </>
    )
  }
}

function BigDay({ bgColor, textColor, padding, children, date }) {
  return (
    <div
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-32 md:py-72 ${padding}`}
    >
      {children}
      <Fade botom>
        <div className="text-center">
          <Image
            src="/clients/eka-zaky/quotes_decor.webp"
            width={220}
            height={60}
            objectFit="contain"
          />
        </div>
      </Fade>
      <Fade>
        <h1 className="font-honey-carrot text-center text-[44px] mb-4">
          Wektu Mundur
        </h1>
        <Countdown date={Date.parse(date)} renderer={Renderer} />
        <p className="text-center mt-3 font-poppins">12 Juni 2021</p>
      </Fade>
      <div className="text-center transform rotate-180">
        <Fade bottom>
          <Image
            src="/clients/eka-zaky/quotes_decor.webp"
            width={220}
            height={60}
            objectFit="contain"
          />
        </Fade>
      </div>
    </div>
  )
}

export default BigDay
