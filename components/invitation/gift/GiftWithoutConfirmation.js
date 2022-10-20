import Image from "next/image"
import { AiOutlineGift } from "react-icons/ai"
import { Fade } from "react-reveal"

import { TitleH1 } from "../parts/BigTitle"

const GiftWithoutConfirmation = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  title,
  subtitle,
  padding,
  children,
  rekeningArray,
  bank1Path,
  bank2Path
}) => {
  return (
    <div
      id="angpau"
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-32 md:py-72 ${padding}`}
    >
      {children}

      <Fade top>
        <>
          {title && <TitleH1>{title}</TitleH1>}
          {subtitle && <p className="text-center mb-6">{subtitle}</p>}
        </>
      </Fade>

      <div className="flex flex-col items-center justify-center py-6">
        <Fade top>
          <AiOutlineGift size={50} />
        </Fade>
        <div className="text-center mt-4 mb-6">
          Terimakasih atas doa dan restu yang telah Anda berikan. Namun apabila
          Anda ingin mengirimkan kado, silakan kirim ke rekening di bawah ini.
          Kami mengucapkan banyak terimakasih.
        </div>

        {rekeningArray.map((rekening) => (
          <Fade bottom>
            <div key={rekening.id} className="text-center mb-2">
              {rekening.bankImagePath && (
                <div className="w-18 h-20 p-3 bg-white rounded-lg mb-3">
                  <div className="w-full h-full relative">
                    <Image
                      src={rekening.bankImagePath}
                      layout="fill"
                      objectFit="contain"
                      alt="katanikah website undangan pernikahan online"
                      placeholder="blur"
                      className="p-10"
                    />
                  </div>
                </div>
              )}

              <p className="font-bold">{rekening.bankName}</p>
              <p className="font-semibold">{rekening.bankNo}</p>
              <p>{rekening.bankUserName}</p>
            </div>
          </Fade>
        ))}

        <div className="flex flex-col gap-6 mt-8">
          {bank1Path && (
            <Image
              src={bank1Path}
              width={250}
              height={250}
              objectFit="cover"
              alt="katanikah website undangan pernikahan online"
              placeholder="blur"
            />
          )}
          {bank2Path && (
            <Image
              src={bank2Path}
              width={250}
              height={250}
              objectFit="cover"
              alt="katanikah website undangan pernikahan online"
              placeholder="blur"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default GiftWithoutConfirmation
