import React from "react";

const Terimakasih = ({
  namaPengantin,
  bgColor = "bg-gray-800",
  textColor = "text-gray-300",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} py-8 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="text-center">
        <p className="font-body text-lg mb-3">Thank You</p>
        <p className="font-display text-4xl">{namaPengantin}</p>
      </div>
    </div>
  );
};

export default Terimakasih;
