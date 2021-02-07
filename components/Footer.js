import React from "react";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-gray-800 py-8 flex text-gray-400 flex-col items-center justify-center">
      <div className="flex items-center mb-4">
        <a
          href="https://wa.me/+6282192477848/?text=Hai%20Nehan,%20Saya%20ingin%20bertanya%20tentang%20undangan%20online."
          target="_blank"
          className="mr-2"
        >
          <AiOutlineWhatsApp size={30} />
        </a>
        <a href="https://www.instagram.com/nehan.dev" target="_blank">
          <AiOutlineInstagram size={30} />
        </a>
      </div>
      <div>
        Copyright &copy; {new Date().getFullYear()}. Nehan Dev All Rights
        Reserved
      </div>
    </section>
  );
};

export default Footer;
