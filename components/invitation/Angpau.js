import React from "react"
import { AiOutlineLoading3Quarters, AiOutlineGift } from "react-icons/ai"

import CurrencyInput from "react-currency-input-field"
import { Fade } from "react-reveal"
import Image from "next/image"

export const AngpauWithoutConfirmation = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  padding,
  children,
  rekening1,
  rekening2,
  rekening3,
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
        <div className="flex flex-col items-center justify-center">
          <div className="font-yellowtail text-4xl mb-3">Angpau Online</div>
        </div>
      </Fade>

      <Fade top>
        <div className="flex flex-col items-center justify-center py-6">
          <AiOutlineGift size={50} />
          <div className="text-center mt-4 mb-6">
            Terimakasih atas doa dan restu yang telah Anda berikan. Namun
            apabila Anda ingin mengirimkan kado, silakan kirim ke rekening di
            bawah ini. Kami mengucapkan banyak terimakasih.
          </div>
          <div className="text-lg text-center font-bold">{rekening1}</div>
          <div>{rekening2}</div>
          <div>{rekening3}</div>
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
      </Fade>
    </div>
  )
}

export const AngpauWithConfirmation = ({
  name,
  setName,
  bank,
  setBank,
  nominal,
  setNominal,
  error,
  succcess,
  handleSubmit,
  isLoading,
  rekeningArray = [],
  bankOptionArray = [],
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  borderColor,
  inputTextColor,
  inputBgColor = "bg-gray-100",
  buttonTextColor,
  buttonBgColor
}) => {
  return (
    <div className={`${bgColor} ${textColor} flex flex-col md:px-80`}>
      <div className="flex flex-col items-center justify-center py-6">
        <AiOutlineGift size={50} />
        <div className="text-center mt-4 mb-2">
          Terimakasih atas doa dan restu yang telah Anda berikan. Namun apabila
          Anda ingin mengirimkan kado, silakan kirim ke rekening di bawah ini.
          Kami mengucapkan banyak terimakasih.
        </div>
        {rekeningArray.map((rekening) => (
          <div key={rekening.id} className="text-center mb-2">
            <p className="font-bold">{rekening.bankName}</p>
            <p className="font-semibold">{rekening.bankNo}</p>
            <p>{rekening.bankUserName}</p>
          </div>
        ))}
      </div>
      <div className={`w-4/5 ${borderColor} border-t-2 py-4 mx-auto`}>
        <form onSubmit={handleSubmit}>
          <div className="editor flex flex-col  max-w-2xl mt-2">
            {error && (
              <div className="mb-6 font-body bg-gray-200 p-2 rounded-md text-red-800">
                {error}
              </div>
            )}
            {succcess && (
              <div className="mb-6 font-body bg-gray-200 p-2 rounded-md text-green-800">
                {succcess}
              </div>
            )}
            <input
              className={`${inputBgColor} ${inputTextColor} p-2 mb-4 outline-none font-body`}
              spellCheck="false"
              placeholder="Nama"
              value={name}
              onChange={setName}
              type="text"
            />
            <select
              value={bank}
              onChange={setBank}
              className={`${inputBgColor} ${inputTextColor} mb-4 p-2 w-full`}
            >
              <option value="">- Pilih salah satu -</option>
              {bankOptionArray.map((bankOption) => (
                <option key={bankOption.id} value={bankOption.title}>
                  {bankOption.title}
                </option>
              ))}
            </select>
            <CurrencyInput
              className={`${inputBgColor} ${inputTextColor} p-2 mb-4 outline-none font-body`}
              spellCheck="false"
              prefix="Rp "
              groupSeparator="."
              placeholder="Nominal"
              value={nominal}
              onValueChange={setNominal}
            />
            <div className="buttons flex">
              <button
                type="submit"
                className={`${buttonTextColor} ${buttonBgColor} btn border py-2 px-4 font-body cursor-pointe ml-auto mt-4 flex justify-center items-center`}
              >
                {isLoading && (
                  <div className="animate-spin mr-3">
                    <AiOutlineLoading3Quarters />
                  </div>
                )}
                Kirim Angpau
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
