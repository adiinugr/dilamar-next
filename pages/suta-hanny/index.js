import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import InvitationHead from "../../components/InvitationHead";

import { AudioContext } from "../../context/AudioContext";

const Index = () => {
  const [playing, setPlaying] = useContext(AudioContext);

  return (
    <>
      <InvitationHead
        title="Suta & Hanny Wedding Invitation"
        description="Kami mengundang Bapak/Ibu, saudara, dan rekan-rekan semua untuk hadir di acara pernikahan kami."
        link="https://dilamar.vercel.app/suta-hanny"
      />
      <div>
        <div className="h-screen relative bg-suta-seashell overflow-hidden">
          <div
            data-aos="slide-right"
            className="absolute top-0 left-0 w-56 h-56 md:w-96 md:h-96"
          >
            <Image src="/suta-hanny/flower1.png" layout="fill" />
          </div>
          <div
            data-aos="slide-left"
            className="absolute right-0 bottom-0 w-48 h-48 md:w-96 md:h-96"
          >
            <Image src="/suta-hanny/flower2.png" layout="fill" />
          </div>
          <div
            data-aos="fade-up"
            className="h-full w-full absolute text-suta-lapis-lazuli flex flex-col justify-center items-center px-4"
          >
            <div className="text-xl md:text-2xl font-semibold">
              You are invited
            </div>
            <div className="font-display text-6xl md:text-7xl my-4">
              Suta & Hanny
            </div>
            <div className="text-xl md:text-2xl font-semibold">
              Wedding Ceremony
            </div>
            <Link href="/suta-hanny/page">
              <div
                onClick={() => setPlaying(true)}
                className="text-xl mt-12 md:mt-8 bg-suta-lapis-lazuli text-suta-seashell py-2 w-full md:w-1/2 text-center cursor-pointer rounded-md"
              >
                Open Invitation
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
