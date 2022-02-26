import React from "react";
import { Fade } from "react-reveal";

import { featuresData } from "../../assets/data";

const Service = () => {
  return (
    <section id="service" className="px-8 md:px-24 pb-12 md:pb-16">
      <Fade bottom>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 text-main">
          We Have Amazing <span className="text-dark">Services</span>
        </h1>
        <p className="text-gray-500 text-center mb-8 md:mb-20 md:text-lg">
          Beberapa fitur yang kami hadirkan mungkin tidak akan kamu temukan di
          tempat lain.
        </p>
        <div className="grid md:grid-cols-3 gap-10">
          {featuresData.map((feature) => (
            <div key={feature.id} className="flex gap-4 md:mb-5">
              <div className="mr-4">{feature.icon}</div>
              <div>
                <p className="text-xl md:text-2xl font-semibold mb-3 text-dark">
                  {feature.title}
                </p>
                <p className="text-gray-500">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
};

export default Service;
