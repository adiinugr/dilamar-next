import { HiCheckCircle, HiXCircle } from "react-icons/hi";

import "aos/dist/aos.css";

const PriceCard = ({ title, data, price }) => {
  const titleClassName = () =>
    title === "Standard" ? "transform md:scale-110 bg-light" : "";

  return (
    <div
      className={` ${titleClassName()} border border-gray-100 text-dark pt-10 mb-10 rounded-md overflow-hidden shadow-lg`}
    >
      <div>
        <div className="p-4 text-center text-3xl font-bold uppercase">
          {title}
        </div>

        <div className="p-6 px-10">
          {data.map((dta) => (
            <div key={dta.id} className="flex items-center mb-2">
              {dta.isAvailable ? (
                <HiCheckCircle size={25} color="green" />
              ) : (
                <HiXCircle size={25} color="red" />
              )}{" "}
              <p className="ml-2 text-lg">{dta.title}</p>
            </div>
          ))}
        </div>
        <div className="p-6 font-bold text-4xl text-center bg-main text-white">
          {price}
        </div>
      </div>
    </div>
  );
};

export default PriceCard;
