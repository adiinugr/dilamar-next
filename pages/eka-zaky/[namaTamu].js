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
import Terimakasih from "components/invitation/Terimakasih"
import InvitationFooter from "components/invitation/InvitationFooter"
import PlayerButton from "components/invitation/parts/PlayerButton"
import { Fade } from "react-reveal"
import Gunungan from "components/invitation/modal/Gunungan"
import BasicHero from "components/invitation/hero/BasicHero"
import RusticCircleImage from "components/invitation/couple/RusticCircleImage"
import ImageAndMessage from "components/invitation/greating/ImageAndMessage"
import OnlyText from "components/invitation/place-and-date/OnlyText"
import BigDay from "components/invitation/date-countdown/BigDay"
import { SlideShow } from "components/invitation/gallery/SlideShow"
import Grid from "components/invitation/gallery/Grid"
import SimpleForm from "components/invitation/rsvp/SimpleForm"
import WithModal from "components/invitation/guest-book/WithModal"

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
]

const gridImageData = [
  {
    id: 1,
    type: "image",
    src: "/clients/eka-zaky/images/image (12).jpg"
  },
  {
    id: 2,
    type: "image",
    src: "/clients/eka-zaky/images/image (13).jpg"
  },
  {
    id: 3,
    type: "image",
    src: "/clients/eka-zaky/images/image (14).jpg"
  },
  {
    id: 4,
    type: "image",
    src: "/clients/eka-zaky/images/image (15).jpg"
  },
  {
    id: 5,
    type: "image",
    src: "/clients/eka-zaky/images/image (18).jpg"
  },
  {
    id: 6,
    type: "image",
    src: "/clients/eka-zaky/images/image (19).jpg"
  },
  {
    id: 7,
    type: "image",
    src: "/clients/eka-zaky/images/image (20).jpg"
  }
]

