import Image from "next/image"
import React, { useState } from "react"
import { MdMailOutline } from "react-icons/md"

function Gunungan({
  namaTamu,
  setShowPlayButton,
  handlePlayMusic,
  setIsScroll
}) {
  const [modalOpacity, setModalOpacity] = useState("")
  const [gununganRightClassName, setGununganRightClassName] = useState("")
  const [gununganLeftClassName, setGununganLeftClassName] = useState("")

  const openModalOnClick = () => {
    setGununganLeftClassName("rotate-left")
    setGununganRightClassName("rotate-right")
    setShowPlayButton(true)
    handlePlayMusic()
    setIsScroll(true)

    setTimeout(() => {
      setModalOpacity("modal-opacity")
    }, 500)
  }

  return (
    <div
      className={`w-full h-full absolute overflow-hidden ${modalOpacity} z-30 sticky`}
    >
      <div className="absolute h-full w-full">
        <Image
          src="/clients/eka-zaky/bg-black-2.jpg"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          alt="katanikah website undangan pernikahan online"
          priority={true}
        />
      </div>
      <div className="h-full">
        <div className="h-2/6 relative flex flex-col items-center justify-end">
          <div className="mb-2 text-lg">Kepada</div>
          <div className="font-honey-carrot text-5xl">{namaTamu}</div>
        </div>
        <div className="h-3/6 w-full relative">
          <div
            className={`gunungan-left h-full w-full ${gununganLeftClassName} absolute top-0 -left-20`}
          >
            <Image
              src="/clients/eka-zaky/gunungan.png"
              alt="img"
              width={500}
              height={700}
              objectFit="cover"
            />
          </div>
          <div
            className={`gunungan-right h-full w-full ${gununganRightClassName} absolute top-0 -right-20`}
          >
            <Image
              src="/clients/eka-zaky/gunungan.png"
              alt="img"
              width={500}
              height={700}
              objectFit="cover"
            />
          </div>
        </div>
        <div className="h-1/6 relative px-10 mt-4">
          <div
            onClick={openModalOnClick}
            className={`text-lg border-2 border-lanzones bg-black text-lanzones py-2 px-8 text-center cursor-pointer rounded-md flex justify-center items-center`}
          >
            <MdMailOutline size={24} className="mr-2" />
            Open Invitation
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gunungan
