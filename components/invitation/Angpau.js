import React from "react";
import {
  AiOutlineLoading3Quarters,
  AiOutlineRedEnvelope,
} from "react-icons/ai";

const Angpau = ({
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
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  borderColor,
  inputTextColor,
  inputBgColor = "bg-gray-100",
  buttonTextColor,
  buttonBgColor,
}) => {
  return (
    <div className={`${bgColor} ${textColor} flex flex-col md:px-80`}>
      <div className="flex flex-col items-center justify-center py-6">
        <AiOutlineRedEnvelope size={50} />
        <div className="text-center mt-4">
          Terimakasih atas doa dan restu yang telah Anda berikan. Namun apabila
          Anda ingin mengirimkan kado, silakan kirim ke rekening di bawah ini.
          Kami mengucapkan banyak terimakasih.
        </div>
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
              <option value="BNI - Roy Prasetyo (0297685799)">
                BNI - Roy Prasetyo (0297685799)
              </option>
              <option value="BNI - Ririk Endah W. (0304324421)">
                BNI - Ririk Endah W. (0304324421)
              </option>
            </select>
            <input
              className={`${inputBgColor} ${inputTextColor} p-2 mb-4 outline-none font-body`}
              spellCheck="false"
              placeholder="Nominal"
              value={nominal}
              onChange={setNominal}
              type="text"
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
  );
};

export default Angpau;
