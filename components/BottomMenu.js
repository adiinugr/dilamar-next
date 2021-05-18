import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const bottomMenuData = [
  {
    id: 1,
    anchor: "hero",
    imagePath: "/images/bottom-menu/house.png",
  },
  {
    id: 2,
    anchor: "couple",
    imagePath: "/images/bottom-menu/couple.png",
  },
  {
    id: 3,
    anchor: "event",
    imagePath: "/images/bottom-menu/calendar.png",
  },
  {
    id: 4,
    anchor: "gallery",
    imagePath: "/images/bottom-menu/image.png",
  },
];

const BottomMenu = () => {
  return (
    <div className="fixed flex text-kharnisa-imam-gold items-center justify-around h-20 bg-kharnisa-imam-silver z-30 w-full bottom-0 left-0">
      <ScrollLink to="hero" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/house-gold.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm font-semibold">Home</div>
        </div>
      </ScrollLink>
      <ScrollLink to="couple" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/couple-gold.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm font-semibold">Couple</div>
        </div>
      </ScrollLink>
      <ScrollLink to="event" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/calendar-gold.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm font-semibold">Event</div>
        </div>
      </ScrollLink>
      <ScrollLink to="gallery" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/image-gold.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm font-semibold">Gallery</div>
        </div>
      </ScrollLink>
      <ScrollLink to="rsvp" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/book-gold.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm font-semibold">RSVP</div>
        </div>
      </ScrollLink>
    </div>
  );
};

export const BottomMenuGeneral = ({ pattern, customColor }) => {
  const containerClassName = () => {
    if (pattern) {
      return `fixed flex text-gray-800 items-center justify-around h-20 ${pattern} z-30 w-full bottom-0 left-0`;
    } else if (customColor) {
      return `fixed flex items-center justify-around h-20 ${customColor} z-30 w-full bottom-0 left-0`;
    } else {
      return "fixed flex text-gray-700 items-center justify-around h-20 bg-gray-200 z-30 w-full bottom-0 left-0";
    }
  };

  return (
    <div className={containerClassName()}>
      {bottomMenuData.map((menu) => (
        <ScrollLink to={menu.anchor} smooth={true} duration={500}>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="text-center">
              <Image
                src={menu.imagePath}
                width={25}
                height={25}
                objectFit="cover"
              />
            </div>
            <div className="text-sm font-semibold">Home</div>
          </div>
        </ScrollLink>
      ))}
    </div>
  );
};

export default BottomMenu;
