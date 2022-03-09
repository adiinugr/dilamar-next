import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "components/Footer";
import InvitationHead from "components/invitation/parts/InvitationHead";
import ProtokolKesehatan from "components/invitation/parts/ProtokolKesehatan";
import { Hero } from "components/invitation/Hero";
import { NamaPengantinThree } from "components/invitation/NamaPengantin";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import { GuestBookOne } from "components/invitation/GuestBook";
import Terimakasih from "components/invitation/Terimakasih";
import { OpeningModalNoInvitation } from "components/invitation/OpeningModal";
import { BottomTabMenu } from "components/invitation/parts/BottomTabMenu";
import { GalleryList } from "components/invitation/Gallery";
import PlayerButton from "components/invitation/parts/PlayerButton";
import DateCountdown from "components/invitation/DateCountdown";
import Angpau from "components/invitation/Angpau";

import {
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePhotograph
} from "react-icons/hi";
import { BigTitle } from "components/invitation/parts/BigTitle";
import { TidakMengundang } from "components/invitation/QuranAyat";

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/ririk-roy/image/01-min.jpg"
  },
  {
    id: 2,
    type: "image",
    src: "/ririk-roy/image/02-min.jpg"
  },
  {
    id: 3,
    type: "image",
    src: "/ririk-roy/image/03-min.jpg"
  },
  {
    id: 4,
    type: "image",
    src: "/ririk-roy/image/04-min.jpg"
  },
  {
    id: 5,
    type: "image",
    src: "/ririk-roy/image/05-min.jpg"
  },
  {
    id: 6,
    type: "image",
    src: "/ririk-roy/image/06-min.jpg"
  },
  {
    id: 7,
    type: "image",
    src: "/ririk-roy/image/07-min.JPG"
  },
  {
    id: 8,
    type: "image",
    src: "/ririk-roy/image/08-min.JPG"
  },
  {
    id: 9,
    type: "image",
    src: "/ririk-roy/image/09-min.JPG"
  },
  {
    id: 10,
    type: "image",
    src: "/ririk-roy/image/10-min.JPG"
  }
];

const bottomMenuData = [
  {
    id: 1,
    anchor: "hero",
    title: "Home",
    iconName: <HiOutlineHome size={26} />
  },
  {
    id: 2,
    anchor: "couple",
    title: "Couple",
    iconName: <HiOutlineHeart size={26} />
  },
  {
    id: 3,
    anchor: "event",
    title: "Event",
    iconName: <HiOutlineCalendar size={26} />
  },
  {
    id: 4,
    anchor: "gallery",
    title: "Gallery",
    iconName: <HiOutlinePhotograph size={26} />
  }
];

