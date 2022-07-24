import Image from "next/image"
import { MdMailOutline } from "react-icons/md"
import { Bounce } from "react-reveal"

const ModalStandard = ({
  handleOpenModal,
  namaTamu,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  coupleImagePath,
  coupleClassName,
  overlayClassName,
  overlayPosition = "inset-0",
  additionalText,
  children
}) => {
  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div className={`absolute ${overlayPosition} ${overlayClassName}`} />

      {children}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center`}
      >
        {coupleImagePath && (
          <div
            className={`relative h-36 w-36 rounded-full overflow-hidden ${coupleClassName}`}
          >
            <Image
              src={coupleImagePath}
              className="absolute"
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
        <div className="mt-12 text-center md:text-lg">
          <p>Kepada Yth.</p>
          <p>Bapak/Ibu/Saudara/i</p>
        </div>
        <div className="font-yellowtail text-4xl md:text-5xl mt-2">
          {namaTamu}
        </div>
        {additionalText && (
          <p className="text-center mt-3 px-4">{additionalText}</p>
        )}
        <Bounce delay={500}>
          <div
            onClick={handleOpenModal}
            className={`text-lg mt-12 md:mt-8 ${buttonBgColor} ${buttonTextColor} py-2 px-8 text-center cursor-pointer rounded-md flex justify-center items-center`}
          >
            <MdMailOutline size={24} className="mr-2" />
            Open Invitation
          </div>
        </Bounce>
      </div>
    </div>
  )
}

export default ModalStandard
