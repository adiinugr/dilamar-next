import Image from "next/image";
import React from "react";
import GalleryImage from "../GalleryImage";
import YoutubePlayer from "../YoutubePlayer";

export const GalleryList = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imageData,
}) => {
  return (
    <div className={`${bgColor} ${textColor} py-2`}>
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
  numberOfGridCols,
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