const Page = ({ messages }) => {
  const [date] = useState("2021-08-07T09:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const router = useRouter();
  const { namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");

  const [guestBookName, setGuestBookName] = useState("");
  const [guestBookComment, setGuestBookComment] = useState("");
  const [guestBookIsLoading, setGuestBookIsLoading] = useState(false);
  const [guestBookError, setGuestBookError] = useState("");

  const [angpauName, setAngpauName] = useState("");
  const [angpauBank, setAngpauBank] = useState("");
  const [angpauNominal, setAngpauNominal] = useState("");
  const [rawValue, setRawValue] = useState(" ");
  const [angpauIsLoading, setAngpauIsLoading] = useState(false);
  const [angpauError, setAngpauError] = useState("");
  const [angpauSuccess, setAngpauSuccess] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/ririk-roy/edsheran-perfect.mp3"));

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

  const handleAngpauOnValueChange = (value) => {
    setRawValue(value === undefined ? "undefined" : value || " ");

    if (!value) {
      setAngpauNominalNominal("");
      return;
    }

    if (Number.isNaN(Number(value))) {
      setAngpauError("Masukkan Angka Saja!");
      return;
    }

    setAngpauNominal(value);
  };

  const handleAngpauSubmit = async (event) => {
    event.preventDefault();

    setAngpauIsLoading(true);

    if (angpauName === "" && angpauBank === "" && angpauNominal === "") {
      setAngpauSuccess("");
      setAngpauError("Harus diisi semua ya!");
      setAngpauIsLoading(false);
    } else {
      const res = await fetch(`/api/roy-ririk/angpau`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: angpauName,
          bank: angpauBank,
          nominal: angpauNominal
        })
      });

      setAngpauIsLoading(false);
      setAngpauError("");
      setAngpauSuccess("Konfirmasi Angpau Online Berhasil Dikirim!");

      setAngpauName("");
      setAngpauBank("");
      setAngpauNominal("");
    }
  };

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault();

    setGuestBookIsLoading(true);

    if (guestBookName === "" && guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!");
      setGuestBookIsLoading(false);
    } else {
      const res = await fetch(`/api/roy-ririk/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: guestBookName,
          message: guestBookComment
        })
      });

      setData((prevData) => [
        ...prevData,
        {
          name: guestBookName,
          message: guestBookComment
        }
      ]);

      setGuestBookIsLoading(false);

      setGuestBookName("");
      setGuestBookComment("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Roy & Ririk Wedding"
        description="Mohon doa restu atas
          pernikahan kami berdua. Tak lupa kami memohon maaf apa bila tidak
          dapat memberikan undangan, karena keadaan yang tidak memungkinkan."
        link="https://dilamar.vercel.app/roy-ririk/Nama+Tamu"
        imagePath="/ririk-roy/meta-image-com.png"
      />
      <BottomTabMenu
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
          <OpeningModalNoInvitation
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            textColor="text-gray-100"
            buttonBgColor="bg-nurul-gold"
            buttonTextColor="text-kharnisa-imam-silver"
            backgroundImagePath="/ririk-roy/picture-1.JPG"
            withOverlay
          />
        </Modal>

        <Hero
          name="Roy & Ririk"
          date="07 Agustus 2021"
          textColor="text-gray-100"
          nameTextSize="text-4xl md:text-8xl"
          imagePath="/ririk-roy/picture-2.JPG"
          overlayColor="bg-gray-700"
          snowColor="#ffffff"
        />

        <TidakMengundang
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
          name="Roy & Ririk"
        />

        <BigTitle
          anchorId="couple"
          title="We Are Getting Married"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <NamaPengantinThree
          namaWanita="Ririk Indah Wiyanti, S.T."
          ortuWanita="Putri pertama dari Bpk Rasioto & Ibu Jaining"
          namaPria="Roy Prasetyo, S.H."
          ortuPria="Putra kedua dari Alm. Bpk. Semin & Ibu Tiningsih"
          imagePathPria="/ririk-roy/pria.JPG"
          imagePathWanita="/ririk-roy/wanita.JPG"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          manFirst
        />
        <DateCountdown
          date={date}
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
        />

        <BigTitle
          anchorId="event"
          title="Akad"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          borderColor="border-nurul-gold"
        />

        <WaktuAlamatAcaraFour
          bgColor="bg-nindya-andhika-gold"
          textColor="text-gray-100"
          overlayBgColor="bg-gray-500"
          akadImagePath="/ririk-roy/picture-3.JPG"
          resepsiImagePath="/nindya-andhika/picture6.png"
          tanggalAkad="Sabtu, 07 Agustus 2021"
          waktuAkad="Pukul 09.00 - Selesai"
          tanggalResepsi="Minggu, 11 Juli 2021"
          waktuResepsiSesi1="Pukul 11.00 - 13.00 WIB"
          namaTempat="Kediaman Mempelai Perempuan"
          alamatTempat="DSN. YUNGYANG DS. YUNGYANG RT/RW 002/002 KEC. MODO KAB. LAMONGAN"
          googleMapsUri="https://maps.app.goo.gl/zwgJSXPWQfdizhwaA"
          lat={-7.23563}
          lng={112.16578}
          buttonBgColor="bg-nurul-gold"
          buttonTextColor="text-kharnisa-imam-silver"
          isResepsi={false}
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
          anchorId="gallery"
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
          title="Angpau Online"
          textSize="text-3xl md:text-5xl"
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
          borderColor="border-gray-200"
        />

        <Angpau
          name={angpauName}
          setName={(e) => setAngpauName(e.target.value)}
          bank={angpauBank}
          setBank={(e) => setAngpauBank(e.target.value)}
          nominal={angpauNominal}
          setNominal={handleAngpauOnValueChange}
          error={angpauError}
          succcess={angpauSuccess}
          handleSubmit={handleAngpauSubmit}
          isLoading={angpauIsLoading}
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
          buttonBgColor="bg-gray-200"
          buttonTextColor="text-gray-600"
          inputTextColor="text-gray-800"
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
          namaPengantin="Roy & Ririk"
          bgColor="bg-nurul-gold"
          textColor="text-gray-100"
        />

        <Footer />
        <div className="mb-20"></div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/roy-ririk/comment`, {
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
