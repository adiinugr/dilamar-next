import React, { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { useRouter } from "next/router"

import InvitationHead from "components/invitation/parts/InvitationHead"
import { OpeningModalWithCoupleImage } from "components/invitation/OpeningModal"
import { Hero } from "components/invitation/Hero"
import { QsArrum21 } from "components/invitation/Ayyat"
import { NamaPengantinThree } from "components/invitation/NamaPengantin"
import { DoubleWave } from "components/invitation/parts/Divider"
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara"
import { GuestBookWithPopup } from "components/invitation/GuestBook"
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import DateCountdown from "components/invitation/DateCountdown"
import PlayerButton from "components/invitation/parts/PlayerButton"
import { CoupleQuoteStandard } from "components/invitation/CoupleQuote"
import ModalStandard from "components/invitation/modal/Standard"
import BasicHero from "components/invitation/hero/BasicHero"
import QsAzzariyat49 from "components/invitation/ayyat/QsAzzariyat49"
import SimpleImage from "components/invitation/couple/SimpleImage"
import WithBackgroundImage from "components/invitation/place-and-date/WithBackgroundImage"
import WithModal from "components/invitation/guest-book/WithModal"
import BigDay from "components/invitation/date-countdown/BigDay"

const Page = ({ comments }) => {
  const [data, setData] = useState(comments)

  const router = useRouter()
  const { namaTamu } = router.query
  const tamu = namaTamu.replace("+", " ")

  const [guestBookName, setGuestBookName] = useState("")
  const [guestBookComment, setGuestBookComment] = useState("")
  const [guestBookIsLoading, setGuestBookIsLoading] = useState(false)
  const [guestBookError, setGuestBookError] = useState("")
  const [guestBookSuccess, setGuestBookSuccess] = useState("")

  const [modalIsOpen, setModalIsOpen] = useState(true)

  const [audio, setAudio] = useState(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  const date = new Date("11 March 2023 06:15 UTC+7")
  const isoDate = date.toISOString()

  const waveColor = "#E4CFCA"

  useEffect(() => {
    setAudio(new Audio("/musics/beautiful-in-white.mp3"))

    return () => {
      if (audio) {
        audio.pause()
        setIsAudioPlaying(false)
      }
    }
  }, [])

  const handlePlayMusic = () => {
    audio.play()
    setIsAudioPlaying(true)
  }

  const handlePauseMusic = () => {
    audio.pause()
    setIsAudioPlaying(false)
  }

  const handleOpenModal = () => {
    setModalIsOpen(false)
    setShowPlayButton(true)
    handlePlayMusic()
  }

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault()

    setGuestBookIsLoading(true)

    if (guestBookName === "" || guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!")
      setGuestBookIsLoading(false)
    } else {
      const res = await fetch(`/api/sinda-hilal/comment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: guestBookName,
          message: guestBookComment
        })
      })

      setData((prevData) => [
        ...prevData,
        {
          name: guestBookName,
          message: guestBookComment
        }
      ])

      setGuestBookIsLoading(false)

      setGuestBookSuccess("Selamat! Pesanmu berhasil dikirim.")
      setGuestBookName("")
      setGuestBookComment("")
    }
  }

  return (
    <>
      <InvitationHead
        title="Sinda & Hilal Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/sinda-hilal/Nama+Tamu"
        imagePath="/images/couple/meta-image-min.png"
      />

      <ReactModal
        isOpen={modalIsOpen}
        closeTimeoutMS={500}
        ariaHideApp={false}
        className="absolute top-0 left-0 right-0 bottom-0 z-40"
      >
        <ModalStandard
          handleOpenModal={handleOpenModal}
          namaTamu={tamu}
          namaPengantin="Sinda & Hilal"
          buttonBgColor="bg-dust-storm-dark"
          textColor="text-dust-storm-dark"
          buttonTextColor="text-white"
          bgColor="bg-dust-storm-primary"
          additionalText="Tanpa mengurangi rasa hormat, Kami Mengundang Anda Untuk Hadir Di Acara Pernikahan Kami."
          backgroundImagePath="/clients/sinda-hilal/bg-floral.webp"
        />
      </ReactModal>

      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
        />
      )}

      <BasicHero
        name="Sinda & Hilal"
        date="07 Agustus 2022"
        textColor="text-dust-storm-dark"
        imagePath="/clients/sinda-hilal/bg-floral.webp"
        titleText="Walimatul 'Urs"
      >
        <DoubleWave color={waveColor} isBottom />
      </BasicHero>

      <QsAzzariyat49
        bgColor="bg-dust-storm-light"
        textColor="text-dust-storm"
      />

      <SimpleImage
        subtitle="Assalamu’alaikum warahmatullahi wabarakatuh Dengan memohon rahmat dan ridho Allah Subhanahu Wa Ta’ala, Perkenankanlah kami berdua yang bernama:"
        namaWanita="Sinda Intandiana"
        ortuWanita="Putri dari Bpk. Harun & Ibu Rudatin Endah W"
        namaPria="Hilal Najmudin"
        ortuPria="Putra dari Bpl. Endang (rahimahullah) & Ibu Dedah"
        imagePathPria="/clients/sinda-hilal/man.png"
        imagePathWanita="/clients/sinda-hilal/woman.png"
        textColor="text-dust-storm-dark"
        bgColor="bg-dust-storm-light"
      />

      <WithBackgroundImage
        tanggalAkad="Minggu, 07 Agustus 2022"
        waktuAkad="Pukul 08.00 - Selesai"
        tanggalResepsi="Minggu, 07 Agustus 2022"
        waktuResepsi="Pukul 11.00 - Selesai"
        namaTempat="Aula Muzdalifah - Islamic Centre Bekasi "
        alamatTempat="Jl. Kemakmuran No. 72, Marga Jaya, Kec. Bekasi Selatan, Kota Bekasi"
        googleMapsUri="https://maps.app.goo.gl/5daMWbTopUnRtg3G9"
        lat={-6.245769}
        lng={106.9958104}
        bgImagePath="/clients/sinda-hilal/bg-floral.webp"
        overlayBgColor="bg-white"
        overlayOpacity="bg-opacity-60"
        textColor="text-dust-storm-dark"
        buttonBgColor="bg-dust-storm-dark"
        padding="pb-40 md:pb-52"
      />

      <BigDay
        title="Waktu Mundur"
        bgColor="bg-dust-storm-light"
        textColor="text-dust-storm"
        countdownClassname="bg-dust-storm-primary bg-opacity-75"
        date={isoDate}
        padding="pb-0"
      />

      <WithModal
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
        bgColor="bg-dust-storm-light"
        textColor="text-dust-storm"
        bgHorizontalLine="bg-orchid-dark"
        writeYourWishClassname="bg-dust-storm-dark text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-dust-storm-dark"
        // padding="pt-40 md:pt-52"
      >
        <DoubleWave color={waveColor} isBottom />
      </WithModal>

      <Terimakasih
        namaPengantin="Sinda & Hilal"
        bgColor="bg-dust-storm-dark"
        textColor="text-white"
      />

      <InvitationFooter />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/sinda-hilal/comment`, {
    method: "GET",
    headers: {
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8"
    }
  })
  const data = await res.json()
  const comments = await data.data

  const getData = () => {
    if (comments) {
      return comments
    } else {
      return []
    }
  }

  return {
    props: { comments: getData() }
  }
}

export default Page
