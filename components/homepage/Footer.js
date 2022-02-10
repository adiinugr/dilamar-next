import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-dark flex flex-col md:flex-row justify-between items-center text-gray-200 py-8 px-10 mt-16 gap-4 md:gap-0">
      <div className="text-2xl font-bold">KataNikah</div>
      <div className="my-2 md:0 text-center">
        Copyright &copy; {new Date().getFullYear()}. Nehan Dev All Rights
        Reserved
      </div>
      <div className="flex items-center">
        <a
          href="https://api.whatsapp.com/send/?phone=%2B6282192477848&text=Hai+KataNikah%2C+Saya+ingin+bertanya+tentang+undangan+online.&app_absent=0"
          target="_blank"
          className="mr-2"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
        <a href="https://www.instagram.com/nehan.dev" target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
