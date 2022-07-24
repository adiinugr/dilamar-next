import Image from "next/image"
import React from "react"
import Countdown from "react-countdown"
import Moment from "react-moment"
import { Fade } from "react-reveal"

const Renderer = ({ props, countdownClassname }) => {
  const itemContainerClassname = `text-center rounded-lg py-2 px-6 ${countdownClassname}`
  const paragraphValueClassname = `text-xl md:text-3xl font-medium`
  const paragraphPlaceholderClassname = `text-md`

  if (props.completed) {
    return (
      <div className="flex items-center justify-center font-body">
        <p className="text-xl md:text-3xl font-medium">Have been held</p>
      </div>
    )
  } else {
    return (
      <>
        <div className={`mb-3 flex items-center justify-center`}>
          <div
            className={`${countdownClassname} py-2 px-6 rounded-lg text-center`}
          >
            <p className="text-2xl">{props.days}</p>
            <p className="text-md">Day(s)</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{props.hours}</p>
            <p className={paragraphPlaceholderClassname}>Hour(s)</p>
          </div>
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{props.minutes}</p>
            <p className={paragraphPlaceholderClassname}>Min(s)</p>
          </div>
          <div className={itemContainerClassname}>
            <p className={paragraphValueClassname}>{props.seconds}</p>
            <p className={paragraphPlaceholderClassname}>Sec(s)</p>
          </div>
        </div>
      </>
    )
  }
}

function BigDay({
  title = "Waktu Mundur",
  countdownClassname,
  topBorderImageUrl,
  bottomBorderImageUrl,
  bgColor,
  textColor,
  padding,
  children,
  date
}) {
  return (
    <div
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-32 md:py-16 ${padding}`}
    >
      {children}
      {topBorderImageUrl && (
        <Fade bottom>
          <div className="text-center">
            <Image
              src={topBorderImageUrl}
              width={220}
              height={60}
              objectFit="contain"
            />
          </div>
        </Fade>
      )}

      <Fade>
        <h1 className="font-honey-carrot text-center text-[44px] mb-4">
          {title}
        </h1>
        <Countdown
          date={Date.parse(date)}
          renderer={(props) => (
            <Renderer props={props} countdownClassname={countdownClassname} />
          )}
        />
        <p className="text-center mt-3 font-poppins">
          <Moment format="DD MMM YYYY">{date}</Moment>
        </p>
      </Fade>
      {bottomBorderImageUrl && (
        <Fade bottom>
          <div className="text-center">
            <Image
              src={bottomBorderImageUrl}
              width={220}
              height={60}
              objectFit="contain"
            />
          </div>
        </Fade>
      )}
    </div>
  )
}

export default BigDay
