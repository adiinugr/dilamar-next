import React from "react";
import Countdown from "react-countdown";

import { renderer } from "./parts/CountDownRenderer";

const DateCountdown = ({
  date,
  bgColor = "bg-gray-200",
  textColor = "text-gray-700",
  shadow,
  position
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${shadow} ${position} absolute flex justify-center items-center overflow-hidden rounded-bl-3xl rounded-tr-3xl z-50`}
    >
      <div className="px-4 flex flex-col py-6 md:py-10 md:px-44 ">
        <div className="text-center font-yellowtail text-2xl md:text-5xl mb-6">
          Counting Down to Our Beautiful Day
        </div>
        <Countdown date={Date.parse(date)} renderer={renderer} />
      </div>
    </div>
  );
};

export default DateCountdown;
