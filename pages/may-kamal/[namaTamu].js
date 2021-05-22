import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Aos from "aos";
import Modal from "react-modal";

import "aos/dist/aos.css";

import Footer from "../../components/Footer";
import InvitationHead from "../../components/InvitationHead";
import ProtokolKesehatan from "../../components/ProtokolKesehatan";
import { HeroOne } from "../../components/invitation/Hero";
import QsArrum from "../../components/invitation/QsArrum";
import { NamaPengantin2 } from "../../components/invitation/NamaPengantin";
import DateCountdown from "../../components/invitation/DateCountdown";
import { WaktuAlamatAcaraOne } from "../../components/invitation/WaktuAlamatAcara";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalOne } from "../../components/invitation/OpeningModal";
import BigImage from "../../components/invitation/BigImage";
import { GuestBookOne } from "../../components/invitation/GuestBook";

const Page = ({ messages }) => {
  const [date] = useState("2021-04-04T16:00:00.000+07:00");

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

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    setAudio(new Audio("/suta-hanny/cristian-since.mp3"));

    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, []);

  const handleOpenModal = () => {
    setModalIsOpen(false);
    audio.play();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (name === "" && comment === "") {
      setError("Harus diisi semua ya!");
    } else {
      const res = await fetch(`/api/may-kamal`, {
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

      setIsLoading(false);

      setName("");
      setComment("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Indah & Rega Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/nurul-rega"
        imagePath="/nurul-rega/lanscape.jpg"
      />
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          className="absolute top-6 left-6 right-6 bottom-6 md:top-10 md:left-10 md:right-10 md:bottom-10 bg-gray-900"
        >
          <OpeningModalOne
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            namaPengantin="Indah & Rega"
            customColor="text-gray-50"
            buttonCustomColor="bg-gray-100 text-gray-800 bg-opacity-80"
            backgroundImagePath="/nurul-rega/potrait.jpg"
            withOverlay
          />
        </Modal>

        <HeroOne
          name="Indah & Rega"
          date="04 April 2021"
          customColor="bg-suta-seashell text-nurul-gold"
        />

        <QsArrum bgColor="bg-nurul-color4" textColor="text-nurul-color2" />

        <NamaPengantin2
          namaWanita="Nurul Indah Suhartinah"
          ortuWanita="Putri Pertama dari Bpk. Catur A. Pramono & Nevi Susanti"
          namaPria="Rega Reksan Deva"
          ortuPria="Putra Terakhir dari Bpk. Trisnadi & Ibu Hesty Yuliaty"
          customColor="bg-suta-seashell text-nurul-gold"
        />

        <DateCountdown
          date={date}
          bgColor="bg-nurul-color4"
          textColor="text-nurul-color2"
        />
        <BigImage imagePath="/nurul-rega/potrait-2.jpg" />

        <WaktuAlamatAcaraOne
          tanggalAkad="Minggu, 04 April 2021"
          waktuAkad="Pukul 16.00 WIB - Selesai"
          tanggalResepsi="Minggu, 04 April 2021"
          waktuResepsiSesi1="Sesi 1: Pukul 19.00 - 20.00 WIB"
          waktuResepsiSesi2="Sesi 2: Pukul 20.00 - 21.00 WIB"
          namaTempat="Gedung Aneka Bhakti II Depsos, Bekasi Timur"
          googleMapsUri="https://www.google.co.id/maps/place/Gedung+Aneka+Bhakti+II+depsos+bekasi+timur/@-6.253035,107.0199683,17z/data=!3m1!4b1!4m5!3m4!1s0x2e698e62504bb22f:0x818439d1931381c8!8m2!3d-6.253035!4d107.022157"
          lat={-6.25301}
          lng={107.02216}
          customColor="bg-suta-seashell text-nurul-gold"
          buttonCustomColor="bg-nurul-color4 text-nurul-color2"
        />

        <ProtokolKesehatan customColor="bg-nurul-color4 text-nurul-color2" />

        <GuestBookOne
          comments={data}
          name={name}
          setName={(e) => setName(e.target.value)}
          comment={comment}
          setComment={(e) => setComment(e.target.value)}
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
          customColor="bg-suta-seashell text-nurul-gold"
          buttonCustomColor="bg-nurul-color4 text-nurul-color2"
        />

        <Terimakasih
          namaPengantin="Indah & Rega"
          customColor="bg-nurul-color4 text-nurul-color2"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/may-kamal`, {
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
