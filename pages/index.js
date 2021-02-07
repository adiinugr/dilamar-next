import Image from "next/image";
import Aos from "aos";

import { benefits, standard, basic, premium } from "../assets/data";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

import "aos/dist/aos.css";

import PriceCard from "../components/PriceCard";
import { useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";

const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <section className="h-screen relative overflow-hidden">
        <div
          className="h-full w-full absolute text-gray-700 flex flex-col-reverse md:flex-row justify-center items-center px-10 md:px-40 bg-gray-100"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 flex flex-col">
            <div className="text-2xl font-semibold mb-4">
              Undangan Nikah Online
            </div>
            <div className="text-lg mb-6">
              Buat website undangan untuk pernikahanmu. Lebih kekinian dan
              tentunya bisa menjangkau temanmu yang jauh di sana
            </div>
            <div className="bg-gray-400 py-2 px-5 self-start text-gray-100 cursor-pointer">
              Buat Undangan
            </div>
          </div>
          <div className="md:w-1/2 text-right mb-8 md:mb-0">
            <Image
              src="/images/phone-removebg.png"
              width={300}
              height={300}
              objectFit="cover"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-gray-200">
        <div className="font-medium text-xl md:text-2xl py-10 text-gray-800">
          Kenapa Harus Undangan Online?
        </div>
        <div className="grid md:grid-cols-2 gap-4 pb-10 text-gray-700">
          {benefits.map((benefit) => (
            <div
              key={benefit.id}
              className="w-96 flex flex-col bg-gray-100 rounded-sm p-4"
              data-aos="zoom-in"
            >
              {benefit.icon}
              <div className="font-medium text-center mb-2 text-lg">
                {benefit.title}
              </div>
              <div>{benefit.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col justify-center items-center bg-gray-100">
        <div className="font-medium text-2xl py-10 text-gray-800">
          Pilihan Paket
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <PriceCard data={basic} title="Basic" color="green" url="/basic" />
          <PriceCard
            data={standard}
            title="Standard"
            color="blue"
            url="/standard"
          />
          <PriceCard
            data={premium}
            title="Premium"
            color="gold"
            url="/premium"
          />
        </div>
      </section>

      <section className="bg-gray-800 py-8 flex text-gray-400 flex-col items-center justify-center">
        <div className="flex items-center mb-4">
          <a
            href="https://wa.me/+6282192477848"
            target="_blank"
            className="mr-2"
          >
            <AiOutlineWhatsApp size={30} />
          </a>
          <a href="https://www.instagram.com/nehan.dev" target="_blank">
            <AiOutlineInstagram size={30} />
          </a>
        </div>
        <div>
          Copyright &copy; {new Date().getFullYear()}. Nehan Dev All Rights
          Reserved
        </div>
      </section>
    </div>
  );
};
export default Home;
