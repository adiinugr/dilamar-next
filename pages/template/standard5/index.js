import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
import Aos from "aos";
import { motion } from "framer-motion";

import "aos/dist/aos.css";

import { GoBook } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";

import { renderer } from "components/invitation/comp/CountDownRenderer";
import { AudioContext } from "context/AudioContext";
import Footer from "components/Footer";

const Page = () => {
  const [date] = useState("2021-12-04T10:30:00.000+07:00");
  const [comments, setComments] = useState([
    {
      name: "Sugeng",
      comment: "Selamat ya! Semoga sakinah",
    },
    {
      name: "Ita",
      comment: "Semoga sakinah, mawadah, warohmah..",
    },
    {
      name: "Intan",
      comment: "Lancar sampai hari h yaa...",
    },
  ]);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const [audio, setAudio] = useState(null);
  const [playing] = useContext(AudioContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/musics/beautiful-in-white.mp3"));
  }, []);

  useEffect(() => {
    if (playing && audio) {
      audio.play();
    } else if (!playing && audio) {
      audio.pause();
    }

    return () => {
      if (audio && playing) {
        audio.pause();
      }
    };
  }, [audio, playing]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === "" && comment === "") {
      setError("Harus diisi semua ya!");
    }

    setComments((prevComment) => [
      ...prevComment,
      {
        name,
        comment,
      },
    ]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
      <section className="flex justify-center items-center bg-gray-500">
        <div className="w-3/4 flex flex-col py-8 md:py-10 md:px-44 text-gray-200">
          <div
            data-aos="zoom-in"
            className="text-center font-display text-4xl md:text-5xl mb-6"
          >
            Save The Date
          </div>
          <Countdown date={Date.parse(date)} renderer={renderer} />
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
      <section className="bg-gray-300">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="font-display text-4xl mb-4">Guest Book</div>
          <div className="border-gray-700 border-2 py-1 px-4 flex items-center justify-center font-body cursor-pointer">
            <AiOutlineComment size={20} />
            <div className="ml-2">Write your wish</div>
          </div>
        </div>
        <div className="w-4/5 border-gray-700 border-t-2 py-4 text-gray-900 mx-auto">
          {comments.map((comment, index) => (
            <div key={index} className="mb-2">
              <p className="font-body font-semibold mb-1">{comment.name}</p>
              <p className="font-body">{comment.comment}</p>
            </div>
          ))}
          <form onSubmit={handleSubmit}>
            <div className="editor flex flex-col text-gray-800 max-w-2xl mt-6">
              {error && (
                <div className="mb-2 font-body text-red-800">
                  Harus diisi semua ya!
                </div>
              )}
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
                spellCheck="false"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
              />
              <textarea
                className="bg-gray-100 p-3 h-56 border border-gray-300 outline-none font-body"
                spellCheck="false"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Describe your wish here"
              />

              <div className="buttons flex">
                <button
                  type="submit"
                  className="btn border p-1 px-4 font-body cursor-pointer text-gray-200 ml-auto mt-4 bg-gray-700"
                >
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-gray-600 py-8 flex flex-col items-center justify-center">
        <div className="text-center text-gray-300">
          <p className="font-body text-lg mb-3">Thank You</p>
          <p className="font-display text-4xl">Ratna & Galih</p>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Page;
