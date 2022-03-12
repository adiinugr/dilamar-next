import Image from "next/image";
import React from "react";
import YoutubePlayer from "./parts/YoutubePlayer";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-reveal";

export const GalleryList = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imageData
}) => {
  return (
    <div id="gallery" className={`${bgColor} ${textColor} py-2`}>
      <div className="text-center my-6">
        Sedikit potret tentang kisah kami berdua.
      </div>

      {imageData.map((gallery) => {
        if (gallery.type === "image") {
          return (
            <div
              key={gallery.id}
              data-aos="fade-up"
              className="w-5/6 p-4 pb-8 bg-white shadow-lg rounded-lg md:w-2/3 h-96 md:h-135 mx-auto mb-4"
            >
              <div className="w-full h-full relative">
                <Image
                  src={gallery.src}
                  layout="fill"
                  objectFit="cover"
                  className="absolute rounded-md"
                />
              </div>
            </div>
          );
        } else if (gallery.type === "video") {
          return (
            <div
              key={gallery.id}
              data-aos="fade-up"
              className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
            >
              <YoutubePlayer videoId={gallery.videoId} />
            </div>
          );
        }
      })}
    </div>
  );
};

export const GalleryGrid = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imageData,
  height,
  width,
  numberOfGridCols
}) => {
  const gridColsClassName = () => {
    if (numberOfGridCols === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-4 relative";
    } else if (numberOfGridCols === 3) {
      return "grid grid-cols-1 md:grid-cols-3 gap-2 relative";
    }
  };

  return (
    <div
      className={`${bgColor} ${textColor} flex justify-center items-center bg-gray-500`}
    >
      <div className="flex flex-col py-8 md:py-10 px-6 md:px-44">
        <div
          data-aos="zoom-in"
          className="text-center font-display text-4xl md:text-5xl mb-6"
        >
          Gallery
        </div>
        <div className={gridColsClassName()}>
          {imageData.map((image) => (
            <Image
              data-aos="zoom-in"
              key={image.id}
              src={image.src}
              height={height}
              width={width}
              objectFit="cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const GallerySlideShow = ({
  bgColor = "bg-gray-600",
  textColor = "text-gray-200",
  children,
  imageData
}) => {
  const settings = {
    infinite: true,
    speed: 400,
    autoplay: true,
    fade: true
  };

  return (
    <div
      id="gallery"
      className={`${bgColor} ${textColor} relative overflow-hidden py-16 px-8`}
    >
      {children}

      <div className="max-w-2xl m-auto">
        <Fade top>
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="font-yellowtail text-4xl mb-3">
              Our Moment Together
            </div>
            <div className="text-center">
              We start our journey from the very bottom.
            </div>
          </div>
        </Fade>

        <Fade>
          <Slider {...settings} className="slick-arrow">
            {imageData.map((image) => (
              <div
                key={image.id}
                className="h-80 md:h-96 w-full relative rounded-lg overflow-hidden"
              >
                <Image
                  src={image.src}
                  layout="fill"
                  objectFit="cover"
                  alt="katanikah website undangan pernikahan online"
                  placeholder="blur"
                />
              </div>
            ))}
          </Slider>
        </Fade>
      </div>
    </div>
  );
};
