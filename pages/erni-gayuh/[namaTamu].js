import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "../../components/Footer";
import InvitationHead from "../../components/InvitationHead";
import ProtokolKesehatan from "../../components/ProtokolKesehatan";
import { HeroTwo } from "../../components/invitation/Hero";
import { NamaPengantinThree } from "../../components/invitation/NamaPengantin";
import {
  WaktuAlamatAcaraFour,
  WaktuAlamatAcaraOne,
  WaktuAlamatAcaraTwo,
} from "../../components/invitation/WaktuAlamatAcara";
import {
  GuestBookOne,
  GuestBookTwo,
} from "../../components/invitation/GuestBook";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalTwo } from "../../components/invitation/OpeningModal";
import { BottomMenuGeneral } from "../../components/BottomMenu";
import RSVP from "../../components/invitation/RSVP";
import { GalleryOne, GalleryTwo } from "../../components/invitation/Gallery";
import PlayerButton from "../../components/PlayerButton";
import QsArrum from "../../components/invitation/QsArrum";
import DateCountdown from "../../components/invitation/DateCountdown";

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/erni-gayuh/1.jpg",
  },
  {
    id: 2,
    type: "image",
    src: "/erni-gayuh/2.jpg",
  },
  {
    id: 3,
    type: "image",
    src: "/erni-gayuh/3.jpg",
  },
  {
    id: 4,
    type: "image",
    src: "/erni-gayuh/4.jpg",
  },
  {
    id: 5,
    type: "image",
    src: "/erni-gayuh/5.jpg",
  },
];

