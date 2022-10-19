import React, { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { useRouter } from "next/router"

import InvitationHead from "components/invitation/parts/InvitationHead"
import { OpeningModalWithCoupleImage } from "components/invitation/OpeningModal"
import { Hero } from "components/invitation/Hero"
import { QsArrum21 } from "components/invitation/Ayyat"
import { DoubleWave } from "components/invitation/parts/Divider"
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara"
import { GuestBookWithPopup } from "components/invitation/GuestBook"
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import DateCountdown from "components/invitation/DateCountdown"
import PlayerButton from "components/invitation/parts/PlayerButton"

import WithBackground from "components/invitation/couple/WithBackground"

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

  const date = new Date("06 November 2022 06:15 UTC+7")
  const isoDate = date.toISOString()

  const waveColor = "#347f7f"

  useEffect(() => {
    setAudio(new Audio("/clients/laila-bram/kenanglah-hari-ini-cut.mp3"))

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
      const res = await fetch(`/api/laila-bram/comment`, {
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
        title="Laila & Bram Wedding Invitation"
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
          namaPengantin="Laila & Bram"
          buttonBgColor="bg-moderate-cyan-primary opacity-80"
          buttonTextColor="text-white"
          backgroundImagePath="/clients/laila-bram/bg2.jpg"
          coupleImagePath="/clients/laila-bram/thumbnail.jpeg"
          overlayClassName="bg-gradient-to-b from-moderate-cyan-dark to-moderate-cyan-primary opacity-50"
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
        name="Laila & Bram"
        date="06 November 2022"
        textColor="text-gray-100"
        overlayClassName="bg-gradient-to-b from-moderate-cyan-primary opacity-60"
        imagePath="/clients/laila-bram/hero.jpeg"
      >
        <DoubleWave color={waveColor} isBottom />
      </Hero>

      <QsArrum21 bgColor="bg-moderate-cyan-primary" textColor="text-gray-200" />

      {/* <CoupleQuoteStandard
        textColor="text-moderate-cyan-dark"
        bgColor="bg-moderate-cyan-primary"
        imagePathWanita="/images/woman/woman7.jpg"
        imagePathPria="/images/man/man4.jpg"
        quoteWanita="Mencintai seseorang memberikan kita kekuatan, dicintai memberikan kita keberanian."
        quotePria="Dalam pernikahan, yang terpenting adalah sah, bukan wah. Yang wajib adalah mahar, bukan mahal."
      /> */}

      <WithBackground
        title="Couple"
        namaWanita="Lailatul Zahro, S.Ag"
        ortuWanita="Putri dari Bpk. Muhyiddin & Ibu Peni Mitra"
        namaPria="Bramantyo Suryo Nugroho, S.H"
        ortuPria="Putra dari Bpk. Subur Aryanto & (almh) Ibu Supriyati"
        textColor="text-white"
        bgColor="bg-moderate-cyan-primary"
        bgImagePath="/clients/laila-bram/couple.jpeg"
        overlayClassName="bg-gradient-to-t from-moderate-cyan-primary from-moderate-cyan-dark opacity-80"
      />

      <WaktuAlamatAcaraFour
        tanggalAkad="Minggu, 06 November 2022"
        waktuAkad="Pukul 09.00 - Selesai"
        tanggalResepsi="Minggu, 06 November 2022"
        waktuResepsi="Pukul 09.00 - Selesai"
        namaTempat="Kediaman Mempelai Wanita"
        alamatTempat="Curahjati RT 6 RW 16, Curahrejo, Sukorejo, Pasuruan"
        googleMapsUri="https://maps.app.goo.gl/Cu7T4Zt14KF53aYZ6?g_st=ic"
        lat={-7.67152}
        lng={112.73104}
        bgImagePath="/clients/laila-bram/image3.jpeg"
        overlayBgColor="bg-white"
        overlayOpacity="bg-opacity-60"
        textColor="text-moderate-cyan-dark"
        buttonBgColor="bg-moderate-cyan-primary"
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
        bgHorizontalLine="bg-moderate-cyan-dark"
        writeYourWishClassname="bg-moderate-cyan-primary text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-moderate-cyan-primary"
        padding="pt-40 md:pt-52"
        commentDisable
      >
        <DateCountdown
          date={isoDate}
          bgColor="bg-white"
          shadow="shadow-blur-20"
          position="left-1/2 transform -translate-x-1/2 -top-24 md:-top-32"
        />
        <DoubleWave color={waveColor} isBottom />
      </GuestBookWithPopup>

      <Terimakasih
        namaPengantin="Laila & Bram"
        bgColor="bg-moderate-cyan-primary"
        textColor="text-white"
      />

      <InvitationFooter />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/laila-bram/comment`, {
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
