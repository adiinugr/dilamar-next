import React from "react";
import { AiOutlineComment, AiOutlineLoading3Quarters } from "react-icons/ai";

export const GuestBookOne = ({
  comments,
  name,
  setName,
  comment,
  setComment,
  error,
  handleSubmit,
  isLoading,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  writeYourWishBorder,
  wishBgColor,
  wishTextColor,
  wishBorder,
  inputTextColor,
  inputBgColor = "bg-gray-100",
  inputBorder = "border border-gray-300",
  buttonTextColor,
  buttonBgColor,
}) => {
  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="flex flex-col items-center justify-center py-6">
        <div
          className={`${writeYourWishBorder} py-1 px-4 flex items-center justify-center font-body cursor-pointer`}
        >
          <AiOutlineComment size={20} />
          <div className="ml-2">Write your wish</div>
        </div>
      </div>
      <div
        className={`${wishBgColor} ${wishTextColor} ${wishBorder} w-4/5 py-4 mx-auto`}
      >
        {comments.map((comment, index) => (
          <div key={index} className="mb-3">
            <p className="font-body font-semibold">{comment.name}</p>
            <p className="font-body">{comment.message}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <div className="editor flex flex-col max-w-2xl mt-6">
            {error && (
              <div className="mb-2 font-body text-red-800">
                Harus diisi semua ya!
              </div>
            )}
            <input
              className={`${inputTextColor} ${inputBgColor} ${inputBorder} p-2 mb-4 outline-none font-body`}
              spellCheck="false"
              placeholder="Name"
              value={name}
              onChange={setName}
              type="text"
            />
            <textarea
              className="bg-gray-100 p-3 h-56 border border-gray-300 outline-none font-body"
              spellCheck="false"
              value={comment}
              onChange={setComment}
              placeholder="Describe your wish here"
            />

            <div className="buttons flex">
              <button
                type="submit"
                className={`${buttonTextColor} ${buttonBgColor} btn border py-2 px-4 font-body cursor-pointer ml-auto mt-4 flex justify-center items-center`}
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
      </div>
    </div>
  );
};
