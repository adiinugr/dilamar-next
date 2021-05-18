import Image from "next/image";
import React from "react";
import YoutubePlayer from "../YoutubePlayer";

const galleryData = [
  {
    id: 1,
    type: "image",
    src: "/kharnisa-imam/couple.png",
  },
  {
    id: 2,
    type: "image",
    src: "/kharnisa-imam/couple2.png",
  },
  {
    id: 3,
    type: "image",
    src: "/kharnisa-imam/couple3.png",
  },
  {
    id: 4,
    type: "image",
    src: "/kharnisa-imam/couple4.png",
  },
  {
    id: 5,
    type: "image",
    src: "/kharnisa-imam/couple5.png",
  },
  {
    id: 6,
    type: "video",
    videoId: "n9uIqjzZS_4",
  },
];

export const GalleryOne = () => {
  return (
    <div
      id="gallery"
      className="bg-kharnisa-imam-silver text-kharnisa-imam-gold py-10"
    >
      <div className="text-center font-display text-4xl md:text-5xl mb-8">
        Gallery
      </div>
      <div className="text-center my-6">#MenjadiImamnyaNisa</div>

      {galleryData.map((gallery) => {
        if (gallery.type === "image") {
          return (
            <div
              key={gallery.id}
              data-aos="fade-up"
              className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
            >
              <Image
                src={gallery.src}
                layout="fill"
                objectFit="cover"
                className="absolute"
              />
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

export const GalleryTwo = ({ customColor, imageData }) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} py-10`
      : "bg-kharnisa-imam-silver text-kharnisa-imam-gold py-10";

  return (
    <div id="gallery" className={containerClassName()}>
      <div className="text-center font-display text-4xl md:text-5xl mb-8">
        Gallery
      </div>
      <div className="text-center my-6">
        Sedikit potret tentang kisah kami berdua.
      </div>

      {imageData.map((gallery) => {
        if (gallery.type === "image") {
          return (
            <div
              key={gallery.id}
              data-aos="fade-up"
              className="w-5/6 md:w-2/3 h-96 relative mx-auto mb-4"
            >
              <Image
                src={gallery.src}
                layout="fill"
                objectFit="cover"
                className="absolute rounded-md"
              />
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
