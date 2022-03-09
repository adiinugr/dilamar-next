import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RSVP = ({
  name,
  setName,
  address,
  setAddress,
  status,
  setStatus,
  error,
  succcess,
  handleSubmit,
  isLoading,
  bgColor = "bg-gray-600",
  textColor = "text-gray-200",
  buttonBgColor = "bg-gray-600",
  buttonTextColor = "text-gray-200",
  formBgColor = "bg-gray-200",
  children
}) => {
  return (
    <div
      id="rsvp"
      className={`${bgColor} ${textColor} relative max-w-2xl m-auto overflow-hidden py-16 px-8`}
    >
      {children}

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="font-yellowtail text-4xl mb-3">RSVP</div>
        <div className="text-center">Konfirmasi kehadiranmu di sini!</div>
      </div>
      <div className={`${formBgColor} mx-auto shadow-blur-20 p-6 rounded-xl`}>
        <form onSubmit={handleSubmit}>
          <div className="editor flex flex-col  max-w-2xl mt-6">
            {error && (
              <div className="mb-2 font-body text-red-800">{error}</div>
            )}
            {succcess && (
              <div className="mb-2 font-body text-green-800">{succcess}</div>
            )}
            <input
              className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
              spellCheck="false"
              placeholder="Nama"
              value={name}
              onChange={setName}
              type="text"
            />
            <input
              className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
              spellCheck="false"
              placeholder="Alamat"
              value={address}
              onChange={setAddress}
              type="text"
            />
            <select
              value={status}
              onChange={setStatus}
              className="bg-gray-100 border border-gray-300 mb-4 p-2 w-full"
            >
              <option value="">- Pilih salah satu -</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
              <option value="Ragu-ragu">Ragu-ragu</option>
            </select>
            <div className="buttons flex">
              <button
                type="submit"
                className={`btn ${buttonTextColor} ${buttonBgColor} border py-2 px-4 font-body cursor-pointer ml-auto mt-4 flex justify-center items-center rounded-md`}
              >
                {isLoading && (
                  <div className="animate-spin mr-3">
                    <AiOutlineLoading3Quarters />
                  </div>
                )}
                Kirim Konfirmasi
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RSVP;
