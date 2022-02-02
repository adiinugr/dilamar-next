import React from "react";

import { HiArrowNarrowLeft, HiArrowNarrowRight, HiStar } from "react-icons/hi";

const TestimonyCard = ({ sliderRef, text, author }) => {
  return (
    <div>
      <div className="flex mb-3">
        {[1, 2, 3, 4, 5].map((e) => (
          <HiStar key={e} size={25} className="text-nurul-gold" />
        ))}
      </div>
      <p className="mb-3 text-gray-500 italic">{text}</p>
      <p className="font-semibold text-gray-600 text-right">{author}</p>
      <div className="flex gap-2 mt-4">
        <div
          className="bg-main bg-opacity-20 rounded-full p-3 cursor-pointer"
          onClick={sliderRef?.slickPrev}
        >
          <HiArrowNarrowLeft className="text-xl text-dark" />
        </div>
        <div
          className="bg-main bg-opacity-20 rounded-full p-3 cursor-pointer"
          onClick={sliderRef?.slickNext}
        >
          <HiArrowNarrowRight className="text-xl text-dark" />
        </div>
      </div>
    </div>
  );
};

export default TestimonyCard;
