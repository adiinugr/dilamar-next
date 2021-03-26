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
      {/* <div
        data-aos="slide-right"
        className="absolute top-0 left-0 w-56 h-56 md:w-96 md:h-96"
      >
        <Image src="/suta-hanny/flower1.png" layout="fill" />
      </div>
      <div
        data-aos="slide-left"
        className="absolute right-0 bottom-0 w-48 h-48 md:w-96 md:h-96"
      >
        <Image src="/suta-hanny/flower2.png" layout="fill" />
      </div> */}
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
      {/* <div
        data-aos="slide-right"
        className="absolute top-0 left-0 w-56 h-56 md:w-96 md:h-96"
      >
        <Image src="/suta-hanny/flower1.png" layout="fill" />
      </div>
      <div
        data-aos="slide-left"
        className="absolute right-0 bottom-0 w-48 h-48 md:w-96 md:h-96"
      >
        <Image src="/suta-hanny/flower2.png" layout="fill" />
      </div> */}
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
