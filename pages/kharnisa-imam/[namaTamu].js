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
import { WaktuAlamatAcaraTwo } from "../../components/invitation/WaktuAlamatAcara";
import { GuestBookTwo } from "../../components/invitation/GuestBook";
import Terimakasih from "../../components/invitation/Terimakasih";
import { OpeningModalTwo } from "../../components/invitation/OpeningModal";
import BottomMenu from "../../components/BottomMenu";
import RSVP from "../../components/invitation/RSVP";
import { GalleryOne } from "../../components/invitation/Gallery";

const Page = ({ messages }) => {
  const [date] = useState("2021-04-04T16:00:00.000+07:00");

  const [data, setData] = useState(messages);

  const router = useRouter();
  const { namaTamu } = router.query;
  const tamu = namaTamu.replace("+", " ");

  const [guestBookName, setGuestBookName] = useState("");
  const [guestBookComment, setGuestBookComment] = useState("");
  const [guestBookIsLoading, setGuestBookIsLoading] = useState(false);
  const [guestBookError, setGuestBookError] = useState("");

  const [rsvpName, setRsvpName] = useState("");
  const [rsvpStatus, setRsvpStatus] = useState("");
  const [rsvpMessage, setRsvpMessage] = useState("");
  const [rsvpIsLoading, setRsvpIsLoading] = useState(false);
  const [rsvpError, setRsvpError] = useState("");
  const [rsvpSuccess, setRsvpSuccess] = useState("");

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
    // audio.play();
  };

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault();

    setGuestBookIsLoading(true);

    if (guestBookName === "" && guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!");
      setGuestBookIsLoading(false);
    } else {
      const res = await fetch(`/api/kharnisa-imam/comment`, {
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

  const handleRsvpSubmit = async (event) => {
    event.preventDefault();

    setRsvpIsLoading(true);

    if (rsvpName === "" && rsvpStatus === "" && rsvpMessage === "") {
      setRsvpError("Harus diisi semua ya!");
      setRsvpIsLoading(false);
    } else {
      const res = await fetch(`/api/kharnisa-imam/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: rsvpName,
          status: rsvpStatus,
          message: rsvpMessage,
        }),
      });

      setRsvpIsLoading(false);
      setRsvpSuccess("Status Kehadiran Berhasil Dikirim!");

      setRsvpName("");
      setRsvpStatus("");
      setRsvpMessage("");
    }
  };

  return (
    <>
      <InvitationHead
        title="Kharnisa & Imam Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/kharnisa-imam"
        imagePath="/images/jeremy-weddings.jpg"
      />
      <BottomMenu />
      <div>
        <Modal
          isOpen={modalIsOpen}
          ariaHideApp={false}
          className="absolute top-0 left-0 right-0 bottom-0 bg-gray-900"
        >
          <OpeningModalTwo
            handleOpenModal={handleOpenModal}
            namaTamu={tamu}
            namaPengantin="Kharnisa & Imam"
            customColor="text-gray-50"
            buttonCustomColor="bg-kharnisa-imam-rosegold text-gray-50"
            backgroundImagePath="/kharnisa-imam/flower2.jpg"
            coupleImagePath="/kharnisa-imam/couple-square.png"
            withOverlay
          />
        </Modal>

        <HeroTwo
          name="Kharnisa & Imam"
          date="04 April 2021"
          customColor="text-gray-50"
          overlayColor="bg-kharnisa-imam-rosegold"
          imagePath="/kharnisa-imam/couple.png"
        />

        <NamaPengantinThree
          namaWanita="Khairunisa Dian Lestari, S. Hum"
          ortuWanita="Putri dari Bpk. Bapak Suyoto (Alm) & Ibu Ayi Mustikai"
          namaPria="Dwi Imam Avianto, S.E"
          ortuPria="Putra dari Bpk. Kasturi Tri Irianto, A.Md & Ibu Ati Sugiarti, S.Ap, M.A"
          imagePathPria="/kharnisa-imam/pria.png"
          imagePathWanita="/kharnisa-imam/wanita.png"
          customColor="bg-kharnisa-imam-rosegold text-gray-50"
        />

        <WaktuAlamatAcaraTwo
          tanggalAkad="Minggu, 04 April 2021"
          waktuAkad="Pukul 15.00 - 17.00 WIB"
          tanggalResepsi="Minggu, 04 April 2021"
          waktuResepsiSesi1="Pukul 17.00 - 19.00 WIB"
          namaTempat="Bumbu Desa, Harapan Indah RT.003/RW.010, Medan Satria, Kota Bekasi"
          googleMapsUri="https://www.google.co.id/maps/place/Bumbu+Desa+Harapan+Indah/@-6.1895096,106.9741279,17z/data=!3m1!4b1!4m5!3m4!1s0x2e698bbdd27bc41b:0x99301c03154afbd7!8m2!3d-6.1895096!4d106.9763166"
          lat={-6.18926}
          lng={106.97633}
          customColor="bg-kharnisa-imam-rosegold text-gray-50"
          buttonCustomColor="bg-kharnisa-imam-rosegold text-gray-50"
          date={date}
        />

        <ProtokolKesehatan customColor="bg-kharnisa-imam-rosegold text-gray-50" />

        <GalleryOne />

        <RSVP
          name={rsvpName}
          setName={(e) => setRsvpName(e.target.value)}
          status={rsvpStatus}
          setStatus={(e) => setRsvpStatus(e.target.value)}
          message={rsvpMessage}
          setMessage={(e) => setRsvpMessage(e.target.value)}
          error={rsvpError}
          success={rsvpSuccess}
          isLoading={rsvpIsLoading}
          handleSubmit={handleRsvpSubmit}
        />

        <GuestBookTwo
          comments={data}
          name={guestBookName}
          setName={(e) => setGuestBookName(e.target.value)}
          comment={guestBookComment}
          setComment={(e) => setGuestBookComment(e.target.value)}
          error={guestBookError}
          isLoading={guestBookIsLoading}
          handleSubmit={handleGuestBookSubmit}
          customColor="bg-kharnisa-imam-rosegold text-gray-50"
          buttonCustomColor="bg-gray-50 text-kharnisa-imam-rosegold"
          borderColor="border-gray-50"
          inputTextColor="text-gray-600"
        />

        <Terimakasih
          namaPengantin="Kharnisa & Indah"
          customColor="bg-kharnisa-imam-rosegold text-gray-50"
        />

        <Footer />
      </div>
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://dilamar.vercel.app/api/kharnisa-imam/comment`,
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
