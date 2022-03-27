import React from "react";
import { Fade } from "react-reveal";

import PriceCard from "./comp/PriceCard";

import { packageLists } from "../../assets/data";
import Image from "next/image";

const Package = () => {
  return (
    <section
      id="package"
      className="px-8 md:px-32 py-4 md:py-16 overflow-hidden"
    >
      <Fade bottom>
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 text-main">
          Reasonable & Flexible <span className="text-dark">Package</span>
        </h1>
        <p className="text-gray-500 text-center mb-8 md:mb-20 md:text-lg">
          Sesuaikan dengan budget dan fitur yang ingin kamu dapatkan.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <PriceCard
            data={packageLists}
            title="Basic"
            color="green"
            url="/basic"
            price="100K"
          />
          <PriceCard
            data={packageLists}
            title="Standard"
            color="blue"
            url="/standard"
            price="120K"
          />
          <PriceCard
            data={packageLists}
            title="Premium"
            color="gold"
            url="/premium"
            price="180K"
          />
        </div>
      </Fade>
      <div className="flex justify-between mt-32 bg-main rounded-xl">
        <div className="relative w-1/3 h-80 mt-6">
          <Image
            src="/images/confuse.png"
            layout="fill"
            objectFit="contain"
            className="left-0 -bottom-10 absolute"
          />
        </div>
        <div className="w-2/3 py-10 pr-16">
          <h1 className="text-xl md:text-2xl font-bold text-white ">
            <span className="text-dark">Yah!</span> Desain favoritku tidak ada
            di template!
          </h1>
          <p className="text-white my-4">
            Bagi kamu yang punya desain sendiri atau tampilan yang kamu
            ingkinkan tidak ada di template, bisa banget request sesuka hati.
            Cukup pesan saja{" "}
            <span className="text-dark font-bold">Paket Request</span>. Namun
            pembelian paket ini harus disertai dengan{" "}
            <span className="text-dark font-bold">Paket Premium</span>.
          </p>

          <div
            className={` border border-gray-100 text-dark rounded-md overflow-hidden shadow-lg`}
          >
            <div>
              <div className="p-4 text-center text-3xl font-bold uppercase">
                asas
              </div>

              <div className="p-6 px-10">asas</div>
              <div className="p-6 font-bold text-4xl text-center bg-main text-white">
                Rp 30.000
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