const slideShowImageData = [
  {
    id: 1,
    type: "image",
    src: "/clients/eka-zaky/images/image (1).jpg"
  },
  {
    id: 2,
    type: "image",
    src: "/clients/eka-zaky/images/image (2).jpg"
  },
  {
    id: 3,
    type: "image",
    src: "/clients/eka-zaky/images/image (3).jpg"
  },
  {
    id: 5,
    type: "image",
    src: "/clients/eka-zaky/images/image (6).jpg"
  },
  {
    id: 6,
    type: "image",
    src: "/clients/eka-zaky/images/image (7).jpg"
  },
  {
    id: 7,
    type: "image",
    src: "/clients/eka-zaky/images/image (9).jpg"
  },
  {
    id: 8,
    type: "image",
    src: "/clients/eka-zaky/images/image (10).jpg"
  },
  {
    id: 9,
    type: "image",
    src: "/clients/eka-zaky/images/image (11).jpg"
  },
  {
    id: 10,
    type: "image",
    src: "/clients/eka-zaky/images/image (21).jpg"
  },
  {
    id: 12,
    type: "image",
    src: "/clients/eka-zaky/images/image (23).jpg"
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

  const [audio, setAudio] = useState(null)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [showPlayButton, setShowPlayButton] = useState(false)

  const [isScroll, setIsScroll] = useState(false)

  const date = new Date("06 July 2022 08:00 UTC+7")
  const isoDate = date.toISOString()

  useEffect(() => {
    setAudio(new Audio("/clients/eka-zaky/deny-widodari.mp3"))

    return () => {
      if (audio) {
        audio.pause()
        setIsAudioPlaying(false)
      }
    }
  }, [])

  useEffect(() => {
    isScroll
      ? (document.body.style.overflow = "unset")
      : (document.body.style.overflow = "hidden")

    return () => {
      isScroll(true)
    }
  }, [isScroll])

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
      const res = await fetch(`/api/eka-zaky/comment`, {
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
      const res = await fetch(`/api/eka-zaky/rsvp`, {
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
    <div className="overflow-hidden">
      <InvitationHead
        title="Eka & Zaky Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/eka-zaky/Nama+Tamu"
        imagePath="/clients/eka-zaky/meta-image.jpg"
      />

      {showPlayButton && (
        <PlayerButton
          handlePlayMusic={handlePlayMusic}
          handlePauseMusic={handlePauseMusic}
          isAudioPlaying={isAudioPlaying}
        />
      )}

      <BottomTabMenu
        textColor="text-lanzones"
        bgColor="bg-black"
        bottomMenuData={bottomMenuData}
      />

      <BasicHero
        name="Eka & Zaky"
        date="6 Juli 2022"
        textColor="text-lanzones"
        overlayClassName="bg-gradient-to-b from-black opacity-70"
        imagePath="/clients/eka-zaky/hero-image.jpg"
        titleText="Pernikahan Kami"
        isSnow={false}
      >
        <Gunungan
          namaTamu={tamu}
          setShowPlayButton={setShowPlayButton}
          handlePlayMusic={handlePlayMusic}
          setIsScroll={setIsScroll}
        />
        <div className="absolute bg-gradient-to-t from-black h-32 w-full bottom-0 left-0 z-400" />
      </BasicHero>

      <ImageAndMessage
        message="Kanthi nyadhong rahmating  Gusti Allah SWT Ingkang Maha Asih, keparenga kula hangaturi rawuh Panjenengan sami wonten adicara pahargyan pawiwahan kula"
        imageUrl="/clients/eka-zaky/javanese-couple.png"
        bgColor="bg-black"
        textColor="text-lanzones"
        padding="pt-0 pb-0"
      />

      <RusticCircleImage
        namaWanita="Eka Praditya Muslikhah Cahyani, S.Pd"
        ortuWanita="Putra estri Bpk Agus Supriyanta & Ibu Siwi Catur Handayani"
        namaPria="Muhamad Rozzaqi, S.Pd"
        ortuPria="Putra kakung Bpk Suwarno & Ibu Siti Kholifah"
        imagePathPria="/clients/eka-zaky/men.png"
        imagePathWanita="/clients/eka-zaky/women.png"
        textColor="text-lanzones"
        bgColor="bg-black"
      >
        <Fade bottom>
          <img
            src="/clients/eka-zaky/wayang-twin.png"
            width={120}
            height={120}
            alt="katanikah line gold"
            className="mb-4 mx-auto"
          />
        </Fade>
      </RusticCircleImage>

      <OnlyText
        tanggalAkad="Rebo Pon, 6 Juli 2022"
        waktuAkad="Pukul 08.00 WIB"
        tanggalResepsi="Rebo Pon, 6 Juli 2022"
        waktuResepsi="Pukul 12.00 - 17.00 WIB"
        namaTempat="Dalemipun Penganten Kakung"
        alamatTempat="Dsn Kemambang RT 01 RW 06, Ds Diwek, Kec Diwek, Jombang"
        googleMapsUri="https://www.google.com/maps/place/6P4JC65V%2B9G5/@-7.5916623,112.2430997,17z/data=!4m5!3m4!1s0x0:0x326441ab11f19fca!8m2!3d-7.5916125!4d112.2438594?hl=en"
        lat={-7.5914}
        lng={112.24383}
        bgColor="bg-black"
        textColor="text-lanzones"
        buttonBgColor=""
        buttonBorder="border-2 border-lanzones"
        buttonTextColor="text-lanzones"
      />
      <SlideShow
        bgColor="bg-black"
        textColor="text-lanzones"
        imageData={slideShowImageData}
      />

      <BigDay
        bgColor="bg-black"
        textColor="text-lanzones"
        date={isoDate}
        padding="pb-0"
      />

      <SimpleForm
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
        bgColor="bg-black"
        textColor="text-lanzones"
        formBgColor="bg-black"
        formBorder="border-2 border-lanzones"
        buttonBgColor="bg-lanzones"
        buttonTextColor="text-black"
      />

      <Grid
        imageData={gridImageData}
        height={400}
        width={400}
        numberOfGridCols={2}
        bgColor="bg-black"
        textColor="text-lanzones"
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
        bgColor="bg-black"
        textColor="text-lanzones"
        bgHorizontalLine="bg-lanzones"
        writeYourWishClassname="bg-lanzones text-black"
        buttonTextColor="text-black"
        buttonBgColor="bg-lanzones"
        commentBorder="border border-lanzones rounded-md p-2"
      />
      <div className="px-8 md:px-32 md:py-72 bg-black text-lanzones">
        <p className="text-center mb-6">
          Menawi Panjenengan kersa rawuh kula namung saged hangaturaken agunging
          panuwun. Mugi Gusti Ingkang Maha Kuwaos paring berkah dhumateng kita
          sami.
        </p>
        <img
          src="/clients/eka-zaky/wayang-twin.png"
          width={120}
          height={120}
          alt="katanikah line gold"
          className="mx-auto"
        />
      </div>

      <Terimakasih
        namaPengantin="Eka & Zaky"
        bgColor="bg-black"
        textColor="text-lanzones"
      />

      <InvitationFooter />

      <div className="h-16"></div>
    </div>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://katanikah.com/api/eka-zaky/comment`, {
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
