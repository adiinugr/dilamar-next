import Image from "next/image";
import Lottie from "react-lottie";
import { MdMailOutline } from "react-icons/md";

import animationLetter from "../../assets/lottie-letter.json";
import { Bounce } from "react-reveal";

export const OpeningModalStandard = ({
  handleOpenModal,
  namaTamu,
  namaPengantin,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-700",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  overlayClassName,
  children
}) => {
  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image
          src={backgroundImagePath}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority={true}
        />
      )}

      <div className={`h-full w-full absolute ${overlayClassName}`} />

      {children}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8`}
      >
        <div className="text-lg text-center md:text-xl">
          <p>
            Dear, <span className="font-bold">{namaTamu}</span>
          </p>
          <p>You Are Invited to</p>
        </div>
        <div className="font-yellowtail text-5xl md:text-6xl my-4">
          {namaPengantin}
        </div>
        <div className="text-lg md:text-xl">Wedding Ceremony</div>
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
  );
};

export const OpeningModalTwo = ({
  handleOpenModal,
  namaTamu,
  namaPengantin,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-700",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  bgOverlay,
  children
}) => {
  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      {children}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${bgOverlay}`}
      >
        <div className="text-xl text-center md:text-2xl font-semibold">
          <p>
            Dear,{" "}
            <span className="uppercase font-bold mt-2 mb-8">{namaTamu}</span>
          </p>
        </div>
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationLetter,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
          height={120}
          width={120}
        />
        <div className="text-lg text-center md:text-2xl font-semibold">
          Kami mengundang Anda untuk hadir di pernikahan kami.
        </div>
        <div
          onClick={handleOpenModal}
          className={`hobble-hor-bottom text-xl mt-10 md:mt-8 ${buttonBgColor} ${buttonTextColor} py-2 w-full md:w-1/2 text-center cursor-pointer rounded-md flex justify-center items-center`}
        >
          Open Invitation
        </div>
      </div>
    </div>
  );
};

export const OpeningModalWithCoupleImage = ({
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
  );
};

export const OpeningModalNoInvitation = ({
  handleOpenModal,
  namaTamu,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  coupleImagePath,
  withOverlay
}) => {
  const overlayClassName = () =>
    withOverlay ? "bg-gray-800 bg-opacity-60" : "";

  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${overlayClassName()}`}
      >
        <div className="mt-8 text-base text-center md:text-lg">
          <p>Kepada Yth.</p>
          <p>Bapak/Ibu/Saudara/i</p>
        </div>
        <div className="font-display text-4xl md:text-5xl my-4">{namaTamu}</div>
        <div className="text-base text-center md:text-lg">
          <p>Mohon doa restu atas pernikahan kami</p>
        </div>
        <div
          onClick={handleOpenModal}
          className={`mt-12 md:mt-8 ${buttonBgColor} ${buttonTextColor} py-2 w-full md:w-1/4 text-center cursor-pointer rounded-md flex justify-center items-center`}
        >
          <Image
            src="/images/love-letter.png"
            width={30}
            height={30}
            objectFit="cover"
          />
          <p className="ml-4">Open</p>
        </div>
      </div>
    </div>
  );
};

export const OpeningModalWithTwoDynamicVar = ({
  handleOpenModal,
  namaTamu,
  jenisTamu,
  namaPengantin,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  withOverlay
}) => {
  const overlayClassName = () =>
    withOverlay ? "bg-gray-800 bg-opacity-60" : "";

  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${overlayClassName()}`}
      >
        <div className="mt-8 text-base text-center md:text-lg">
          <p>Dear,</p>
          <p className="mt-1 text-lg font-bold">{namaTamu}</p>
          <p className="my-4 font-semibold uppercase">"{jenisTamu}"</p>
        </div>
        <div className="font-display text-4xl md:text-5xl my-4">
          {namaPengantin}
        </div>
        <div
          onClick={handleOpenModal}
          className={`mt-12 md:mt-8 ${buttonBgColor} ${buttonTextColor} py-2 w-full md:w-1/4 text-center cursor-pointer rounded-md flex justify-center items-center`}
        >
          <Image
            src="/images/love-letter.png"
            width={30}
            height={30}
            objectFit="cover"
          />
          <p className="ml-4">Open</p>
        </div>
      </div>
    </div>
  );
};
