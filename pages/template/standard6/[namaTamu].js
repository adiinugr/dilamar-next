import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "components/Footer";
import InvitationHead from "components/invitation/parts/InvitationHead";
import ProtokolKesehatan from "components/invitation/parts/ProtokolKesehatan";
import { HeroTwo } from "components/invitation/Hero";
import { NamaPengantin1 } from "components/invitation/NamaPengantin";
import DateCountdown from "components/invitation/DateCountdown";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import Terimakasih from "components/invitation/Terimakasih";
import { OpeningModalOne } from "components/invitation/OpeningModal";
import { GuestBookOne } from "components/invitation/GuestBook";
import QsArrum from "components/invitation/Ayyat";
import PlayerButton from "components/invitation/parts/PlayerButton";

const Page = ({ messages }) => {
  const [date] = useState("2021-06-05T11:00:00.000+07:00");

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
    setAudio(new Audio("/metta-adi/beautiful-in-white.mp3"));

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
      const res = await fetch(`/api/metta-adi/comment`, {
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
        title="Metta & Adi Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/metta-adi/Nama+Tamu"
        imagePath="/metta-adi/lanscape.jpg"
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
          className="absolute top-6 left-6 right-6 bottom-6 md:top-10 md:left-10 md:right-10 md:bottom-10 bg-gray-900"
        >
          <OpeningModalOne
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            namaPengantin="Metta & Adi"
            customColor="text-gray-50"
            buttonCustomColor="bg-gray-100 text-gray-800 bg-opacity-80"
            backgroundImagePath="/metta-adi/roses.jpg"
            withOverlay
          />
        </Modal>

        <HeroTwo
          name="Metta & Adi"
          date="05 Juni 2021"
          imagePath="/metta-adi/roses.jpg"
          customColor="text-may-kamal-platinum"
        />

        <QsArrum
          bgColor="bg-kharnisa-imam-rosegold"
          textColor="text-gray-200"
        />

        <NamaPengantin1
          namaWanita="Metta Permatasari"
          ortuWanita="Putri dari Bpk. Harun & Ibu Rudatin Endah Wibowanti"
          namaPria="Adi Nugroho"
          ortuPria="Putra dari Bpk. Purwadi & Ibu Puji Astuti"
          customColor="bg-gray-700 text-gray-200"
        />

        <DateCountdown
          date={date}
          bgColor="bg-gray-600"
          textColor="text-gray-200"
        />

        <WaktuAlamatAcaraFour
          tanggalAkad="Sabtu, 05 Juni 2021"
          waktuAkad="Pukul 08.00 WIB - Selesai"
          tanggalResepsi="Sabtu, 05 Juni 2021"
          waktuResepsi="Pukul 11.00 WIB - 13.00 WIB"
          namaTempat="Bekasi Convention Center"
          alamatTempat="Jl. Ahmad Yani, No 1, Marga Jaya, Kec. Bekasi Selatan, Kota Bekasi"
          googleMapsUri="https://maps.app.goo.gl/RRvQ8dWpvckv4BKb8"
          lat={-6.24926}
          lng={106.99241}
          customColor="bg-may-kamal-american-silver text-gray-200"
          buttonCustomColor="bg-gray-800 text-gray-200"
          bgImagePath="/metta-adi/roses.jpg"
        />

        <ProtokolKesehatan customColor="bg-kharnisa-imam-rosegold text-gray-200" />

        <GuestBookOne
          comments={data}
          name={name}
          setName={(e) => setName(e.target.value)}
          comment={comment}
          setComment={(e) => setComment(e.target.value)}
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          customColor="bg-gray-800 text-gray-200"
          borderColor="border-gray-200"
          buttonCustomColor="bg-gray-300 text-gray-800"
          inputTextColor="text-gray-800"
        />

        <Terimakasih
          namaPengantin="Metta & Adi"
          customColor="bg-may-kamal-platinum text-gray-800"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/metta-adi/comment`, {
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
