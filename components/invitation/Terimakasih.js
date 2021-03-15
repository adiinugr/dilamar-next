import React from "react";

const Terimakasih = ({ namaPengantin }) => {
  return (
    <div className="bg-gray-600 py-8 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center text-gray-300">
        <p className="font-body text-lg mb-3">Thank You</p>
        <p className="font-display text-4xl">{namaPengantin}</p>
      </div>
    </div>
  );
};

export default Terimakasih;