const Page = ({ messages }) => {
  const [date] = useState("2021-06-13T08:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const router = useRouter();
  const { namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");

  const [guestBookName, setGuestBookName] = useState("");
  const [guestBookComment, setGuestBookComment] = useState("");
  const [guestBookIsLoading, setGuestBookIsLoading] = useState(false);
  const [guestBookError, setGuestBookError] = useState("");

  const [rsvpName, setRsvpName] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState("");
  // const [rsvpMessage, setRsvpMessage] = useState("");
  const [rsvpIsLoading, setRsvpIsLoading] = useState(false);
  const [rsvpError, setRsvpError] = useState("");
  const [rsvpSuccess, setRsvpSuccess] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/kharnisa-imam/the-overtunes.mp3"));

    return () => {
      if (audio) {
        audio.pause();
        setIsAudioPlaying(false);
      }
    };
  }, []);

  const handlePlayMusic = () => {
    audio.play();
    setIsAudioPlaying(true);
  };

  const handlePauseMusic = () => {
    audio.pause();
    setIsAudioPlaying(false);
  };

  const handleOpenModal = () => {
    setModalIsOpen(false);
    setShowPlayButton(true);
    handlePlayMusic();
  };

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault();

    setGuestBookIsLoading(true);

    if (guestBookName === "" && guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!");
      setGuestBookIsLoading(false);
    } else {
      const res = await fetch(`/api/kharnisa-imam/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: guestBookName,
          message: guestBookComment,
        }),
      });

      setData((prevData) => [
        ...prevData,
        {
          name: guestBookName,
          message: guestBookComment,
        },
      ]);

      setGuestBookIsLoading(false);

      setGuestBookName("");
      setGuestBookComment("");
    }
  };

  const handleRsvpSubmit = async (event) => {
    event.preventDefault();

    setRsvpIsLoading(true);

    if (rsvpName === "" && rsvpStatus === "") {
      setRsvpSuccess("");
      setRsvpError("Harus diisi semua ya!");
      setRsvpIsLoading(false);
    } else {
      const res = await fetch(`/api/kharnisa-imam/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: rsvpName,
          status: rsvpStatus,
          // message: rsvpMessage,
        }),
      });

      setRsvpIsLoading(false);
      setRsvpError("");
      setRsvpSuccess("Status Kehadiran Berhasil Dikirim!");

      setRsvpName("");
      setRsvpStatus("");
      // setRsvpMessage("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Erni & Gayuh Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/erni-gayuh/Nama+Tamu"
        imagePath="/kharnisa-imam/couple-square.png"
      />
      <BottomMenuGeneral pattern="pattern2" />
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
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900"
        >
          <OpeningModalTwo
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            namaPengantin="Erni & Gayuh"
            customColor="text-gray-50"
            buttonCustomColor="bg-kharnisa-imam-rosegold text-gray-50"
            backgroundImagePath="/kharnisa-imam/flower2.jpg"
            coupleImagePath="/kharnisa-imam/couple-square.png"
            withOverlay
          />
        </Modal>

        <HeroTwo
          name="Erni & Gayuh"
          date="13 Juni 2021"
          customColor="text-gray-100"
          overlayColor="bg-gray-900"
          imagePath="/erni-gayuh/2.jpg"
        />

        <QsArrum
          bgColor="bg-kharnisa-imam-rosegold"
          textColor="text-gray-200"
        />

        <NamaPengantinThree
          namaWanita="Erni Tyas Pujiastuti, S.Pd."
          ortuWanita="Putri dari Bpk. Tuyar & Ibu Suyati"
          namaPria="Gayuh Priwibowo, S.Pd."
          ortuPria="Putra dari Bpk. Agus Prihmiardi & Ibu Sri Winarti"
          imagePathPria="/erni-gayuh/pria.jpg"
          imagePathWanita="/erni-gayuh/wanita.jpg"
          customColor="bg-kharnisa-imam-silver text-kharnisa-imam-rosegold"
        />

        <DateCountdown
          date={date}
          bgColor="bg-kharnisa-imam-rosegold"
          textColor="text-gray-200"
        />

        <WaktuAlamatAcaraFour
          tanggalAkad="Minggu, 13 Juni 2021"
          waktuAkad="Pukul 08.00 - 09.00 WIB"
          tanggalResepsi="Minggu, 13 Juni 2021"
          waktuResepsiSesi1="Pukul 11.00 - 13.00 WIB"
          waktuResepsiSesi2="Pukul 13.00 - 15.00 WIB"
          waktuResepsiSesi3="Pukul 15.00 - 17.00 WIB"
          namaTempat="Kediaman Mempelai Wanita"
          alamatTempat="Jalan Kong Rimin No. 31A, Rawa Bebek, Pulogebang, Cakung, Jakarta Timur."
          googleMapsUri="https://www.google.com/maps/place/Jl.+Kong+Rimin,+RW.1,+Pulo+Gebang,+Kec.+Cakung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13950/@-6.209075,106.9613335,17z/data=!4m5!3m4!1s0x2e698b811463350f:0x7056c03293cf495a!8m2!3d-6.209075!4d106.9635222"
          lat={-6.20881}
          lng={106.96354}
          customColor="bg-kharnisa-imam-silver text-gray-100"
          buttonCustomColor="bg-kharnisa-imam-rosegold text-kharnisa-imam-silver"
          bgImagePath="/erni-gayuh/couple.jpg"
        />

        <ProtokolKesehatan customColor="bg-kharnisa-imam-silver text-kharnisa-imam-rosegold" />

        <GalleryTwo
          imageData={imageData}
          customColor="bg-kharnisa-imam-rosegold text-gray-200"
        />

        <GuestBookOne
          comments={data}
          name={guestBookName}
          setName={(e) => setGuestBookName(e.target.value)}
          comment={guestBookComment}
          setComment={(e) => setGuestBookComment(e.target.value)}
          error={guestBookError}
          isLoading={guestBookIsLoading}
          handleSubmit={handleGuestBookSubmit}
          customColor="bg-kharnisa-imam-silver text-kharnisa-imam-rosegold"
          buttonCustomColor="bg-kharnisa-imam-rosegold text-kharnisa-imam-silver"
          borderColor="border-kharnisa-imam-rosegold"
          inputTextColor="text-kharnisa-imam-rosegold"
        />

        <Terimakasih
          namaPengantin="Erni & Gayuh"
          customColor="bg-kharnisa-imam-silver text-kharnisa-imam-rosegold"
        />

        <Footer />
        <div className="mb-20"></div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/erni-gayuh/comment`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
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
    props: { messages: getData() },
  };
}

export default Page;
