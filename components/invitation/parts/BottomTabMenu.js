import React from "react";
import { Link as ScrollLink } from "react-scroll";

export const BottomTabMenu = ({
  textColor = "text-gray-800",
  bgColor = "bg-gray-200",
  bottomMenuData
}) => {
  return (
    <div
      className={`fixed flex ${textColor} ${bgColor} items-center justify-around h-16 z-30 w-full md:max-w-2xl bottom-0 left-0 md:left-1/2 md:transform md:-translate-x-1/2 shadow-blur-16 rounded-tl-2xl rounded-tr-2xl`}
    >
      {bottomMenuData.map((menu) => (
        <ScrollLink to={menu.anchor} smooth={true} duration={500} key={menu.id}>
          <div className="flex flex-col items-center justify-center cursor-pointer">
            <div className="text-center">{menu.iconName}</div>
            <div className="text-sm font-semibold">{menu.title}</div>
          </div>
        </ScrollLink>
      ))}
    </div>
  );
};
