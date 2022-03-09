import React from "react";
import Image from "next/image";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const InvitationFooter = ({
  bgColor = "bg-white",
  textColor = "text-brown-dark"
}) => {
  return (
    <footer
      className={`${bgColor} ${textColor} grid grid-cols-4 gap-y-3 py-8 px-10 `}
    >
      <div className="text-2xl font-bold flex items-center justify-center col-start-1 col-end-3">
        <Image
          src="/images/icon.png"
          className="rounded-full"
          width={45}
          height={45}
        />
        <p className="ml-4 font-yellowtail text-2xl">KataNikah</p>
      </div>
      <div className="flex items-center col-start-3 col-end-5 justify-end">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B6282192477848&text=Hai+KataNikah%2C+Saya+ingin+bertanya+tentang+undangan+online.&app_absent=0"
          target="_blank"
          className="mr-2"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
        <a href="https://www.instagram.com/kata.nikah" target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
      </div>
      <div className="mb-3 md:mb-0 text-center col-start-1 col-end-5">
        Copyright &copy; {new Date().getFullYear()}. KataNikah All Rights
        Reserved
      </div>
    </footer>
  );
};

export default InvitationFooter;
