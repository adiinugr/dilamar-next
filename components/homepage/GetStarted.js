import Image from "next/image";
import React from "react";
import { Fade } from "react-reveal";

import { getStartedData } from "../../assets/data";

const GetStarted = () => {
  return (
    <section
      id="get-started"
      className="py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-24 justify-between px-8 md:px-24 items-center"
    >
      <Fade right>
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/mockup.png"
            width={700}
            height={400}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-main">
            Easy to Get <span className="text-dark">Started</span>
          </h1>

          {getStartedData.map((getStarted) => (
            <div key={getStarted.id} className="flex gap-5 mb-6">
              <div className="text-4xl md:text-5xl font-semibold text-main w-16 md:w-12 mr-3">
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
    </section>
  );
};

export default GetStarted;
