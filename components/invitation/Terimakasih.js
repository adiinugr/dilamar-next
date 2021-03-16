import React from "react";

const Terimakasih = ({ namaPengantin, customColor }) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} py-8 flex flex-col items-center justify-center overflow-hidden`
      : "bg-gray-600  text-gray-300 py-8 flex flex-col items-center justify-center overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div className="text-center">
        <p className="font-body text-lg mb-3">Thank You</p>
        <p className="font-display text-4xl">{namaPengantin}</p>
      </div>
    </div>
  );
};

export default Terimakasih;
