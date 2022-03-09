import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Form({
  handleSubmit,
  name,
  setName,
  comment,
  setComment,
  isLoading,
  error,
  inputTextColor,
  inputBgColor,
  inputBorder,
  buttonTextColor,
  buttonBgColor
}) {
  return (
    <form className="relative" onSubmit={handleSubmit}>
      <div className="mt-6">
        {error && (
          <div className="mb-4  text-red-800">Harus diisi semua ya!</div>
        )}
        <input
          className={`${inputTextColor} ${inputBgColor} ${inputBorder} w-full p-2 mb-4 outline-none `}
          spellCheck="false"
          placeholder="Name"
          value={name}
          onChange={setName}
          type="text"
        />
        <textarea
          className={`${inputTextColor} ${inputBgColor} ${inputBorder} w-full h-44 p-2 mb-4 outline-none `}
          spellCheck="false"
          value={comment}
          onChange={setComment}
          placeholder="Describe your wish here"
        />

        <div className="buttons flex">
          <button
            type="submit"
            className={`${buttonTextColor} ${buttonBgColor} btn border py-2 px-4 cursor-pointer ml-auto mt-4 flex justify-center items-center`}
          >
            {isLoading && (
              <div className="animate-spin mr-3">
                <AiOutlineLoading3Quarters />
              </div>
            )}
            Post Comment
          </button>
        </div>
      </div>
    </form>
  );
}

export default Form;
