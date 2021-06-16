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
  WaktuAlamatAcaraThree,
} from "../../components/invitation/WaktuAlamatAcara";
import { GuestBookOne } from "../../components/invitation/GuestBook";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalTwo } from "../../components/invitation/OpeningModal";
import { BottomMenuGeneral } from "../../components/BottomMenu";
import { GalleryList } from "../../components/invitation/Gallery";
import PlayerButton from "../../components/PlayerButton";
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
    src: "/nindya-andhika/picture1.png",
  },
  {
    id: 2,
    type: "image",
    src: "/nindya-andhika/picture2.png",
  },
  {
    id: 3,
    type: "image",
    src: "/nindya-andhika/picture3.png",
  },
  {
    id: 4,
    type: "image",
    src: "/nindya-andhika/picture4.png",
  },
  {
    id: 5,
    type: "image",
    src: "/nindya-andhika/picture5.png",
  },
  {
    id: 6,
    type: "image",
    src: "/nindya-andhika/picture9.png",
  },
  {
    id: 7,
    type: "image",
    src: "/nindya-andhika/picture10.png",
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
  const [date] = useState("2021-07-11T08:00:00.000+07:00");

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
        title="Nindya & Andhika Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/nindya-andhika/Nama+Tamu"
        imagePath="/erni-gayuh/lanscape.png"
      />
      <BottomMenuGeneral
        bgColor="bg-kharnisa-imam-silver"
        textColor="text-nurul-gold"
        bottomMenuData={bottomMenuData}
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
          closeTimeoutMS={500}
          ariaHideApp={false}
          className="absolute top-0 left-0 right-0 bottom-0"
        >
          <OpeningModalTwo
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            textColor="text-nurul-gold"
            buttonBgColor="bg-nurul-gold"
            buttonTextColor="text-kharnisa-imam-silver"
            backgroundImagePath="/bg-gold/bg-gold-2.png"
          />
        </Modal>

        <HeroTwo
          name="Nindya & Andhika"
          date="11 Juli 2021"
          textColor="text-nurul-gold"
          nameTextSize="text-4xl md:text-8xl"
          imagePath="/bg-gold/bg-gold-1.png"
        />

        <BigTitle
          title="We Are Getting Married"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <NamaPengantinThree
          namaWanita="Nindya Ardella, SE"
          ortuWanita="Putri dari Alm. Bpk Hidayat & Ibu Desy Fandania Lasta Simbolon"
          namaPria="Andhika Ramadhan Budiprasetya, ST"
          ortuPria="Putra dari Bpk. Budiprastiyo Doelrachman & Ibu Sri Murniati"
          imagePathPria="/nindya-andhika/pria.jpg"
          imagePathWanita="/nindya-andhika/wanita.jpg"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
        />
        <DateCountdown
          date={date}
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
        />

        <BigTitle
          title="Akad & Resepsi"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <WaktuAlamatAcaraFour
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          overlayBgColor="bg-gray-50"
          akadImagePath="/nindya-andhika/picture2.png"
          resepsiImagePath="/nindya-andhika/picture6.png"
          tanggalAkad="Minggu, 11 Juli 2021"
          waktuAkad="Pukul 08.00 - selesai"
          tanggalResepsi="Minggu, 11 Juli 2021"
          waktuResepsiSesi1="Pukul 11.00 - 13.00 WIB"
          namaTempat="Masjid Jami’ Al Muhajirin"
          alamatTempat="Jl. Utama Raya Perumahan Duren Jaya RT.004/RW.010, Duren Jaya, Bekasi Timur"
          googleMapsUri="https://goo.gl/maps/Dphejb3SEx6mgaGY8"
          lat={-6.23774}
          lng={107.02059}
          buttonBgColor="bg-nurul-gold"
          buttonTextColor="text-kharnisa-imam-silver"
        />

        <BigTitle
          title="Protokol Kesehatan"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <ProtokolKesehatan
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
        />

        <BigTitle
          title="Our Gallery"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <GalleryList
          imageData={imageData}
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
        />

        <BigTitle
          title="Guest Book"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
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
          textColor="text-nurul-gold"
          bgColor="bg-nindya-andhika-gold"
          writeYourWishBorder="border-nurul-gold border-2"
          wishBorder="border-nurul-gold border-t-2"
          buttonBgColor="bg-nurul-gold"
          buttonTextColor="text-kharnisa-imam-silver"
        />

        <Terimakasih
          namaPengantin="Nindya & Andhika"
          bgColor="bg-nurul-gold"
          textColor="text-gray-800"
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
