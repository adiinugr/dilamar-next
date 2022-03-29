import InvitationHead from "components/invitation/parts/InvitationHead";
import { Hero } from "components/invitation/Hero";
import { QsArrum21 } from "components/invitation/Ayyat";
import { NamaPengantinThree } from "components/invitation/NamaPengantin";
import { SingleWave } from "components/invitation/parts/Divider";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import Terimakasih from "components/invitation/Terimakasih";
import InvitationFooter from "components/invitation/InvitationFooter";

const Page = () => {
  const waveColor = "#C85250";

  return (
    <>
      <InvitationHead
        title="Galih & Ratna Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/template/basic3"
        imagePath="/images/couple/meta-image.jpg"
      />

      <Hero
        name="Galih & Ratna"
        date="13 Juni 2021"
        textColor="text-gray-100"
        overlayPosition="top-4 right-4 bottom-0 left-4"
        overlayClassName=" border-4 border-white border-opacity-80 rounded-xl"
        imagePath="/images/couple/couple18.jpg"
      >
        <SingleWave color={waveColor} waveClassName="svg-shadow" isBottom />
      </Hero>

      <QsArrum21 bgColor="bg-rose-red-primary" textColor="text-white" />

      <NamaPengantinThree
        namaWanita="Ratna Yuniar"
        ortuWanita="Putri dari Bpk. Amin & Ibu Dewi"
        namaPria="Galih Siskandar"
        ortuPria="Putra dari Bpk. Bagus & Ibu Dea"
        imagePathPria="/images/man/man2.jpg"
        imagePathWanita="/images/woman/woman2.jpg"
        textColor="text-white"
        bgColor="bg-rose-red-primary"
      />

      <WaktuAlamatAcaraFour
        tanggalAkad="Minggu, 13 Juni 2021"
        waktuAkad="Pukul 08.00 - 09.00 WIB"
        tanggalResepsi="Minggu, 13 Juni 2021"
        waktuResepsi="Pukul 11.00 - 13.00 WIB"
        namaTempat="Kediaman Mempelai Wanita"
        alamatTempat="Jalan Jaksa, No 37B, Surabaya"
        bgImagePath="/images/couple/couple19.png"
        overlayClassName="glass"
        textColor="text-white"
        isWithGoogleMaps={false}
      />

      <Terimakasih
        namaPengantin="Ratna & Galih"
        bgColor="bg-rose-red-primary"
        textColor="text-white"
      />

      <InvitationFooter />
    </>
  );
};

export default Page;