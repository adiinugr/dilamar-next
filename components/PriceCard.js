import Link from "next/link";
import { useEffect } from "react";
import { HiCheckCircle, HiEye, HiXCircle } from "react-icons/hi";
import Aos from "aos";

import "aos/dist/aos.css";

const PriceCard = ({ title, data, color, url, price }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const titleClassName = () => {
    if (color === "green") {
      return "bg-green-500 p-4 text-center font-medium text-gray-100";
    } else if (color === "blue") {
      return "bg-blue-500 p-4 text-center font-medium text-gray-100";
    } else if (color === "gold") {
      return "bg-yellow-500 p-4 text-center font-medium text-gray-100";
    }
  };

  return (
    <div
      className="flex justify-center items-center mb-10 rounded-md overflow-hidden"
      data-aos="fade-up"
    >
      <div className="bg-white">
        <div className={titleClassName()}>{title}</div>
        <div className="p-6 pb-0 font-bold text-3xl text-center">{price}</div>
        <div className="p-6">
          {data.map((dta) => (
            <div key={dta.id} className="flex items-center mb-2">
              {dta.isAvailable ? (
                <HiCheckCircle size={20} color="green" />
              ) : (
                <HiXCircle size={20} color="red" />
              )}{" "}
              <p className="ml-2">{dta.title}</p>
            </div>
          ))}
        </div>
        <Link href={url}>
          <div className="mx-6 mb-6 px-5 py-2 flex justify-center items-center bg-gray-500 text-gray-200 cursor-pointer">
            <HiEye size={20} />
            <p className="ml-2">Lihat Demo</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PriceCard;
