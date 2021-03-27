import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

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

export default BottomMenu;
