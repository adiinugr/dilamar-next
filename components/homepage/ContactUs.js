import React from "react"
import { Fade } from "react-reveal"

import { IoLogoWhatsapp } from "react-icons/io"

const ContactUs = () => {
  return (
    <section
      id="contact-us"
      className="px-8 md:px-24 py-12 md:py-16 overflow-hidden"
    >
      <Fade right>
        <div className="flex flex-col md:flex-row justify-between items-center rounded-xl bg-gradient-to-r from-dark to-main py-8 md:py-24 px-10 md:px-28">
          <h1 className="font-semibold text-2xl text-center md:text-left md:text-3xl text-white mb-8 md:mb-0">
            Konsultasikan Undangan Pernikahanmu!
          </h1>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B62895335501192&text=Hai+KataNikah%2C+Saya+ingin+bertanya+tentang+undangan+online.&app_absent=0"
            target="_blank"
            className="flex items-center gap-3 py-4 px-6 shadow-lg rounded-3xl cursor-pointer bg-white text-dark"
          >
            <IoLogoWhatsapp size={30} />
            <p className="text-xl">Hubungi Kami</p>
          </a>
        </div>
      </Fade>
    </section>
  )
}

export default ContactUs
