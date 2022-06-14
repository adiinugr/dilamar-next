import Image from "next/image"
import React from "react"
import { GoBook } from "react-icons/go"
import { Fade } from "react-reveal"

function ImageAndMessage({
  bgColor = "bg-gray-200",
  textColor = "text-gray-700",
  message,
  imageUrl,
  padding
}) {
  return (
    <section
      className={`${bgColor} ${textColor} py-16 px-8 md:px-48 flex flex-col items-center justify-center overflow-hidden ${padding}`}
    >
      <div className="flex flex-col items-center justify-center">
        <Fade bottom>
          {imageUrl && (
            <Image
              src={imageUrl}
              width={100}
              height={200}
              objectFit="contain"
            />
          )}
          <p className="mb-2 text-2xl">السلام عليكم ورحمة الله وبركاته</p>
          <p className="text-center mb-2 font-poppins">{message}</p>
        </Fade>
      </div>
    </section>
  )
}

export default ImageAndMessage
