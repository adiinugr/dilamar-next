import React from "react"
import Countdown from "react-countdown"
import { Fade } from "react-reveal"

import { renderer } from "./parts/CountDownRenderer"

const DateCountdown = ({
  date,
  bgColor = "bg-gray-200",
  textColor = "text-gray-700",
  shadow,
  countdownTitle = " Counting Down to Our Beautiful Day",
  position = "absolute"
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${shadow} ${position} px-8 py-6 md:px-12 md:py-10 md:w-1/3 flex justify-center items-center overflow-hidden rounded-bl-3xl rounded-tr-3xl`}
    >
      <Fade>
        <div className="flex flex-col">
          {countdownTitle && (
            <div className="text-center font-yellowtail text-2xl md:text-3xl mb-6">
              {countdownTitle}
            </div>
          )}
          <Countdown date={Date.parse(date)} renderer={renderer} />
        </div>
      </Fade>
    </div>
  )
}

export default DateCountdown
