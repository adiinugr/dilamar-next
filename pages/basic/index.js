import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";

import "aos/dist/aos.css";

import { GoBook } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineWhatsApp, AiOutlineInstagram } from "react-icons/ai";

const Basic = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <section className="h-screen relative">
        <Image
          src="/images/roses.jpg"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="h-full w-full bg-gray-800 absolute opacity-60" />
        <div
          data-aos="fade-up"
          className="h-full w-full absolute text-gray-100 flex flex-col justify-center items-center"
        >
          <div className="text-2xl font-semibold">The Wedding</div>
          <div className="font-display text-6xl md:text-7xl my-4">
            Ratna & Galih
          </div>
          <div className="text-xl">02 Desember 2021</div>
        </div>
      </section>
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-3/4 flex flex-col items-center justify-center">
          <GoBook size={80} className="text-gray-300 mb-4" />
          <p className="text-center text-gray-300 mb-2 ">
            “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
            untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
            tenteram di samping-Nya dan dijadikan-Nya rasa kasih dan sayang di
            antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan
            Allah bagi kaum yang berpikir.”
          </p>
          <p className="text-gray-300 font-medium">(QS. Ar-Rum ayat 21)</p>
        </div>
      </section>
      <section className="bg-green-50 py-20 md:px-40">
        <div className="flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
          <div
            className="text-gray-700 md:w-1/3 text-center font-body mb-8 md:mb-0"
            data-aos="fade-right"
          >
            <p className="font-display text-5xl mb-3">Ratna</p>
            <p>Ratna Wijaya</p>
            <p>Putra dari Bapak dan Ibu</p>
          </div>
          <div className="text-gray-700 md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0">
            &
          </div>
          <div
            data-aos="fade-left"
            className="text-gray-700 md:w-1/3 text-center font-body"
          >
            <p className="font-display text-5xl mb-3">Galih</p>
            <p>Galih Prakoso</p>
            <p>Putra dari Bapak dan Ibu</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 py-16 flex flex-col items-center justify-center">
        <div className="w-5/6 md:w-3/4 border-gray-300 border-2 rounded-lg  h-screen md:h-64">
          <div className=" flex flex-col md:flex-row items-center justify-center h-full w-full z-20">
            <div
              data-aos="zoom-in"
              className="text-gray-300 px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Akad Nikah</p>
              <p>Jumat, 3 Desember 2021</p>
              <p className="my-4">Pukul 08.30 WIB</p>
              <p className="font-semibold">Masjid Baitul Makmur 2 Unesa</p>
              <p>Kampus Unesa Lidah Wetan, Surabaya</p>
            </div>
            <div
              data-aos="zoom-in"
              className="text-gray-300 px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
            >
              <p className="font-display text-5xl mb-4">Resepsi</p>
              <p>Sabtu, 4 Desember 2021</p>
              <p className="my-4">Pukul 10.00 WIB - Selesai</p>
              <p className="font-semibold">Danau Unesa</p>
              <p>Kampus Unesa Lidah Wetan, Surabaya</p>
            </div>
          </div>
        </div>
        <a
          href="https://www.google.co.id/maps/place/Masjid+Baitul+Makmur+2+UNESA+Lidah+Wetan/@-7.3034604,112.6708557,17z/data=!3m1!4b1!4m5!3m4!1s0x2dd7fc53d3b94d03:0xa249469c90cd02b7!8m2!3d-7.3034604!4d112.6730444"
          target="_blank"
          rel="noreferrer"
          className="w-5/6 md:w-3/4 bg-gray-300 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center"
        >
          <MdLocationOn size={20} /> Google Maps
        </a>
      </section>
      <section className="bg-gray-600 py-8 flex flex-col items-center justify-center">
        <div className="text-center text-gray-300">
          <p className="font-body text-lg mb-3">Thank You</p>
          <p className="font-display text-4xl">Ratna & Galih</p>
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

export default Basic;
