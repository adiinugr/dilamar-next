import InvitationHead from "components/invitation/parts/InvitationHead";
import { Hero } from "components/invitation/Hero";
import { QsArrum21 } from "components/invitation/Ayyat";
import { NamaPengantinThree } from "components/invitation/NamaPengantin";
import { WaktuAlamatAcaraFour } from "components/invitation/WaktuAlamatAcara";
import Terimakasih from "components/invitation/Terimakasih";
import InvitationFooter from "components/invitation/InvitationFooter";

const Page = () => {
  return (
    <>
      <InvitationHead
        title="Galih & Ratna Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://katanikah.com/template/basic2"
        imagePath="/images/couple/meta-image.jpg"
      />

      <Hero
        name="Galih & Ratna"
        date="13 Juni 2021"
        textColor="text-gray-100"
        overlayClassName="bg-gradient-to-b from-blue-green-primary opacity-30"
        imagePath="/images/couple/couple3.jpg"
      >
        <div className="absolute bg-gradient-to-t from-blue-green-primary h-32 w-full bottom-0 left-0 z-400" />
      </Hero>

      <QsArrum21 bgColor="bg-blue-green-primary" textColor="text-gray-200" />

      <NamaPengantinThree
        namaWanita="Ratna Yuniar"
        ortuWanita="Putri dari Bpk. Amin & Ibu Dewi"
        namaPria="Galih Siskandar"
        ortuPria="Putra dari Bpk. Bagus & Ibu Dea"
        imagePathPria="/images/man/man2.jpg"
        imagePathWanita="/images/woman/woman2.jpg"
        textColor="text-white"
        bgColor="bg-blue-green-primary"
      />

      <WaktuAlamatAcaraFour
        tanggalAkad="Minggu, 13 Juni 2021"
        waktuAkad="Pukul 08.00 - 09.00 WIB"
        tanggalResepsi="Minggu, 13 Juni 2021"
        waktuResepsi="Pukul 11.00 - 13.00 WIB"
        namaTempat="Kediaman Mempelai Wanita"
        alamatTempat="Jalan Jaksa, No 37B, Surabaya"
        bgColor="bg-blue-green-primary"
        overlayBgColor="bg-white"
        overlayOpacity="bg-opacity-80"
        textColor="text-blue-green-dark"
        akadImagePath="/images/hero/hero2.jpg"
        resepsiImagePath="/images/hero/hero3.jpg"
        isWithGoogleMaps={false}
      />

      <Terimakasih
        namaPengantin="Ratna & Galih"
        bgColor="bg-blue-green-primary"
        textColor="text-white"
      />

      <InvitationFooter />
    </>
  );
};

export default Page;
