import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Countdown from "react-countdown";
import Aos from "aos";

import "aos/dist/aos.css";

import { GoBook } from "react-icons/go";
import { MdLocationOn } from "react-icons/md";
import { AiOutlineComment } from "react-icons/ai";

import { renderer } from "../../components/CountDownRenderer";
import { AudioContext } from "../../context/AudioContext";

import Footer from "../../components/Footer";
import GoogleMaps from "../../components/GoogleMaps";
import InvitationHead from "../../components/InvitationHead";
import ProtokolKesehatan from "../../components/ProtokolKesehatan";

const Page = ({ messages }) => {
  const [date] = useState("2021-03-21T11:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState("");

  const [audio, setAudio] = useState(null);
  const [playing] = useContext(AudioContext);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/suta-hanny/cristian-since.mp3"));
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name === "" && comment === "") {
      setError("Harus diisi semua ya!");
    } else {
      const res = await fetch(`/api/suta-hanny`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          message: comment,
        }),
      });

      setData((prevData) => [
        ...prevData,
        {
          name,
          message: comment,
        },
      ]);
    }
  };

  return (
    <>
      <InvitationHead
        title="Suta & Hanny Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/suta-hanny"
      />
      <div>
        <section className="h-screen relative bg-suta-seashell overflow-hidden">
          <div
            data-aos="slide-right"
            className="absolute top-0 left-0 w-56 h-56 md:w-96 md:h-96"
          >
            <Image src="/suta-hanny/flower1.png" layout="fill" />
          </div>
          <div
            data-aos="slide-left"
            className="absolute right-0 bottom-0 w-48 h-48 md:w-96 md:h-96"
          >
            <Image src="/suta-hanny/flower2.png" layout="fill" />
          </div>
          <div
            data-aos="fade-up"
            className="h-full w-full absolute text-suta-lapis-lazuli flex flex-col justify-center items-center"
          >
            <div className="text-2xl font-semibold">The Wedding Of</div>
            <div className="font-display text-6xl md:text-7xl my-4">
              Suta & Hanny
            </div>
            <div className="text-xl">Minggu, 21 Maret 2021</div>
          </div>
        </section>
        <section className="bg-suta-gunmetal py-16 flex flex-col items-center justify-center overflow-hidden">
          <div
            data-aos="zoom-in"
            className="w-3/4 flex flex-col items-center justify-center"
          >
            <GoBook size={80} className="text-gray-300 mb-4" />
            <p className="text-center text-gray-300 mb-2 ">
              “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
              untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
              tenteram di samping-Nya dan dijadikan-Nya rasa kasih dan sayang di
              antara kamu. Sesungguhnya yang demikian itu menjadi bukti
              kekuasaan Allah bagi kaum yang berpikir.”
            </p>
            <p className="text-gray-300 font-medium">(QS. Ar-Rum ayat 21)</p>
          </div>
        </section>
        <section className="bg-suta-seashell py-20 px-8 md:px-40 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-center h-full w-full z-20 text-suta-lapis-lazuli">
            <div
              className="md:w-1/3 text-center font-body mb-8 md:mb-0"
              data-aos="fade-right"
            >
              <p className="font-display text-3xl mb-3">
                Dliyan Purwana Suta, S.H.
              </p>
              <p>Putra dari Bapak Drs. Zaenal Hayat dan Ibu Kuraesin</p>
            </div>
            <div
              data-aos="zoom-in"
              className="md:w-1/3 text-center font-display text-8xl mb-8 md:mb-0"
            >
              &
            </div>
            <div
              data-aos="fade-left"
              className="md:w-1/3 text-center font-body"
            >
              <p className="font-display text-3xl mb-3">Hanny Suryani, S.Pd.</p>
              <p>
                Putri dari Bapak Drs. Nana Suryana (Alm.) dan Ibu Nursamsiyah
              </p>
            </div>
          </div>
        </section>
        <section className="flex justify-center items-center bg-suta-gunmetal overflow-hidden">
          <div className="w-3/4 flex flex-col py-8 md:py-10 md:px-44 text-suta-seashell">
            <div
              data-aos="zoom-in"
              className="text-center font-display text-4xl md:text-5xl mb-6"
            >
              Save The Date
            </div>
            <Countdown date={Date.parse(date)} renderer={renderer} />
          </div>
        </section>
        <section className="bg-suta-seashell text-suta-lapis-lazuli py-16 flex flex-col items-center justify-center overflow-hidden">
          <div className="w-5/6 md:w-3/4 border-suta-lapis-lazuli border-2 rounded-lg  h-screen md:h-96">
            <div className=" flex flex-col items-center justify-center h-full w-full z-20">
              <div className="w-full flex flex-col md:flex-row">
                <div
                  data-aos="zoom-in"
                  className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
                >
                  <p className="font-display text-5xl mb-4">Akad Nikah</p>
                  <p>Minggu, 21 Maret 2021</p>
                  <p className="my-4">Pukul 09.00 - 10.00 WIB</p>
                </div>
                <div
                  data-aos="zoom-in"
                  className="px-4 md:px-0 md:w-1/2 text-center font-body mb-8 md:mb-0"
                >
                  <p className="font-display text-5xl mb-4">Resepsi</p>
                  <p>Minggu, 21 Maret 2021</p>
                  <p className="mt-4">Sesi 1: Pukul 11.00 - 13.00 WIB</p>
                  <p>Sesi 2: Pukul 13.00 - 15.00 WIB</p>
                  <p className="mb-4">Sesi 3: Pukul 15.00 - 17.00 WIB</p>
                </div>
              </div>
              <div data-aos="zoom-in" className="text-center mt-8 px-4">
                <p className="font-semibold">ECO CLUB CITRA RAYA</p>
                <p>
                  Jl. Ecopolis Citra Raya, Mekar Bakti, Kec. Panongan,
                  Tangerang, Banten
                </p>
              </div>
            </div>
          </div>
          <div className="h-80 w-5/6 md:w-3/4 mt-4 relative border-gray-200 border-2 rounded-lg overflow-hidden">
            <GoogleMaps />
          </div>
          <a
            href="https://www.google.com/maps/place/Eco+Club/@-6.2501354,106.5255575,15z/data=!4m5!3m4!1s0x0:0x134fb6d97ef96877!8m2!3d-6.2501354!4d106.5255575?hl=in-ID"
            target="_blank"
            rel="noreferrer"
            className="w-5/6 md:w-3/4 bg-gray-300 mt-4 rounded-sm py-2 cursor-pointer flex items-center justify-center"
          >
            <MdLocationOn size={20} /> Open Google Maps
          </a>
        </section>

        <ProtokolKesehatan />

        <section className="bg-gray-300 overflow-hidden">
          <div className="flex flex-col items-center justify-center py-6">
            <div className="font-display text-4xl mb-4">Guest Book</div>
            <a
              href="#form"
              className="border-gray-700 border-2 py-1 px-4 flex items-center justify-center font-body cursor-pointer"
            >
              <AiOutlineComment size={20} />
              <div cldivssName="ml-2">Write your wish</div>
            </a>
          </div>
          <div className="w-4/5 border-gray-700 border-t-2 py-4 text-gray-900 mx-auto">
            {data.map((comment, index) => (
              <div key={index} className="mb-2">
                <p className="font-body font-semibold mb-1">{comment.name}</p>
                <p className="font-body">{comment.message}</p>
              </div>
            ))}
            <form onSubmit={handleSubmit}>
              <div
                id="form"
                className="editor flex flex-col text-gray-800 max-w-2xl mt-6"
              >
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
        <section className="bg-gray-600 py-8 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center text-gray-300">
            <p className="font-body text-lg mb-3">Thank You</p>
            <p className="font-display text-4xl">Suta & Hanny</p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${process.env.API_URI}/api/suta-hanny`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();
  const messages = await data.data;

  return {
    props: { messages },
  };
}

export default Page;
