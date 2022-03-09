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
import DateCountdown from "components/invitation/DateCountdown";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import Terimakasih from "components/invitation/Terimakasih";
import { OpeningModalNoInvitation } from "components/invitation/OpeningModal";
import { GuestBookOne } from "components/invitation/GuestBook";
import { QsArrum21 } from "components/invitation/Ayyat";
import PlayerButton from "components/invitation/parts/PlayerButton";
import { TidakMengundang } from "components/invitation/QuranAyat";

const Page = ({ messages }) => {
  const [date] = useState("2021-07-16T16:00:00.000+07:00");

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
    setAudio(new Audio("/nanda-iskandar/shania-twain-youre-still-the-one.mp3"));

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

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault();

    setGuestBookIsLoading(true);

    if (guestBookName === "" && guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!");
      setGuestBookIsLoading(false);
    } else {
      const res = await fetch(`/api/nanda-iskandar/comment`, {
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
        title="Nanda & Iskandar Wedding"
        description="Mohon doa restu atas
          pernikahan kami berdua. Tak lupa kami memohon maaf apa bila tidak
          dapat memberikan undangan, karena keadaan yang tidak memungkinkan."
        link="https://dilamar.vercel.app/nanda-iskandar/Nama+Tamu"
        imagePath="/nanda-iskandar/meta-image.jpeg"
      />
      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
          uar
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
            backgroundImagePath="/nanda-iskandar/picture3.jpeg"
            withOverlay
          />
        </Modal>

        <Hero
          name="Nanda & Iskandar"
          date="16 Juli 2021"
          textColor="text-gray-100"
          imagePath="/nanda-iskandar/picture1.jpeg"
          customColor="text-may-kamal-platinum"
          overlayColor="bg-gray-700"
          snowColor="#FFFFFF"
        />

        <TidakMengundang
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          name="Nanda & Iskandar"
        />

        <QsArrum21 bgColor="bg-nurul-gold" textColor="text-gray-200" />

        <NamaPengantinThree
          namaWanita="Nanda Aristya"
          ortuWanita="Putri Pertama dari Bpk. Djainul Arifin & Ibu Soepiyah"
          namaPria="Moch. Iskandar"
          ortuPria="Putra Kedua dari Bpk. H. Akdor & Ibu Hj. Saedah"
          imagePathPria="/nanda-iskandar/pria.jpeg"
          imagePathWanita="/nanda-iskandar/wanita.jpeg"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
        />

        <DateCountdown
          date={date}
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
        />

        <WaktuAlamatAcaraFour
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
          overlayBgColor="bg-gray-50"
          akadImagePath="/nanda-iskandar/picture2.jpeg"
          resepsiImagePath="/nanda-iskandar/picture1.jpeg"
          tanggalAkad="Jumat, 16 Juli 2021"
          waktuAkad="Pukul 06.30 - Selesai"
          tanggalResepsi="Jumat, 16 Juli 2021"
          waktuResepsiSesi1="Pukul 16.00 - Selesai"
          namaTempat="Kediaman Mempelai Putri"
          alamatTempat="Wedoro Candi 1 / Timpian No. 29 RT 03 RW 06 Waru-Sidoarjo"
          googleMapsUri="https://goo.gl/maps/Hzmk2VzmSDfViFFr9"
          lat={-7.35101}
          lng={112.7474}
          buttonBgColor="bg-nurul-gold"
          buttonTextColor="text-kharnisa-imam-silver"
          isResepsi={false}
        />

        <ProtokolKesehatan
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
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
          namaPengantin="Nanda & Iskandar"
          bgColor="bg-nurul-gold"
          textColor="text-gray-100"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://dilamar.vercel.app/api/nanda-iskandar/comment`,
    {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8"
      }
    }
  );
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
