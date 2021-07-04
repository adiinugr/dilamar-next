import { GoBook } from "react-icons/go";

export const QsAnNur32 = ({ bgColor, textColor }) => {
  const containerClassName = () =>
    bgColor && textColor
      ? `${bgColor} ${textColor} py-16 flex flex-col items-center justify-center overflow-hidden`
      : "bg-suta-gunmetal text-gray-300 py-16 flex flex-col items-center justify-center overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div
        data-aos="zoom-in"
        className="w-3/4 flex flex-col items-center justify-center"
      >
        <GoBook size={80} className=" mb-4" />
        <p className="text-center mb-2 ">
          "Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan
          juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang
          laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi
          kemampuan kepada mereka dengan karunia-Nya. Dan Allah Mahaluas
          (pemberian-Nya), Maha Mengetahui."
        </p>
        <p className="font-medium">(QS. An-Nur ayat 32)</p>
      </div>
    </div>
  );
};
export const TidakMengundang = ({ bgColor, textColor }) => {
  const containerClassName = () =>
    bgColor && textColor
      ? `${bgColor} ${textColor} py-16 flex flex-col items-center justify-center overflow-hidden`
      : "bg-suta-gunmetal text-gray-300 py-16 flex flex-col items-center justify-center overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div
        data-aos="zoom-in"
        className="w-3/4 flex flex-col items-center justify-center"
      >
        <GoBook size={80} className=" mb-4" />
        <p className="text-center mb-2 ">
          Bapak/ Ibu/ Saudara/ i yang kami hormati. Mohon doa restu atas
          pernikahan kami berdua. Tak lupa kami memohon maaf apa bila tidak
          dapat memberikan undangan, karena keadaan yang tidak memungkinkan.
        </p>
        <p className="font-medium">Nindya & Andhika</p>
      </div>
    </div>
  );
};
