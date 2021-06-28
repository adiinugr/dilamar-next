import Image from "next/image";
import Lottie from "react-lottie";
import animationLetter from "../../assets/lottie-letter.json";

export const OpeningModalOne = ({
  handleOpenModal,
  namaTamu,
  namaPengantin,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-700",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  withOverlay,
}) => {
  const overlayClassName = () =>
    withOverlay ? "bg-gray-600 bg-opacity-40" : "";

  const containerClassName = () => (backgroundImagePath ? "" : bgColor);

  return (
    <div
      className={`h-full relative ${containerClassName()} ${textColor} overflow-hidden`}
    >
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${overlayClassName()}`}
      >
        <div className="text-xl text-center md:text-2xl font-semibold">
          <p>Dear</p>
          <p className="uppercase text-2xl mt-2 mb-8">{namaTamu}</p>
          <p>you are invited to</p>
        </div>
        <div className="font-display text-5xl md:text-7xl my-4">
          {namaPengantin}
        </div>
        <div className="text-xl md:text-2xl font-semibold">
          Wedding Ceremony
        </div>
        <div
          onClick={handleOpenModal}
          className={`text-xl mt-12 md:mt-8 ${buttonBgColor} ${buttonTextColor} py-2 w-full md:w-1/2 text-center cursor-pointer rounded-md flex justify-center items-center`}
        >
          Open Invitation
        </div>
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
  withOverlay,
}) => {
  const overlayClassName = () =>
    withOverlay ? "bg-gray-600 bg-opacity-40" : "";

  const containerClassName = () => (backgroundImagePath ? "" : bgColor);

  return (
    <div
      className={`h-full relative ${containerClassName()} ${textColor} overflow-hidden`}
    >
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${overlayClassName()}`}
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
              preserveAspectRatio: "xMidYMid slice",
            },
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

export const OpeningModalThree = ({
  handleOpenModal,
  namaTamu,
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-800",
  buttonTextColor = "text-gray-200",
  backgroundImagePath,
  coupleImagePath,
  withOverlay,
}) => {
  const overlayClassName = () =>
    withOverlay ? "bg-gray-600 bg-opacity-40" : "";

  return (
    <div className={`h-full relative ${bgColor} ${textColor} overflow-hidden`}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div
        className={`h-full w-full absolute flex flex-col justify-center items-center px-8 ${overlayClassName()}`}
      >
        <Image
          src={coupleImagePath}
          width={150}
          height={150}
          className="rounded-full shadow-lg"
          objectFit="cover"
        />
        <div className="mt-8 text-base text-center md:text-lg">
          <p>Kepada Yth.</p>
          <p>Bapak/Ibu/Saudara/i</p>
        </div>
        <div className="font-display text-4xl md:text-5xl my-4">{namaTamu}</div>
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
          <p className="ml-4">Open Invitation</p>
        </div>
      </div>
    </div>
  );
};
