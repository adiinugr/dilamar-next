import React from "react";
import Countdown from "react-countdown";

import { renderer } from "../CountDownRenderer";

const DateCountdown = ({ date, bgColor, textColor }) => {
  const containerClassName = () =>
    bgColor && textColor
      ? `${bgColor} ${textColor} flex justify-center items-center overflow-hidden`
      : "flex justify-center items-center bg-suta-gunmetal text-suta-seashell overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div
        data-aos="zoom-in"
        className="px-6 flex flex-col py-8 md:py-10 md:px-44 "
      >
        <div className="text-center font-display text-4xl md:text-5xl mb-6">
          Save The Date
        </div>
        <Countdown date={Date.parse(date)} renderer={renderer} />
      </div>
    </div>
  );
};

export default DateCountdown;
