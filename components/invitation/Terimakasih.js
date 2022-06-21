import React from "react"

const Terimakasih = ({
  namaPengantin,
  bgColor = "bg-gray-800",
  textColor = "text-gray-300",
  title = "Thank You"
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} py-8 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="text-center">
        <p className="text-lg mb-3">{title}</p>
        <p className="font-yellowtail text-4xl">{namaPengantin}</p>
      </div>
    </div>
  )
}

export default Terimakasih
