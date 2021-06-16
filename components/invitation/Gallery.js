import Image from "next/image";
import React from "react";
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
