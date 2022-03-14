import React, { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { useRouter } from "next/router";
import {
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineBookOpen
} from "react-icons/hi";

import { BottomTabMenu } from "components/invitation/parts/BottomTabMenu";
import InvitationHead from "components/invitation/parts/InvitationHead";
import { OpeningModalWithCoupleImage } from "components/invitation/OpeningModal";
import { Hero } from "components/invitation/Hero";
import { QsArrum21 } from "components/invitation/Ayyat";
import { NamaPengantinThree } from "components/invitation/NamaPengantin";
import { StoryTwo } from "components/invitation/Story";
import { DoubleWave, SingleWave } from "components/invitation/parts/Divider";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import RSVP from "components/invitation/RSVP";
import { GallerySlideShow } from "components/invitation/Gallery";
import { GuestBookWithPopup } from "components/invitation/GuestBook";
import Terimakasih from "components/invitation/Terimakasih";
import InvitationFooter from "components/invitation/InvitationFooter";
import DateCountdown from "components/invitation/DateCountdown";
import PlayerButton from "components/invitation/parts/PlayerButton";
import Image from "next/image";
import { CoupleQuoteStandard } from "components/invitation/CoupleQuote";

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
    anchor: "rsvp",
    title: "RSVP",
    iconName: <HiOutlineBookOpen size={26} />
  },
  {
    id: 5,
    anchor: "gallery",
    title: "Gallery",
    iconName: <HiOutlinePhotograph size={26} />
  }
];

const storyData = [
  {
    id: 1,
    title: "First Meet",
    description:
      "June 19, 2019 was our first meeting as colleagues. At first everything went well and we were good friends at work without ever having imagined we would get married one day.",
    imagePath: "/images/first-meet.jpg"
  },
  {
    id: 2,
    title: "First Date",
    description:
      "God 'matched' us in unexpected ways. As if to be an answer to our prayers. A year later, on August 26, 2020, we decided to step up in a relationship and start to learn to love each other.",
    imagePath: "/images/first-date.jpg"
  },
  {
    id: 3,
    title: "The Proposal",
    description:
      "The distances of 600 kilometers from Jakarta to Madiun became one of the witnesses of our journey, Finally exactly 2 years since we met and right on Ratna's birthday, we got engaged on June 19, 2021.",
    imagePath: "/images/the-proposal.jpg"
  }
];

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/images/couple/couple1.jpg"
  },
  {
    id: 2,
    type: "image",
    src: "/images/couple/couple2.jpg"
  },
  {
    id: 3,
    type: "image",
    src: "/images/couple/couple3.jpg"
  },
  {
    id: 4,
    type: "image",
    src: "/images/couple/couple4.jpg"
  },
  {
    id: 5,
    type: "image",
    src: "/images/couple/couple5.jpg"
  }
];

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

  const [rsvpName, setRsvpName] = useState("");
  const [rsvpAddress, setRsvpAddress] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState("");
  const [rsvpIsLoading, setRsvpIsLoading] = useState(false);
  const [rsvpError, setRsvpError] = useState("");
  const [rsvpSuccess, setRsvpSuccess] = useState("");

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

  const handleRsvpSubmit = async (event) => {
    event.preventDefault();

    setRsvpIsLoading(true);

    if (rsvpName === "" || rsvpStatus === "" || rsvpAddress === "") {
      setRsvpSuccess("");
      setRsvpError("Harus diisi semua ya!");
      setRsvpIsLoading(false);
    } else {
      const res = await fetch(`/api/test-api/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: rsvpName,
          address: rsvpAddress,
          status: rsvpStatus
        })
      });

      setRsvpIsLoading(false);
      setRsvpError("");
      setRsvpSuccess("Status Kehadiran Berhasil Dikirim!");

      setRsvpName("");
      setRsvpAddress("");
      setRsvpStatus("");
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
          backgroundImagePath="/images/background/pastel-purple.jpg"
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

      <BottomTabMenu
        bgColor="bg-white"
        textColor="text-purple-primary"
        bottomMenuData={bottomMenuData}
      />

      <Hero
        name="Galih & Ratna"
        date="13 Juni 2021"
        textColor="text-gray-100"
        overlayPosition="top-4 right-4 bottom-0 left-4"
        overlayClassName="glass border-4 border-white border-opacity-80 rounded-xl"
        imagePath="/images/background/pastel-purple.jpg"
      >
        <SingleWave color="#EFEAFF" waveClassName="svg-shadow" isBottom />
      </Hero>

      <QsArrum21 bgColor="bg-purple-light" textColor="text-purple-dark" />

      <CoupleQuoteStandard
        textColor="text-purple-dark"
        bgColor="bg-purple-light"
        imagePathWanita="/images/woman/woman7.jpg"
        imagePathPria="/images/man/man4.jpg"
        quoteWanita="Mencintai seseorang memberikan kita kekuatan, dicintai memberikan kita keberanian."
        quotePria="Dalam pernikahan, yang terpenting adalah sah, bukan wah. Yang wajib adalah mahar, bukan mahal."
      />

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

      <StoryTwo
        textColor="text-purple-dark"
        bgColor="bg-white"
        imageOnePath="/images/couple/couple8.jpg"
        imageTwoPath="/images/couple/couple11.jpg"
        lineBorderColor="border-purple-light"
        storyData={storyData}
      >
        <DoubleWave color="#EFEAFF" />
      </StoryTwo>

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

      <RSVP
        name={rsvpName}
        setName={(e) => setRsvpName(e.target.value)}
        address={rsvpAddress}
        setAddress={(e) => setRsvpAddress(e.target.value)}
        status={rsvpStatus}
        setStatus={(e) => setRsvpStatus(e.target.value)}
        error={rsvpError}
        isLoading={rsvpIsLoading}
        succcess={rsvpSuccess}
        handleSubmit={handleRsvpSubmit}
        bgColor="bg-white"
        textColor="text-purple-dark"
        formBgColor="bg-white"
        buttonBgColor="bg-purple-primary"
        padding="pt-40 pb-24 md:pt-44"
        buttonDisable
      >
        <DateCountdown
          date={isoDate}
          bgColor="bg-white"
          shadow="shadow-blur-20"
          position="left-1/2 transform -translate-x-1/2 -top-24 md:-top-32"
        />
        <DoubleWave color="#EFEAFF" isBottom />
      </RSVP>

      <GallerySlideShow
        bgColor="bg-purple-light"
        textColor="text-purple-dark"
        imageData={imageData}
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
        commentDisable
      >
        {" "}
        <DoubleWave color="#EFEAFF" />
        <DoubleWave color="#EFEAFF" isBottom />
      </GuestBookWithPopup>

      <Terimakasih
        namaPengantin="Ratna & Galih"
        bgColor="bg-purple-light"
        textColor="text-purple-dark"
      />

      <InvitationFooter />

      <div className="h-16"></div>
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
