import { useContext, useEffect, useState } from "react";
import Aos from "aos";

import "aos/dist/aos.css";

import { AudioContext } from "../../context/AudioContext";

import Footer from "../../components/Footer";
import InvitationHead from "../../components/InvitationHead";
import ProtokolKesehatan from "../../components/ProtokolKesehatan";
import Hero from "../../components/invitation/Hero";
import QsArrum from "../../components/invitation/QsArrum";
import { NamaPengantin2 } from "../../components/invitation/NamaPengantin";
import DateCountdown from "../../components/invitation/DateCountdown";
import WaktuAlamatAcara from "../../components/invitation/WaktuAlamatAcara";
import GuestBook from "../../components/GuestBook";
import Terimakasih from "../../components/invitation/Terimakasih";

const Page = ({ messages }) => {
  const [date] = useState("2021-04-04T16:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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

    setIsLoading(true);

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

      setIsLoading(false);

      setName("");
      setComment("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Nurul & Rega Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/nurul-rega"
      />
      <div>
        <Hero name="Nurul & Rega" date="04 April 2021" />

        <QsArrum />

        <NamaPengantin2
          namaWanita="Nurul Indah Suhartinah"
          ortuWanita="Putri Pertama dari Bpk. Catur A. Pramono & Nevi Susanti"
          namaPria="Rega Reksan Deva"
          ortuPria="Putra Terakhir dari Bpk. Trisnadi & Ibu Hesty Yuliaty"
        />

        <DateCountdown date={date} />

        <WaktuAlamatAcara
          tanggalAkad="Minggu, 04 April 2021"
          waktuAkad="Pukul 16.00 WIB - Selesai"
          tanggalResepsi="Minggu, 04 April 2021"
          waktuResepsiSesi1="Sesi 1: Pukul 19.00 - 20.00 WIB"
          waktuResepsiSesi2="Sesi 2: Pukul 20.00 - 21.00 WIB"
          namaTempat="Gedung Aneka Bhakti II Depsos, Bekasi Timur"
          googleMapsUri="https://www.google.co.id/maps/place/Gedung+Aneka+Bhakti+II+depsos+bekasi+timur/@-6.253035,107.0199683,17z/data=!3m1!4b1!4m5!3m4!1s0x2e698e62504bb22f:0x818439d1931381c8!8m2!3d-6.253035!4d107.022157"
          lat={-6.25301}
          lng={107.02216}
        />

        <ProtokolKesehatan />

        <GuestBook
          comments={data}
          name={name}
          setName={(e) => setName(e.target.value)}
          comment={comment}
          setComment={(e) => setComment(e.target.value)}
          error={error}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />

        <Terimakasih namaPengantin="Nurul & Rega" />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://dilamar.vercel.app/api/nurul-rega`, {
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
