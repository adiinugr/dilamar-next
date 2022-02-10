import Image from "next/image";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <header className="h-20 flex justify-between items-center px-8 md:px-16 fixed w-full top-0 z-20 bg-white shadow-sm">
      {/* <Image
        src="/images/logo.png"
        width={100}
        height="auto"
        layout="fill"
        className="rounded-2xl"
      /> */}
      <div className="text-2xl font-bold">KataNikah</div>
      <nav className="absolute md:relative w-full md:w-auto top-20 left-0 md:top-auto md:left-auto shadow-md md:shadow-none">
        <ul
          className={`${
            toggle ? "flex" : "hidden"
          } md:flex flex-col md:flex-row bg-white w-full p-6 md:p-0 gap-3 md:gap-6 items-center text-gray-600`}
        >
          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="home"
              smooth={true}
              duration={500}
            >
              Home
            </ScrollLink>
          </li>
          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="service"
              smooth={true}
              duration={500}
              offset={-120}
            >
              Features
            </ScrollLink>
          </li>
          <li className="cursor-pointer mb-4 md:mb-0">Template</li>

          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="package"
              smooth={true}
              duration={500}
              offset={-60}
            >
              Pricing
            </ScrollLink>
          </li>
          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="testimony"
              smooth={true}
              duration={500}
              offset={-60}
            >
              Testimony
            </ScrollLink>
          </li>
          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="faq"
              smooth={true}
              duration={500}
              offset={-60}
            >
              FAQ
            </ScrollLink>
          </li>
          <li className="cursor-pointer mb-4 md:mb-0">
            <ScrollLink
              onClick={() => setToggle(false)}
              to="contact-us"
              smooth={true}
              duration={500}
              offset={-60}
            >
              Contact Us
            </ScrollLink>
          </li>
        </ul>
      </nav>
      <div>
        <HiMenu
          onClick={() => setToggle(!toggle)}
          size={26}
          className="cursor-pointer md:hidden"
        />
      </div>
    </header>
  );
};

export default Header;
