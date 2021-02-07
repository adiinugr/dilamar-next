import Image from "next/image";
import Header from "../components/Header";

import { AiOutlineWhatsApp } from "react-icons/ai";

const Konsultasi = () => {
  return (
    <div>
      <Header />

      <section className="h-screen relative overflow-hidden">
        <div
          className="h-full w-full absolute text-gray-700 flex flex-col-reverse md:flex-row justify-center items-center px-10 md:px-40 bg-gray-100"
          data-aos="fade-up"
        >
          <div className="md:w-1/2 flex flex-col">
            <div className="text-2xl font-semibold mb-4">Hubungi Kami</div>
            <div className="text-lg mb-6">
              Masih bingung mau pilih paket yang mana? Konsultasikan semuanya
              dengan kami. Kamu bebas bertanya secara detail tentang rencanamu
              membuat undangan online.
            </div>
            <a
              href="https://wa.me/+6282192477848/?text=Hai%20Nehan,%20Saya%20ingin%20bertanya%20tentang%20undangan%20online."
              target="_blank"
              className="flex self-start"
            >
              <div className="bg-gray-400 py-2 px-5  flex text-gray-100 cursor-pointer">
                <AiOutlineWhatsApp size={20} />
                <div className="ml-2">Chat Nehan Dev</div>
              </div>
            </a>
          </div>
          <div className="md:w-1/2 text-right mb-8 md:mb-0">
            <Image
              src="/images/contact-us.svg"
              width={500}
              height={250}
              objectFit="cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Konsultasi;
