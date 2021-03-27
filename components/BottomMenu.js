import Image from "next/image";
import React from "react";
import { Link as ScrollLink } from "react-scroll";

const BottomMenu = () => {
  return (
    <div className="fixed flex items-center justify-around h-20 bg-white z-30 w-full bottom-0 left-0">
      <ScrollLink to="hero" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/house.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm">Home</div>
        </div>
      </ScrollLink>
      <ScrollLink to="couple" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/couple.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm">Couple</div>
        </div>
      </ScrollLink>
      <ScrollLink to="event" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/calendar.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm">Event</div>
        </div>
      </ScrollLink>
      <ScrollLink to="gallery" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/image.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm">Gallery</div>
        </div>
      </ScrollLink>
      <ScrollLink to="rsvp" smooth={true} duration={500}>
        <div className="flex flex-col items-center justify-center cursor-pointer">
          <div className="text-center">
            <Image
              src="/images/bottom-menu/book.png"
              width={25}
              height={25}
              objectFit="cover"
            />
          </div>
          <div className="text-sm">RSVP</div>
        </div>
      </ScrollLink>
    </div>
  );
};

export default BottomMenu;
