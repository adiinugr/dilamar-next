import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useRouter } from "next/router";

import InvitationHead from "components/invitation/parts/InvitationHead";
import { OpeningModalWithCoupleImage } from "components/invitation/OpeningModal";
import { Hero } from "components/invitation/Hero";
import { QsArrum21 } from "components/invitation/Ayyat";
import { NamaPengantinThree } from "components/invitation/NamaPengantin";
import { DoubleWave, SingleWave } from "components/invitation/parts/Divider";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import { GuestBookWithPopup } from "components/invitation/GuestBook";
import Terimakasih from "components/invitation/Terimakasih";
import InvitationFooter from "components/invitation/InvitationFooter";
import DateCountdown from "components/invitation/DateCountdown";
import PlayerButton from "components/invitation/parts/PlayerButton";

const Page = ({ comments }) => {
  const [data, setData] = useState(comments);

  const router = useRouter();
  const { namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");

  const [guestBookName, setGuestBookName] = useState("");
  const [guestBookComment, setGuestBookComment] = useState("");
  const [guestBookIsLoading, setGuestBookIsLoading] = useState(false);
  const [guestBookError, setGuestBookError] = useState("");
  const [guestBookSuccess, setGuestBookSuccess] = useState("");

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const date = new Date("11 March 2023 06:15 UTC+7");
  const isoDate = date.toISOString();

  useEffect(() => {
    setAudio(new Audio("/musics/beautiful-in-white.mp3"));

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

    if (guestBookName === "" || guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!");
      setGuestBookIsLoading(false);
    } else {
      const res = await fetch(`/api/test-api/comment`, {
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

      setGuestBookSuccess("Selamat! Pesanmu berhasil dikirim.");
      setGuestBookName("");
      setGuestBookComment("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Galih & Ratna Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/template/premium2/Nama+Tamu"
        imagePath="/images/couple/meta-image-min.png"
      />

      <ReactModal
        isOpen={modalIsOpen}
        closeTimeoutMS={500}
        ariaHideApp={false}
        className="absolute top-0 left-0 right-0 bottom-0 z-40"
      >
        <OpeningModalWithCoupleImage
          handleOpenModal={handleOpenModal}
          namaTamu={tamu}
          namaPengantin="Galih & Ratna"
          backgroundImagePath="/images/background/purple-bg.png"
          textColor="text-white"
          buttonBgColor="bg-purple-primary opacity-60 shadow-blur-20"
          buttonTextColor="text-white"
          coupleImagePath="/images/couple/couple5.jpg"
          coupleClassName="border-4 border-white shadow-blur-20"
          overlayClassName="glass border-4 border-white border-opacity-80 rounded-xl"
          overlayPosition="inset-4"
        />
      </ReactModal>

      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
        />
      )}

      <Hero
        name="Galih & Ratna"
        date="13 Juni 2021"
        textColor="text-gray-100"
        overlayPosition="top-4 right-4 bottom-0 left-4"
        overlayClassName="glass border-4 border-white border-opacity-80 rounded-xl"
        imagePath="/images/background/purple-bg.png"
      >
        <SingleWave color="#EFEAFF" waveClassName="svg-shadow" isBottom />
      </Hero>

      <QsArrum21 bgColor="bg-purple-light" textColor="text-purple-dark" />

      <NamaPengantinThree
        namaWanita="Ratna Yuniar"
        ortuWanita="Putri dari Bpk. Amin & Ibu Dewi"
        namaPria="Galih Siskandar"
        ortuPria="Putra dari Bpk. Bagus & Ibu Dea"
        imagePathPria="/images/man/man2.jpg"
        imagePathWanita="/images/woman/woman2.jpg"
        textColor="text-purple-dark"
        bgColor="bg-purple-light"
      />

      <WaktuAlamatAcaraFour
        tanggalAkad="Minggu, 13 Juni 2021"
        waktuAkad="Pukul 08.00 - 09.00 WIB"
        tanggalResepsi="Minggu, 13 Juni 2021"
        waktuResepsi="Pukul 11.00 - 13.00 WIB"
        namaTempat="Kediaman Mempelai Wanita"
        alamatTempat="Jalan Jaksa, No 37B, Surabaya"
        googleMapsUri="https://www.google.com/maps/place/Jl.+Kong+Rimin,+RW.1,+Pulo+Gebang,+Kec.+Cakung,+Kota+Jakarta+Timur,+Daerah+Khusus+Ibukota+Jakarta+13950/@-6.209075,106.9613335,17z/data=!4m5!3m4!1s0x2e698b811463350f:0x7056c03293cf495a!8m2!3d-6.209075!4d106.9635222"
        lat={-6.20881}
        lng={106.96354}
        bgImagePath="/images/couple/couple19.png"
        overlayClassName="glass"
        textColor="text-white"
        buttonBgColor="bg-purple-primary"
        padding="pb-40 md:pb-52"
      />

      <GuestBookWithPopup
        comments={data}
        name={guestBookName}
        setName={(e) => setGuestBookName(e.target.value)}
        comment={guestBookComment}
        setComment={(e) => setGuestBookComment(e.target.value)}
        error={guestBookError}
        setError={() => setGuestBookError("")}
        success={guestBookSuccess}
        isLoading={guestBookIsLoading}
        handleSubmit={handleGuestBookSubmit}
        bgColor="bg-white"
        bgHorizontalLine="bg-purple-dark"
        writeYourWishClassname="bg-purple-primary text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-purple-primary"
        padding="pt-40  md:pt-44"
        commentDisable
      >
        <DateCountdown
          date={isoDate}
          bgColor="bg-white"
          shadow="shadow-blur-20"
          position="left-1/2 transform -translate-x-1/2 -top-24 md:-top-32"
        />
        <DoubleWave color="#EFEAFF" isBottom />
      </GuestBookWithPopup>

      <Terimakasih
        namaPengantin="Ratna & Galih"
        bgColor="bg-purple-light"
        textColor="text-purple-dark"
      />

      <InvitationFooter />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/test-api/comment`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8"
    }
  });
  const data = await res.json();
  const comments = await data.data;

  const getData = () => {
    if (comments) {
      return comments;
    } else {
      return [];
    }
  };

  return {
    props: { comments: getData() }
  };
}

export default Page;
