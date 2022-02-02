import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import ImageLoader from "../../helpers/ImageLoader";
import TestimonyCard from "./comp/TestimonyCard";
import { Fade } from "react-reveal";

import { testimony } from "../../assets/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimony = () => {
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <div
      id="testimony"
      className="py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-24 justify-between px-8 md:px-24 items-center"
    >
      <Fade left>
        <div className="md:w-1/2">
          <Image
            loader={ImageLoader}
            src="pexels-photo-2959192.jpeg"
            width={800}
            height={600}
            className="rounded-2xl"
          />
        </div>
        <div className="flex flex-col w-full md:w-1/2">
          <p className="text-4xl md:text-5xl font-bold mb-8 text-gray-600">
            Our Client <span className="text-dark">Love Us</span>
          </p>
          <div className="w-full">
            <p className="text-gray-500 mb-8 md:text-lg">
              Celotehan teman-teman kita yang pernah memesan undangan website di
              KitaNikah
            </p>
            <Slider {...settings} ref={setSliderRef} className="w-full">
              {testimony.map((testi) => (
                <TestimonyCard
                  key={testi.id}
                  sliderRef={sliderRef}
                  text={testi.text}
                  author={testi.author}
                />
              ))}
            </Slider>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Testimony;
