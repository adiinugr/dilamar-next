import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

import ImageLoader from "../../helpers/ImageLoader";

import { getStartedData } from "../../assets/data";

const GetStarted = () => {
  return (
    <div
      id="get-started"
      className="py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-24 justify-between px-8 md:px-24 items-center"
    >
      <Fade right>
        <div className="md:w-1/2">
          <Image
            loader={ImageLoader}
            src="pexels-photo-2959192.jpeg"
            width={800}
            height={600}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-gray-600">
            Easy to Get <span className="text-dark">Started</span>
          </p>

          {getStartedData.map((getStarted) => (
            <div key={getStarted.id} className="flex gap-5 mb-6">
              <div className="text-4xl md:text-5xl font-semibold text-gray-300 w-12">
                {getStarted.number}
              </div>
              <div>
                <p className="text-lg md:text-xl mb-1 font-semibold text-dark">
                  {getStarted.title}
                </p>
                <p className="text-gray-500">{getStarted.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </div>
  );
};

export default GetStarted;
