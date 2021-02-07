import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useContext } from "react";

import { AudioContext } from "../../context/AudioContext";

const Index = () => {
  const [playing, setPlaying] = useContext(AudioContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-screen relative">
        <Image
          src="/images/roses.jpg"
          layout="fill"
          objectFit="cover"
          className="absolute"
        />
        <div className="h-full w-full bg-gray-800 absolute opacity-60" />
        <div
          //   data-aos="fade-up"
          className="h-full w-full absolute text-gray-100 flex flex-col justify-center items-center px-4"
        >
          <div className="text-xl md:text-2xl font-semibold">
            You are invited
          </div>
          <div className="font-display text-6xl md:text-7xl my-4">
            Ratna & Galih
          </div>
          <div className="text-xl md:text-2xl font-semibold">
            Wedding Ceremony
          </div>
          <Link href="/standard/page">
            <div
              onClick={() => setPlaying(true)}
              className="text-xl mt-12 md:mt-8 bg-gray-200 text-gray-800 py-1 w-full md:w-1/2 text-center cursor-pointer rounded-md"
            >
              Open Invitation
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
