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
import { WaktuAlamatAcaraFour } from "../../components/invitation/WaktuAlamatAcara";
import { GuestBookOne } from "../../components/invitation/GuestBook";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalTwo } from "../../components/invitation/OpeningModal";
import { BottomMenuGeneral } from "../../components/BottomMenu";
import { GalleryList } from "../../components/invitation/Gallery";
import PlayerButton from "../../components/PlayerButton";
import QsArrum from "../../components/invitation/QsArrum";
import DateCountdown from "../../components/invitation/DateCountdown";
import {
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePhotograph,
} from "react-icons/hi";
import { BigTitle } from "../../components/BigTitle";

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
  {
    id: 6,
    type: "image",
    src: "/erni-gayuh/9.JPG",
  },
  {
    id: 7,
    type: "image",
    src: "/erni-gayuh/10.JPG",
  },
  {
    id: 8,
    type: "image",
    src: "/erni-gayuh/11.JPG",
  },
];

const bottomMenuData = [
  {
    id: 1,
    anchor: "hero",
    title: "Home",
    iconName: <HiOutlineHome size={26} />,
  },
  {
    id: 2,
    anchor: "couple",
    title: "Couple",
    iconName: <HiOutlineHeart size={26} />,
  },
  {
    id: 3,
    anchor: "event",
    title: "Event",
    iconName: <HiOutlineCalendar size={26} />,
  },
  {
    id: 4,
    anchor: "gallery",
    title: "Gallery",
    iconName: <HiOutlinePhotograph size={26} />,
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

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/erni-gayuh/a-thousand-years.mp3"));

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
      const res = await fetch(`/api/erni-gayuh/comment`, {
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

  return (
    <>
      <InvitationHead
        title="Erni & Gayuh Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/erni-gayuh/Nama+Tamu"
        imagePath="/erni-gayuh/lanscape.png"
      />
      <BottomMenuGeneral bgColor="pattern2" bottomMenuData={bottomMenuData} />
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
            buttonBgColor="bg-kharnisa-imam-rosegold"
            buttonTextColor="text-gray-50"
            backgroundImagePath="/kharnisa-imam/flower2.jpg"
            coupleImagePath="/erni-gayuh/square.jpg"
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
          imagePathPria="/erni-gayuh/pria.JPG"
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

        <GalleryList
          imageData={imageData}
          bgColor="bg-kharnisa-imam-rosegold"
          textColor="text-gray-200"
        />

        <BigTitle
          title="Guest Book"
          bgColor="bg-kharnisa-imam-silver"
          textColor="text-kharnisa-imam-rosegold"
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
          textColor="text-kharnisa-imam-rosegold"
          bgColor="bg-kharnisa-imam-silver"
          writeYourWishBorder="border-kharnisa-imam-rosegold border-2"
          wishBorder="border-kharnisa-imam-rosegold border-t-2"
          buttonBgColor="bg-kharnisa-imam-rosegold"
          buttonTextColor="text-kharnisa-imam-silver"
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
