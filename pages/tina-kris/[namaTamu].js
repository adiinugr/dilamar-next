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
import { QsArrum21 } from "components/invitation/Ayyat"
import { NamaPengantinThree } from "components/invitation/NamaPengantin"
import { DoubleWave } from "components/invitation/parts/Divider"
import RSVP from "components/invitation/RSVP"
import { GallerySlideShow } from "components/invitation/Gallery"
import { GuestBookWithPopup } from "components/invitation/GuestBook"
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import DateCountdown from "components/invitation/DateCountdown"
import PlayerButton from "components/invitation/parts/PlayerButton"
import WithBackgroundImage from "components/invitation/place-and-date/WithBackgroundImage"
import WithBarcode from "components/invitation/instagram-filter/WithBarcode"
import Grid from "components/invitation/gallery/Grid"

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
]

const imageData = [
  {
    id: 1,
    type: "image",
    src: "/clients/tina-kris/image2.jpeg"
  },
  {
    id: 2,
    type: "image",
    src: "/clients/tina-kris/image4.jpeg"
  },
  {
    id: 3,
    type: "image",
    src: "/clients/tina-kris/image8.jpeg"
  },
  {
    id: 4,
    type: "image",
    src: "/clients/tina-kris/image3.jpeg"
  },
  {
    id: 5,
    type: "image",
    src: "/clients/tina-kris/image9.jpeg"
  }
]

