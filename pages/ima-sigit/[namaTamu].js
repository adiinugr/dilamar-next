import React, { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { useRouter } from "next/router"

import InvitationHead from "components/invitation/parts/InvitationHead"
import { OpeningModalWithCoupleImage } from "components/invitation/OpeningModal"
import { Hero } from "components/invitation/Hero"
import { QsArrum21 } from "components/invitation/Ayyat"
import { DoubleWave } from "components/invitation/parts/Divider"
import { GuestBookWithPopup } from "components/invitation/GuestBook"
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import DateCountdown from "components/invitation/DateCountdown"
import PlayerButton from "components/invitation/parts/PlayerButton"

import WithBackground from "components/invitation/couple/WithBackground"
import WithBackgroundImage from "components/invitation/place-and-date/WithBackgroundImage"
import GiftWithoutConfirmation from "components/invitation/gift/GiftWithoutConfirmation"

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

  const date = new Date("05 November 2022 06:15 UTC+7")
  const isoDate = date.toISOString()

  const waveColor = "#E5D2C4"

  useEffect(() => {
    setAudio(new Audio("/clients/siti-sigit/nuca-mahalini-cut.mp3"))

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
      const res = await fetch(`/api/siti-sigit/comment`, {
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
        title="Ima & Sigit Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/template/premium2/Nama+Tamu"
        imagePath="https://katanikah.com/clients/siti-sigit/meta-image.jpg"
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
          namaPengantin="Ima & Sigit"
          textColor="text-nude-dark"
          buttonBgColor="bg-nude-dark opacity-80"
          buttonTextColor="text-white"
          backgroundImagePath="/clients/siti-sigit/bg-nude1.jpg"
          // coupleImagePath="/clients/laila-bram/thumbnail.jpeg"
          // overlayClassName="bg-gradient-to-b from-nude-dark to-nude-primary opacity-20"
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
        name="Ima & Sigit"
        date="05 November 2022"
        textColor="text-white"
        overlayClassName="bg-gradient-to-t from-nude-dark opacity-70"
        imagePath="/clients/siti-sigit/hero-image.jpg"
        textPosition="bottom"
      >
        <DoubleWave color={waveColor} isBottom />
      </Hero>

      <QsArrum21 bgColor="bg-nude-primary" textColor="text-nude-dark" />

      <WithBackground
        title="Couple"
        namaWanita="Siti Chotimah, S.Pd"
        ortuWanita="Putri dari Bpk. Abu Arip (Alm) & Ibu Sunarni"
        namaPria="Sigit Triadi"
        ortuPria="Putra dari Bpk. Sujianto & Ibu Somiati"
        textColor="text-nude-dark"
        bgColor="bg-nude-primary"
        bgImagePath="/clients/siti-sigit/bg-nude1.jpg"
        overlayClassName="bg-gradient-to-t from-nude-primary from-nude-dark opacity-80"
      />

      <WithBackgroundImage
        tanggalAkad="Sabtu, 05 November 2022"
        waktuAkad="Pukul 08.00 - Selesai"
        tanggalResepsi="Sabtu, 05 November 2022"
        waktuResepsi="Pukul 10.00 - 13.00 WIB"
        namaTempat="Gedung Graha Widya, UNTAG, Surabaya"
        alamatTempat="Menur Pumpungan, Kec. Sukolilo, Kota Surabaya"
        googleMapsUri=" https://goo.gl/maps/Znev2NYqwyN3kXKq8"
        lat={-7.29825}
        lng={112.76728}
        bgImagePath="/clients/siti-sigit/bg-nude1.jpg"
        overlayBgColor="bg-white"
        overlayOpacity="bg-opacity-60"
        textColor="text-nude-dark"
        buttonBgColor="bg-nude-dark"
        padding="pb-40 md:pb-52"
      />

      <GiftWithoutConfirmation
        title="Angpau Online"
        textColor="text-nude-dark"
        bgColor="bg-nude-primary"
        rekeningArray={[
          {
            id: 1,
            bankName: "Bank Central Asia (BCA)",
            bankNo: "0881665963",
            bankUserName: "a/n Siti Chotimah"
          },
          {
            id: 2,
            bankName: "Bank Mandiri",
            bankNo: "1400020480795",
            bankUserName: "a/n Siti Chotimah"
          },
          {
            id: 3,
            bankName: "Bank Syariah Indonesia (BSI)",
            bankNo: "9744920400",
            bankUserName: "a/n Siti Chotimah"
          }
        ]}
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
        bgHorizontalLine="bg-nude-dark"
        writeYourWishClassname="bg-nude-dark text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-nude-dark"
        padding="pt-40 md:pt-52"
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
        namaPengantin="Ima & Sigit"
        bgColor="bg-nude-primary"
        textColor="text-nude-dark"
      />

      <InvitationFooter />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/siti-sigit/comment`, {
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
