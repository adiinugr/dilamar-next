import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "../../../components/Footer";
import InvitationHead from "../../../components/invitation/parts/InvitationHead";
import ProtokolKesehatan from "../../../components/invitation/parts/ProtokolKesehatan";
import { Hero } from "../../../components/invitation/Hero";
import { NamaPengantin4 } from "../../../components/invitation/NamaPengantin";
import DateCountdown from "../../../components/invitation/DateCountdown";
import { WaktuAlamatAcaraFive } from "../../../components/invitation/WaktuAlamatAcara";
import Terimakasih from "../../../components/invitation/Terimakasih";
import { OpeningModalWithTwoDynamicVar } from "../../../components/invitation/OpeningModal";
import { GuestBookOne } from "../../../components/invitation/GuestBook";
import { QsAnNur32 } from "../../../components/invitation/QuranAyat";
import PlayerButton from "../../../components/invitation/parts/PlayerButton";
import { StoryOne } from "../../../components/invitation/Story";
import { GalleryGrid } from "../../../components/invitation/Gallery";

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/sari-aby/7.1 Gallery.jpeg"
  },
  {
    id: 2,
    type: "image",
    src: "/sari-aby/7.2 Gallery.jpeg"
  },
  {
    id: 3,
    type: "image",
    src: "/sari-aby/7.3 Gallery.jpeg"
  },
  {
    id: 4,
    type: "image",
    src: "/sari-aby/7.4 Gallery.jpeg"
  },
  {
    id: 5,
    type: "image",
    src: "/sari-aby/7.5 Gallery.jpeg"
  },
  {
    id: 6,
    type: "image",
    src: "/sari-aby/7.6 Gallery.jpeg"
  }
];

const Page = ({ messages }) => {
  const [date] = useState("2022-02-16T10:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const router = useRouter();
  const { jenisTamu, namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");
  const jTamu = jenisTamu.replace("+", " ");

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
      const res = await fetch(`/api/sari-aby/comment`, {
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
        title="Sari & Aby Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/sari-aby/Jenis+Tamu/Nama+Tamu"
        imagePath="/sari-aby/1. Sampul Undangan.jpeg"
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
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900"
        >
          <OpeningModalWithTwoDynamicVar
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            jenisTamu={jTamu}
            namaPengantin="Sari & Aby"
            buttonBgColor="bg-sari-aby-dark-orange"
            backgroundImagePath="/sari-aby/1. Sampul Undangan.jpeg"
            withOverlay
          />
        </Modal>

        <Hero
          name="Sari & Aby"
          date="February 16th, 2022"
          imagePath="/sari-aby/2. Pembukaan.jpeg"
          textColor="text-white"
          snowColor="#ffffff"
          overlayColor="bg-gray-800"
        />

        <QsAnNur32 bgColor="bg-sari-aby-dark-orange" textColor="text-white" />

        <NamaPengantin4
          namaWanita="Sari"
          namaLengkapWanita="Pradipta Dwi Kumalasari, S.Sos"
          ortuWanita="Putri dari Bpk. Edy Bambang Sariyanto & Ibu Sarsanti Pudjiastuti (Almh)"
          namaPria="Aby"
          namaLengkapPria="Abyan Kurniawan, S.H"
          ortuPria="Putra dari Bpk. H. Bambang Kusdarmadi (Alm) & Ibu Wiena Permanasari"
          bgColor="bg-sari-aby-soft-orange"
          textColor="text-sari-aby-dark-orange"
          imagePathPria="/sari-aby/aby.jpeg"
          imagePathWanita="/sari-aby/sari.jpeg"
        />

        <DateCountdown
          date={date}
          bgColor="bg-sari-aby-dark-orange"
          textColor="text-white"
        />

        <StoryOne
          firstMeetImagePath="/sari-aby/first-meet.jpg"
          firstDateImagePath="/sari-aby/first-date.jpg"
          proposalImagePath="/sari-aby/proposal.jpg"
          firstMeetText="June 19, 2019 was our first meeting as colleagues. At first everything went well and we were good friends at work without ever having imagined we would get married one day."
          firstDateText='God "matched" us in unexpected ways. As if to be an answer to our prayers. A year later, on August 26, 2020, we decided to step up in a relationship and start to learn to love each other.'
          proposalText="The distances of 600 kilometers from Jakarta to Madiun became one of the witnesses of our journey, Finally exactly 2 years since we met and right on Sari's birthday, we got engaged on June 19, 2021."
          bgColor="bg-sari-aby-soft-orange"
          textColor="text-gray-800"
        />

        <WaktuAlamatAcaraFive
          bgColor="bg-sari-aby-soft-orange"
          textColor="text-sari-aby-dark-orange"
          overlayBgColor="bg-gray-700"
          overlayOpacity="opacity-60"
          tanggalAkad="Rabu, 16 Februari 2022"
          waktuAkad="Pukul 10.00 WIB"
          waktuResepsi="Pukul 12.00 - 13.00 WIB"
          namaTempat="Kediaman Mempelai Wanita"
          namaPerumahan="Perumahan Dumai Indah"
          alamatTempat="Jalan Trijaya X/276 RT.031/RW.007, Kelurahan Klegen, Kecamatan Kartoharjo, Kota Madiun"
          googleMapsUri="https://maps.app.goo.gl/rBGyVwGZUENaruMx5"
          lat={-7.62705}
          lng={111.54117}
          borderColor="border-sari-aby-dark-orange"
          buttonBgColor="bg-sari-aby-dark-orange"
          buttonTextColor="text-gray-100"
        />

        <ProtokolKesehatan
          bgColor="bg-sari-aby-dark-orange"
          textColor="text-gray-100"
        />

        <GalleryGrid
          bgColor="bg-sari-aby-soft-orange"
          textColor="text-sari-aby-dark-orange"
          imageData={imageData}
          height={300}
          width={350}
          numberOfGridCols={3}
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
          textColor="text-sari-aby-dark-orange"
          writeYourWishBorder="border-2 border-sari-aby-dark-orange"
          buttonBgColor="bg-sari-aby-dark-orange"
        />

        <Terimakasih
          namaPengantin="Sari & Aby"
          bgColor="bg-sari-aby-dark-orange"
          textColor="text-gray-100"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/sari-aby/comment`, {
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