const gridImageData = [
  {
    id: 1,
    type: "image",
    src: "/clients/tina-kris/grid image (1).jpeg"
  },
  {
    id: 2,
    type: "image",
    src: "/clients/tina-kris/grid image (2).jpeg"
  },
  {
    id: 3,
    type: "image",
    src: "/clients/tina-kris/grid image (3).jpeg"
  },
  {
    id: 4,
    type: "image",
    src: "/clients/tina-kris/grid image (4).jpeg"
  },
  {
    id: 5,
    type: "image",
    src: "/clients/tina-kris/grid image (5).jpeg"
  },
  {
    id: 7,
    type: "image",
    src: "/clients/tina-kris/grid image (7).jpeg"
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

  const [modalIsOpen, setModalIsOpen] = useState(true)

  const [audio, setAudio] = useState(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  const date = new Date("17 November 2022 09:00 UTC+7")
  const isoDate = date.toISOString()
  const waveColor = "#051A1B"

  useEffect(() => {
    setAudio(new Audio("/clients/tina-kris/briyan.mp3"))

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
      const res = await fetch(`/api/tina-kris/comment`, {
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
      const res = await fetch(`/api/tina-kris/rsvp`, {
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

  return (
    <>
      <InvitationHead
        title="Tina & Kris Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/tina-kris/Nama+Tamu"
        imagePath="/clients/tina-kris/image1.jpeg"
      />

      <ReactModal
        isOpen={modalIsOpen}
        closeTimeoutMS={500}
        ariaHideApp={false}
        className="absolute top-0 left-0 right-0 bottom-0 z-40"
      >
        <OpeningModalStandard
          handleOpenModal={handleOpenModal}
          namaTamu={tamu}
          namaPengantin="Tina & Kris"
          customColor="text-gray-50"
          buttonBgColor="bg-green-primary opacity-80"
          buttonTextColor="text-white"
          backgroundImagePath="/clients/tina-kris/image10.jpeg"
          overlayClassName="bg-gradient-to-t from-green-dark opacity-80"
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
        textColor="text-green-dark"
        bottomMenuData={bottomMenuData}
      />

      <Hero
        name="Tina & Kris"
        date="17 November 2022"
        textColor="text-gray-100"
        overlayClassName="bg-gradient-to-b from-green-primary opacity-30"
        imagePath="/clients/tina-kris/hero.png"
        textPosition="top"
        isSnow={false}
      >
        <div className="absolute bg-gradient-to-t from-green-dark h-32 w-full bottom-0 left-0 z-400" />
      </Hero>

      <QsArrum21 bgColor="bg-green-dark" textColor="text-gray-200" />

      <NamaPengantinThree
        namaWanita="Agustina"
        ortuWanita="Putri dari Bpk. Sudarman & Ibu Radiah"
        namaPria="Krismanto"
        ortuPria="Putra dari Bpk. Usman (Alm) & Ibu Endang Suhartini"
        imagePathPria="/clients/tina-kris/men.jpeg"
        imagePathWanita="/clients/tina-kris/women.jpeg"
        textColor="text-white"
        bgColor="bg-green-dark"
      />

      {/* <StoryTwo
        textColor="text-green-dark"
        bgColor="bg-white"
        imageOnePath="/images/couple/couple8.jpg"
        imageTwoPath="/images/couple/couple11.jpg"
        lineBorderColor="border-green-lighter"
        storyData={storyData}
      >
        <DoubleWave color={waveColor} />
        <DoubleWave color={waveColor} isBottom />
      </StoryTwo> */}

      <WithBackgroundImage
        tanggalAkad="Kamis, 17 November 2022"
        waktuAkad="Pukul 09.00 - Selesai"
        tanggalResepsi="Kamis, 17 November 2022"
        waktuResepsi="Pukul 11.00 - Selesai"
        alamatTempatAkad="Jln. Hj Isa 3, GG. Bersatu"
        namaTempatResepsi="IPcafe"
        alamatTempatResepsi="Jln Murjani 1 (depan lapangan basket batiwakal)"
        googleMapsUri="https://goo.gl/maps/jEed2bzdQzb39tC5A"
        lat={2.14919}
        lng={117.50456}
        bgColor="bg-green-dark"
        overlayBgColor="bg-gradient-to-b from-green-dark opacity-70"
        overlayOpacity="bg-opacity-100"
        textColor="text-gray-200"
        buttonBgColor="bg-green-primary"
        akadImagePath="/clients/tina-kris/image5.jpeg"
        resepsiImagePath="/clients/tina-kris/image6.jpeg"
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
        textColor="text-green-dark"
        formBgColor="bg-white"
        buttonBgColor="bg-green-primary"
        padding="pt-40 md:pt-44"
      >
        <DateCountdown
          date={isoDate}
          bgColor="bg-white"
          shadow="shadow-blur-20"
          position="left-1/2 transform -translate-x-1/2 -top-24 md:-top-32"
        />
      </RSVP>

      <GallerySlideShow
        bgColor="bg-green-dark"
        textColor="text-white"
        imageData={imageData}
      />

      <WithBarcode
        bgColor="bg-white"
        textColor="text-green-dark"
        padding="pb-28"
        barcodeImagePath="/clients/tina-kris/qrcode.png"
        barcodeUrl="https://www.instagram.com/ar/517179596715181/"
        buttonTextColor="text-white"
        buttonBgColor="bg-green-primary"
      >
        <DoubleWave color={waveColor} isBottom />
      </WithBarcode>

      <Grid
        subtitle="Momen kebersamaan kami menuju sakinah, mawadah, warohmah"
        imageData={gridImageData}
        height={400}
        width={400}
        numberOfGridCols={2}
        bgColor="bg-green-dark"
        textColor="text-white"
        fontFamily="font-yellowtail"
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
        bgHorizontalLine="bg-green-dark"
        writeYourWishClassname="bg-green-primary text-white"
        buttonTextColor="text-white"
        buttonBgColor="bg-green-dark"
      >
        {" "}
        <DoubleWave color={waveColor} />
        <DoubleWave color={waveColor} isBottom />
      </GuestBookWithPopup>

      <Terimakasih
        namaPengantin="Tina & Kris"
        bgColor="bg-green-dark"
        textColor="text-white"
      />

      <InvitationFooter textColor="text-brand-dark" />

      <div className="h-16"></div>
    </>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/tina-kris/comment`, {
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
