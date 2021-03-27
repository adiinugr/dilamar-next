import Image from "next/image";

export const OpeningModalOne = ({
  handleOpenModal,
  namaTamu,
  namaPengantin,
  customColor,
  buttonCustomColor,
  backgroundImagePath,
  withOverlay,
}) => {
  const containerClassName = () =>
    customColor
      ? `h-full relative ${customColor} overflow-hidden`
      : "h-full relative bg-suta-seashell overflow-hidden text-suta-lapis-lazuli";

  const buttonClassName = () =>
    buttonCustomColor
      ? `text-xl mt-12 md:mt-8 ${buttonCustomColor} py-2 w-full md:w-1/2 text-center cursor-pointer rounded-md flex justify-center items-center`
      : "text-xl mt-12 md:mt-8 bg-suta-lapis-lazuli text-suta-seashell py-2 w-full md:w-1/2 text-center cursor-pointer rounded-md flex justify-center items-center";

  const textBackgroundClassName = () =>
    withOverlay
      ? "h-full w-full absolute flex flex-col justify-center items-center px-8 bg-gray-600 bg-opacity-60"
      : "h-full w-full absolute flex flex-col justify-center items-center px-8";

  return (
    <div className={containerClassName()}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div data-aos="fade-up" className={textBackgroundClassName()}>
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
        <div onClick={handleOpenModal} className={buttonClassName()}>
          Open Invitation
        </div>
      </div>
    </div>
  );
};
export const OpeningModalTwo = ({
  handleOpenModal,
  namaTamu,
  customColor,
  buttonCustomColor,
  backgroundImagePath,
  coupleImagePath,
  withOverlay,
}) => {
  const containerClassName = () =>
    customColor
      ? `h-full relative ${customColor} overflow-hidden`
      : "h-full relative bg-suta-seashell overflow-hidden text-suta-lapis-lazuli";

  const buttonClassName = () =>
    buttonCustomColor
      ? ` mt-12 md:mt-8 ${buttonCustomColor} py-2 w-full md:w-1/4 text-center cursor-pointer rounded-md flex justify-center items-center`
      : " mt-12 md:mt-8 bg-suta-lapis-lazuli text-suta-seashell py-2 w-full md:w-1/4 text-center cursor-pointer rounded-md flex justify-center items-center";

  const textBackgroundClassName = () =>
    withOverlay
      ? "h-full w-full absolute flex flex-col justify-center items-center px-8 bg-gray-600 bg-opacity-40"
      : "h-full w-full absolute flex flex-col justify-center items-center px-8";

  return (
    <div className={containerClassName()}>
      {backgroundImagePath && (
        <Image src={backgroundImagePath} layout="fill" objectFit="cover" />
      )}

      <div data-aos="fade-up" className={textBackgroundClassName()}>
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
        <div onClick={handleOpenModal} className={buttonClassName()}>
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
