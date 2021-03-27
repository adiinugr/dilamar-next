import Image from "next/image";
import React from "react";

const ProtokolKesehatan = ({ customColor }) => {
  const containerClassName = () =>
    customColor
      ? `${customColor} flex justify-center items-center overflow-hidden`
      : "flex justify-center items-center bg-suta-gunmetal text-suta-seashell overflow-hidden";

  return (
    <div className={containerClassName()}>
      <div data-aos="zoom-in" className="w-3/4 flex flex-col py-8 md:py-14">
        <div className="text-center font-display text-4xl md:text-6xl mb-6">
          Protokol Kesehatan
        </div>
        <p className="mt-4">
          Sehubungan dengan kondisi saat ini, diharapkan bapak/ibu/saudara/i
          tamu undangan mematuhi himbauan dari pemerintah dalam pencegahan
          penyebaran Covid-19 dengan cara:
        </p>
        <div className="mt-12 flex flex-col md:flex-row">
          <div className="text-center mb-6  mx-4">
            <Image src="/corona-packs/patient.png" width={50} height={50} />
            <p>Selalu menggunakan masker selama acara berlangsung</p>
          </div>
          <div className="text-center mb-6  mx-4">
            <Image src="/corona-packs/hand-wash.png" width={50} height={50} />
            <p>Mencuci tangan sebelum masuk dan keluar dari acara</p>
          </div>
          <div className="text-center mb-6  mx-4">
            <Image src="/corona-packs/distance.png" width={50} height={50} />
            <p>Tidak berkerumun dengan menjaga jarak sejauh 2 meter</p>
          </div>
          <div className="text-center  mx-4">
            <Image src="/corona-packs/no-touch.png" width={50} height={50} />
            <p>
              Tidak bersalaman selama berada di lokasi. Dapat menggantinya
              dengan salaman jarak jauh
            </p>
          </div>
        </div>
        <p className="mt-12 text-center">
          Terimakasih atas pengertian bapak/ibu/saudara/i tamu undangan. Semoga
          dengan mematuhi protokol kesehatan di atas kita semua bisa terjaga
          dari Covid-19.
        </p>
      </div>
    </div>
  );
};

export default ProtokolKesehatan;
