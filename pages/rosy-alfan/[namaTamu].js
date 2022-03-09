import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "../../components/Footer";
import InvitationHead from "../../components/invitation/parts/InvitationHead";
import ProtokolKesehatan from "../../components/invitation/parts/ProtokolKesehatan";
import { Hero } from "../../components/invitation/Hero";
import { NamaPengantin1 } from "../../components/invitation/NamaPengantin";
import DateCountdown from "../../components/invitation/DateCountdown";
import { WaktuAlamatAcaraFour } from "../../components/invitation/WaktuAlamatAcara";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalOne } from "../../components/invitation/OpeningModal";
import { GuestBookOne } from "../../components/invitation/GuestBook";
import { QsAnNur32 } from "../../components/invitation/QuranAyat";
import PlayerButton from "../../components/invitation/parts/PlayerButton";

const Page = ({ messages }) => {
  const [date] = useState("2022-02-26T08:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const router = useRouter();
  const { namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/rosy-alfan/atta-aurel-cut.mp3"));

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(false);
    setShowPlayButton(true);
    handlePlayMusic();
  };

  const handlePlayMusic = () => {
    audio.play();
    setIsAudioPlaying(true);
  };

  const handlePauseMusic = () => {
    audio.pause();
    setIsAudioPlaying(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (name === "" && comment === "") {
      setError("Harus diisi semua ya!");
    } else {
      const res = await fetch(`/api/rosy-alfan/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          message: comment
        })
      });

      setData((prevData) => [
        ...prevData,
        {
          name,
          message: comment
        }
      ]);

      setIsLoading(false);

      setName("");
      setComment("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Rosy & Alfan Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/rosy-alfan/Nama+Tamu"
        imagePath="/rosy-alfan/foto1.jpg"
      />
      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
        />
      )}
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          closeTimeoutMS={500}
          className="absolute top-6 left-6 right-6 bottom-6 md:top-10 md:left-10 md:right-10 md:bottom-10 bg-gray-900"
        >
          <OpeningModalOne
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            namaPengantin="Rosy & Alfan"
            buttonBgColor="bg-rosy-alfan-blue"
            backgroundImagePath="/rosy-alfan/blue-flower.jpg"
            withOverlay
          />
        </Modal>

        <Hero
          name="Rosy & Alfan"
          date="26 Februari 2022"
          imagePath="/rosy-alfan/foto1port.jpg"
          textColor="text-white"
          snowColor="#ffffff"
          overlayColor="bg-gray-800"
        />

        <QsAnNur32 bgColor="bg-rosy-alfan-blue" textColor="text-white" />

        <NamaPengantin1
          namaWanita="Rosyikhotul Ilmiyah, S.Pd."
          ortuWanita="Putri dari Bpk. Miftakhur Rozi & Ibu Maghfirotin"
          namaPria="Ahsanul Alfan, S.Pd."
          ortuPria="Putra dari Bpk. Mahson & Ibu Siti Mariya Ulfah"
          customColor="bg-white text-rosy-alfan-blue"
        />

        <DateCountdown
          date={date}
          bgColor="bg-rosy-alfan-blue"
          textColor="text-white"
        />

        <WaktuAlamatAcaraFour
          bgColor="bg-white"
          textColor="text-white"
          overlayBgColor="bg-gray-700"
          overlayOpacity="opacity-60"
          akadImagePath="/rosy-alfan/foto1port.jpg"
          resepsiImagePath="/rosy-alfan/foto2port.jpg"
          tanggalAkad="Sabtu, 26 Februari 2022"
          waktuAkad="Pukul 08.00 - Selesai"
          tanggalResepsi="Sabtu, 26 Februari 2022"
          waktuResepsi="Pukul 13.00 - Selesai"
          namaTempat="Kediaman Mempelai Putri"
          alamatTempat="Jl. Suaka Burung, RT 003 RW 009, Pangkahkulon, Ujungpangkah, Gresik "
          googleMapsUri="https://goo.gl/maps/gP5nXqoNp6vBCHPZ6"
          lat={-6.90403}
          lng={112.55562}
          buttonBgColor="bg-rosy-alfan-blue"
          buttonTextColor="text-white"
        />

        <ProtokolKesehatan
          bgColor="bg-rosy-alfan-blue"
          textColor="text-white"
        />

        <GuestBookOne
          comments={data}
          name={name}
          setName={(e) => setName(e.target.value)}
          comment={comment}
          setComment={(e) => setComment(e.target.value)}
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          bgColor="bg-white"
          writeYourWishBorder="border-2 border-rosy-alfan-blue"
        />

        <Terimakasih
          namaPengantin="Rosy & Alfan"
          customColor="bg-rosy-alfan-blue text-white"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/rosy-alfan/comment`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8"
    }
  });
  const data = await res.json();
  const messages = await data.data;

  const getData = () => {
    if (messages) {
      return messages;
    } else {
      return [];
    }
  };

  return {
    props: { messages: getData() }
  };
}

export default Page;
