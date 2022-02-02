import React from "react";
import Image from "next/image";

const GalleryImage = ({ images, height, width, numberOfGridCols }) => {
  const gridColsClassName = () => {
    if (numberOfGridCols === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-4";
    } else if (numberOfGridCols === 3) {
      return "grid grid-cols-1 md:grid-cols-3 gap-2";
    }
  };

  return (
    <div className={gridColsClassName()}>
      {images.map((image) => (
        <Image
          data-aos="zoom-in"
          key={image.id}
          src={image.url}
          height={height}
          width={width}
          objectFit="cover"
        />
      ))}
    </div>
  );
};

export default GalleryImage;
