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
import { OpeningModalNoInvitation } from "../../components/invitation/OpeningModal";
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
import { TidakMengundang } from "../../components/invitation/QuranAyat";

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
    src: "/nindya-andhika/picture6.png",
  },
  {
    id: 7,
    type: "image",
    src: "/nindya-andhika/picture7.png",
  },
  {
    id: 7,
    type: "image",
    src: "/nindya-andhika/picture8.png",
  },
  {
    id: 7,
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
    setAudio(new Audio("/nindya-andhika/carpenter-close-to-you.mp3"));

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
      const res = await fetch(`/api/nindya-andhika/comment`, {
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
        title="Nindya & Andhika Wedding"
        description="Mohon doa restu atas
          pernikahan kami berdua. Tak lupa kami memohon maaf apa bila tidak
          dapat memberikan undangan, karena keadaan yang tidak memungkinkan."
        link="https://dilamar.vercel.app/nindya-andhika/Nama+Tamu"
        imagePath="/nindya-andhika/meta-image.png"
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
          <OpeningModalNoInvitation
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

        <TidakMengundang
          bgColor="bg-nurul-gold"
          textColor="text-gray-200"
          name="Nindya & Andhika"
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
          namaWanita="Nindya Ardella, SE"
          ortuWanita="Putri dari Alm. Bpk Hidayat & Ibu Desy Fandania Lasta Simbolon"
          namaPria="Andhika Ramadhan Budiprasetya, ST"
          ortuPria="Putra dari Bpk. Budiprastiyo Doelrachman & Ibu Sri Murniati"
          imagePathPria="/nindya-andhika/pria.png"
          imagePathWanita="/nindya-andhika/wanita.png"
          bgColor="bg-nindya-andhika-gold"
          textColor="text-nurul-gold"
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
          textColor="text-nurul-gold"
          overlayBgColor="bg-gray-50"
          akadImagePath="/nindya-andhika/picture2.png"
          resepsiImagePath="/nindya-andhika/picture6.png"
          tanggalAkad="Minggu, 11 Juli 2021"
          waktuAkad="Pukul 10.00 - 11.00 WIB"
          tanggalResepsi="Minggu, 11 Juli 2021"
          waktuResepsiSesi1="Pukul 11.00 - 13.00 WIB"
          namaTempat="KUA Bekasi Timur"
          alamatTempat="RT.001/RW.010, Bekasi Jaya, Kec. Bekasi Tim., Kota Bks, Jawa Barat 17113"
          googleMapsUri="https://www.google.com/search?safe=strict&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00ALT5JtxjB3n_ERzONvJ7nySLdoA:1625402118018&q=kua+bekasi+timur&rflfq=1&num=10&ved=2ahUKEwjcwvHetsnxAhVaaCsKHW8oCLUQtgN6BAgPEAQ#rlfi=hd:;si:1415445948945370345;mv:[[-6.233572297438537,107.01194396972807],[-6.2354814009111195,107.00686923027189],null,[-6.234526850043482,107.00940659999998],18]"
          lat={-6.2340109664371735}
          lng={107.00968908618594}
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
          textColor="text-gray-100"
        />

        <Footer />
        <div className="mb-20"></div>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://dilamar.vercel.app/api/nindya-andhika/comment`,
    {
      method: "GET",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
        Accept: "application/json; charset=UTF-8",
      },
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
    props: { messages: getData() },
  };
}

export default Page;
