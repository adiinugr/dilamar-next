import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RSVP = ({
  name,
  setName,
  status,
  setStatus,
  message,
  setMessage,
  error,
  succcess,
  handleSubmit,
  isLoading,
}) => {
  return (
    <div
      id="rsvp"
      className="bg-kharnisa-imam-rosegold flex justify-center overflow-hidden"
    >
      <div className="w-5/6 md:w-2/4 bg-gray-50 rounded-lg py-10">
        <div className="flex flex-col items-center justify-center py-6">
          <div className="font-display text-4xl mb-4">RSVP</div>
          <div className="text-center">Konfirmasi kehadiranmu di sini!</div>
        </div>
        <div className="w-4/5 border-kharnisa-imam-rosegold border-t-2 py-4 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="editor flex flex-col text-kharnisa-imam-rosegold max-w-2xl mt-6">
              {error && (
                <div className="mb-2 font-body text-red-800">{error}</div>
              )}
              {succcess && (
                <div className="mb-2 font-body text-green-800">{succcess}</div>
              )}
              <input
                className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
                spellCheck="false"
                placeholder="Name"
                value={name}
                onChange={setName}
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
              <textarea
                className="bg-gray-100 p-2 h-56 border border-gray-300 outline-none font-body"
                spellCheck="false"
                value={message}
                onChange={setMessage}
                placeholder="Describe your wish here"
              />

              <div className="buttons flex">
                <button
                  type="submit"
                  className="btn border py-2 px-4 font-body cursor-pointer text-gray-50 ml-auto mt-4 bg-kharnisa-imam-rosegold flex justify-center items-center"
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
    </div>
  );
};

export default RSVP;
