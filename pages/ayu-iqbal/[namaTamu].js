import React, { useEffect, useState } from "react"
import ReactModal from "react-modal"
import { useRouter } from "next/router"
import {
  HiOutlineCalendar,
  HiOutlineHeart,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineBookOpen
} from "react-icons/hi"

import { BottomTabMenu } from "components/invitation/parts/BottomTabMenu"
import InvitationHead from "components/invitation/parts/InvitationHead"
import { OpeningModalStandard } from "components/invitation/OpeningModal"
import { Hero } from "components/invitation/Hero"
import { Bismillah, QsArrum21 } from "components/invitation/Ayyat"
import {
  NamaPengantin1,
  NamaPengantin2,
  NamaPengantin4,
  NamaPengantinThree
} from "components/invitation/NamaPengantin"
import { StoryTwo } from "components/invitation/Story"
import { DoubleWave } from "components/invitation/parts/Divider"
import {
  WaktuAlamatAcaraFour,
  WaktuAlamatAcaraSix
} from "components/invitation/WaktuAlamatAcara"
import RSVP from "components/invitation/RSVP"
import { GalleryGrid, GallerySlideShow } from "components/invitation/Gallery"
import { GuestBookWithPopup } from "components/invitation/GuestBook"
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import DateCountdown from "components/invitation/DateCountdown"
import PlayerButton from "components/invitation/parts/PlayerButton"
import { GuestName } from "components/invitation/GuestName"
import {
  AngpauWithConfirmation,
  AngpauWithoutConfirmation
} from "components/invitation/Angpau"
import TextAnimation from "components/invitation/parts/TextAnimation"
import Image from "next/image"
import { Fade } from "react-reveal"

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/clients/ayu-iqbal/image (2).jpg"
  },
  {
    id: 2,
    type: "image",
    src: "/clients/ayu-iqbal/image (3).jpg"
  },
  {
    id: 3,
    type: "image",
    src: "/clients/ayu-iqbal/image (4).jpg"
  },
  {
    id: 4,
    type: "image",
    src: "/clients/ayu-iqbal/image (5).jpg"
  },
  {
    id: 5,
    type: "image",
    src: "/clients/ayu-iqbal/image (6).jpg"
  },
  {
    id: 6,
    type: "image",
    src: "/clients/ayu-iqbal/image (7).jpg"
  },
  {
    id: 7,
    type: "image",
    src: "/clients/ayu-iqbal/image (8).jpg"
  },
  {
    id: 8,
    type: "image",
    src: "/clients/ayu-iqbal/image (9).jpg"
  },
  {
    id: 9,
    type: "image",
    src: "/clients/ayu-iqbal/image (10).jpg"
  }
]

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

  const [rsvpName, setRsvpName] = useState("")
  const [rsvpAddress, setRsvpAddress] = useState("")
  const [rsvpStatus, setRsvpStatus] = useState("")
  const [rsvpIsLoading, setRsvpIsLoading] = useState(false)
  const [rsvpError, setRsvpError] = useState("")
  const [rsvpSuccess, setRsvpSuccess] = useState("")

  const [angpauName, setAngpauName] = useState("")
  const [angpauBank, setAngpauBank] = useState("")
  const [angpauNominal, setAngpauNominal] = useState("")
  const [rawValue, setRawValue] = useState(" ")
  const [angpauIsLoading, setAngpauIsLoading] = useState(false)
  const [angpauError, setAngpauError] = useState("")
  const [angpauSuccess, setAngpauSuccess] = useState("")

  const [audio, setAudio] = useState(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(true)

  const date = new Date("12 May 2022 08:00 UTC+7")
  const isoDate = date.toISOString()

  const waveColor = "#B76E79"

  useEffect(() => {
    setAudio(new Audio("/clients/claudia-leo/naif.mp3"))

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

  const handleGuestBookSubmit = async (event) => {
    event.preventDefault()

    setGuestBookIsLoading(true)

    if (guestBookName === "" || guestBookComment === "") {
      setGuestBookError("Harus diisi semua ya!")
      setGuestBookIsLoading(false)
    } else {
      const res = await fetch(`/api/ayu-iqbal/comment`, {
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

  const handleRsvpSubmit = async (event) => {
    event.preventDefault()

    setRsvpIsLoading(true)

    if (rsvpName === "" || rsvpStatus === "" || rsvpAddress === "") {
      setRsvpSuccess("")
      setRsvpError("Harus diisi semua ya!")
      setRsvpIsLoading(false)
    } else {
      const res = await fetch(`/api/ayu-iqbal/rsvp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: rsvpName,
          address: rsvpAddress,
          status: rsvpStatus
        })
      })

      setRsvpIsLoading(false)
      setRsvpError("")
      setRsvpSuccess("Status Kehadiran Berhasil Dikirim!")

      setRsvpName("")
      setRsvpAddress("")
      setRsvpStatus("")
    }
  }

  const handleAngpauOnValueChange = (value) => {
    setRawValue(value === undefined ? "undefined" : value || " ")

    if (!value) {
      setAngpauNominalNominal("")
      return
    }

    if (Number.isNaN(Number(value))) {
      setAngpauError("Masukkan Angka Saja!")
      return
    }

    setAngpauNominal(value)
  }

  const handleAngpauSubmit = async (event) => {
    event.preventDefault()

    setAngpauIsLoading(true)

    if (angpauName === "" && angpauBank === "" && angpauNominal === "") {
      setAngpauSuccess("")
      setAngpauError("Harus diisi semua ya!")
      setAngpauIsLoading(false)
    } else {
      const res = await fetch(`/api/roy-ririk/angpau`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: angpauName,
          bank: angpauBank,
          nominal: angpauNominal
        })
      })

      setAngpauIsLoading(false)
      setAngpauError("")
      setAngpauSuccess("Konfirmasi Angpau Online Berhasil Dikirim!")

      setAngpauName("")
      setAngpauBank("")
      setAngpauNominal("")
    }
  }

  return (
    <>
      <InvitationHead
        title="Ayu & Iqbal Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/ayu-iqbal/Nama+Tamu"
        imagePath="https://katanikah.com/clients/ayu-iqbal/meta-image.jpg"
      />

      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
        />
      )}

      <Hero
        name="Ayu & Iqbal"
        date="12 - 05 - 2022"
        textColor="text-gray-100"
        titleText="The Wedding of"
        initialText="AI"
        overlayClassName="bg-gray-800 opacity-60"
        imagePath="/clients/ayu-iqbal/image (2).jpg"
      />
      <GuestName
        bgColor="bg-rose-gold-primary"
        textColor="text-white"
        namaTamu={tamu}
      />

      <Bismillah bgColor="bg-rose-gold-primary" textColor="text-white" />

      <NamaPengantin4
        namaWanita="Bdn. Rahma Ayu Yusnita, S.Tr.Keb"
        ortuWanita="Putri dari H. Sugeng Hariyanto, S.AP (Alm) & Hj. Sri Zunani, S.Pd"
        namaPria="Mohammad Iqbal Ali Maghrobi, S.Pd"
        ortuPria="Putra dari Drs. Imam Syafi'i (Alm) & Sukmaningsih, S.Pd"
        igPria="owlbal"
        igWanita="rahmaayuyusnitaa"
        imagePathPria="/clients/ayu-iqbal/men.jpg"
        imagePathWanita="/clients/ayu-iqbal/women.jpg"
        textColor="text-rose-gold-dark"
        bgColor="bg-rose-gold-light"
      />

      <section className="relative w-full bg-rose-gold-primary px-8 py-16 text-center">
        <Fade top>
          <p className="font-yellowtail text-4xl mb-7 text-white">
            12 Mei 2022
          </p>
        </Fade>
        <TextAnimation />
        <DateCountdown
          position="static mx-auto"
          date={isoDate}
          bgColor="bg-none"
          textColor="text-white"
          countdownTitle={false}
        />
      </section>

      <WaktuAlamatAcaraSix
        tanggalAcara="12"
        hariAcara="Kamis"
        bulanAcara="Mei"
        tahunAcara="2022"
        waktuAkad="Pukul 08.00 WIB"
        waktuResepsi="Pukul 11.00 - 18.00 WIB"
        alamatTempat="Dsn. Pudakpulo RT. 11 RW.4 Ds. Puloniti Bangsal, Kab. Mojokerto, Jawa Timur (Depan Poliklinik SPN)"
        googleMapsUri="https://maps.google.com/?q=-7.499777,112.487473"
        bgColor="bg-rose-gold-primary"
        overlayBgColor="bg-white"
        overlayOpacity="bg-opacity-80"
        textColor="text-white"
        buttonBgColor="bg-rose-gold-dark"
        bgImagePath="/clients/ayu-iqbal/image (23).jpg"
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
        textColor="text-rose-gold-dark"
        formBgColor="bg-white"
        buttonBgColor="bg-rose-gold-dark"
        padding="pt-40 md:pt-44 md:pb-32"
      >
        <DoubleWave color={waveColor} />
      </RSVP>

      <AngpauWithConfirmation
        name={angpauName}
        setName={(e) => setAngpauName(e.target.value)}
        bank={angpauBank}
        setBank={(e) => setAngpauBank(e.target.value)}
        nominal={angpauNominal}
        setNominal={handleAngpauOnValueChange}
        error={angpauError}
        succcess={angpauSuccess}
        handleSubmit={handleAngpauSubmit}
        isLoading={angpauIsLoading}
        bgColor="bg-white"
        textColor="text-rose-gold-dark"
        padding="pt-0 md:pt-0 pb-32"
        rekeningArray={[
          {
            id: 1,
            bankName: "Bank Mandiri",
            bankNo: "144-001-705-707-3",
            bankUserName: "A.n Mohammad Iqbal Ali. M"
          },
          {
            id: 2,
            bankName: "Dana",
            bankNo: "087755744364",
            bankUserName: "A.n Mohammad Iqbal Ali. M"
          },
          {
            id: 3,
            bankName: "OVO",
            bankNo: "087755744364",
            bankUserName: "A.n Mohammad Iqbal Ali. M"
          }
        ]}
        bankOptionArray={[
          {
            id: 1,
            title: "Bank Mandiri"
          },
          {
            id: 2,
            title: "Dana"
          },
          {
            id: 3,
            title: "OVO"
          }
        ]}
      >
        {" "}
        <DoubleWave color={waveColor} isBottom />
      </AngpauWithConfirmation>

      <GallerySlideShow
        bgColor="bg-rose-gold-primary"
        textColor="text-white"
        imageData={imageData}
      />

      {/* <GalleryGrid height={400} width={400} imageData={imageData} /> */}

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
        bgHorizontalLine="bg-rose-gold-dark"
        writeYourWishClassname="bg-rose-gold-dark text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-rose-gold-dark"
      >
        {" "}
        <DoubleWave color={waveColor} />
        <DoubleWave color={waveColor} isBottom />
      </GuestBookWithPopup>

      <Terimakasih
        namaPengantin="Ayu & Iqbal"
        bgColor="bg-rose-gold-primary"
        textColor="text-white"
      />

      <InvitationFooter />
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/ayu-iqbal/comment`, {
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
