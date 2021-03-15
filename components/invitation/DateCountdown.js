import React from "react";
import Countdown from "react-countdown";

import { renderer } from "../CountDownRenderer";

const DateCountdown = ({ date }) => {
  return (
    <div className="flex justify-center items-center bg-suta-gunmetal overflow-hidden">
      <div className="w-3/4 flex flex-col py-8 md:py-10 md:px-44 text-suta-seashell">
        <div
          data-aos="zoom-in"
          className="text-center font-display text-4xl md:text-5xl mb-6"
        >
          Save The Date
        </div>
        <Countdown date={Date.parse(date)} renderer={renderer} />
      </div>
    </div>
  );
};

export default DateCountdown;
