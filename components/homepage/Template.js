import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye } from "react-icons/ai";
import { Fade } from "react-reveal";

import { templateData } from "assets/data";

const Template = () => {
  return (
    <section
      id="template"
      className="px-8 md:px-32 py-4 md:py-16 overflow-hidden"
    >
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-5 text-main">
        Choose Your Favourite <span className="text-dark">Template</span>
      </h1>
      <p className="text-gray-500 text-center mb-8 md:mb-20 md:text-lg">
        Ada berbagai macam template yang bisa kamu pilih.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {templateData.map((template) => (
          <Fade bottom key={template.id}>
            <div className="relative w-full shadow-blur-20 rounded-lg overflow-hidden pt-14 pb-16 px-8 ">
              <div className="relative text-center ">
                <Image
                  src={template.imageSrc}
                  alt="undangan pernikahan online termurah"
                  width={200}
                  height={200}
                  objectFit="contain"
                />
              </div>
              <p className="absolute top-0 left-0 py-2 px-6 rounded-br-2xl text-white bg-main ">
                {template.name}
              </p>
              <button className="absolute left-0 bottom-0 py-3 uppercase bg-dark w-full">
                <Link href={template.link}>
                  <a
                    className="flex justify-center items-center text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiOutlineEye size={24} />
                    <span className="ml-2">View</span>
                  </a>
                </Link>
              </button>
            </div>
          </Fade>
        ))}
      </div>
    </section>
  );
};

export default Template;
