import React from "react"
import Image from "next/image"

import { TitleH1 } from "components/invitation/parts/BigTitle"
import { RiInstagramFill } from "react-icons/ri"

function WithBarcode({
  children,
  barcodeImagePath,
  bgColor = "bg-gray-600",
  textColor = "text-gray-200",
  barcodeUrl,
  buttonBgColor,
  buttonTextColor,
  padding
}) {
  return (
    <div
      id="instagram-filter"
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-16 md:py-16 ${padding}`}
    >
      {children}
      <TitleH1 fontStyle="font-yellowtail">Wedding Filter</TitleH1>
      <p className="text-center text-lg">
        Let's celebrate our special moment using this filter below!
      </p>
      <div className="bg-gray-50 rounded-lg shadow-blur-20 w-28 h-28 flex justify-center p-3 my-4 mx-auto">
        <div className="w-full h-full relative">
          <Image
            src={barcodeImagePath}
            layout="fill"
            objectFit="cover"
            className="absolute"
            placeholder="blur"
            alt="katanikah website undangan pernikahan online"
          />
        </div>
      </div>
      <a
        href={barcodeUrl}
        target="_blank"
        rel="noreferrer"
        className={`${buttonBgColor} ${buttonTextColor} mt-8 rounded-md py-2 cursor-pointer flex items-center justify-center mx-auto`}
      >
        <RiInstagramFill size={20} className="mr-2" />{" "}
        <span>Open Instagram Filter</span>
      </a>
    </div>
  )
}

export default WithBarcode
