import React from "react";
import { Fade } from "react-reveal";

import PriceCard from "./comp/PriceCard";

import { basic, premium, standard } from "../../assets/data";

const Package = () => {
  return (
    <section id="package" className="px-8 md:px-32 py-4 md:py-16">
      <Fade bottom>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 text-main">
          Reasonable & Flexible <span className="text-dark">Package</span>
        </h1>
        <p className="text-gray-500 text-center mb-8 md:mb-20 md:text-lg">
          Sesuaikan dengan budget dan fitur yang ingin kamu dapatkan.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <PriceCard
            data={basic}
            title="Basic"
            color="green"
            url="/basic"
            price="100K"
          />
          <PriceCard
            data={standard}
            title="Standard"
            color="blue"
            url="/standard"
            price="120K"
          />
          <PriceCard
            data={premium}
            title="Premium"
            color="gold"
            url="/premium"
            price="180K"
          />
        </div>
      </Fade>
    </section>
  );
};

export default Package;
