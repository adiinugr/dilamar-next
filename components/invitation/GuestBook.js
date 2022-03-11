import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import {
  AiOutlineComment,
  AiOutlineLoading3Quarters,
  AiOutlineClose,
  AiFillCheckCircle
} from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import Form from "./parts/Form";

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
  buttonTextColor = "text-gray-100",
  buttonBgColor = "bg-gray-800"
}) => {
  return (
    <div className={`${bgColor} ${textColor}`}>
      <div className="flex flex-col items-center justify-center py-6">
        <ScrollLink to="comment-form" smooth={true} duration={500}>
          <div
            className={`${writeYourWishBorder} py-1 px-4 flex items-center justify-center  cursor-pointer`}
          >
            <AiOutlineComment size={20} />
            <div className="ml-2">Write your wish</div>
          </div>
        </ScrollLink>
      </div>
      <div
        className={`${wishBgColor} ${wishTextColor} ${wishBorder} w-4/5 py-4 mx-auto`}
      >
        {comments.map((comment, index) => (
          <div key={index} className="mb-3">
            <p className=" font-semibold">{comment.name}</p>
            <p className="">{comment.message}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <div
            id="comment-form"
            className="editor flex flex-col max-w-2xl mt-6"
          >
            {error && (
              <div className="mb-2  text-red-800">Harus diisi semua ya!</div>
            )}
            <input
              className={`${inputTextColor} ${inputBgColor} ${inputBorder} p-2 mb-4 outline-none `}
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

export const GuestBookWithPopup = ({
  comments,
  name,
  setName,
  comment,
  setComment,
  error,
  setError,
  success,
  handleSubmit,
  isLoading,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  bgHorizontalLine = "bg-gray-200",
  writeYourWishClassname,
  wishBgColor,
  wishTextColor,
  wishBorder,
  inputTextColor,
  inputBgColor = "bg-gray-100",
  inputBorder = "border border-gray-300",
  buttonTextColor = "text-gray-100",
  buttonBgColor = "bg-gray-800",
  commentDisable,
  children
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onCloseModal = () => {
    setIsOpenModal(false);
    setError;
  };

  return (
    <div
      className={`${bgColor} ${textColor} relative max-w-2xl m-auto overflow-hidden py-16 px-8`}
    >
      {children}

      <Dialog
        className="fixed z-10 inset-0 overflow-y-auto"
        open={isOpenModal}
        onClose={onCloseModal}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="relative bg-white rounded max-w-sm mx-auto px-8 py-10">
            <div
              onClick={onCloseModal}
              className="absolute top-4 cursor-pointer right-4 bg-gray-300 p-2 rounded-md"
            >
              <AiOutlineClose />
            </div>
            {success ? (
              <div className="p-6 ">
                <div className="mb-4">
                  <AiFillCheckCircle
                    size={75}
                    className="text-green-500 m-auto"
                  />
                </div>
                <p>{success}</p>
              </div>
            ) : (
              <Form
                name={name}
                setName={setName}
                comment={comment}
                setComment={setComment}
                error={error}
                handleSubmit={handleSubmit}
                isLoading={isLoading}
                inputTextColor={inputTextColor}
                inputBgColor={inputBgColor}
                inputBorder={inputBorder}
                buttonTextColor={buttonTextColor}
                buttonBgColor={buttonBgColor}
              />
            )}
          </div>
        </div>
      </Dialog>

      <div className="flex flex-col items-center justify-center mb-8">
        <div className="font-yellowtail text-4xl">Guest Book</div>
      </div>
      <div
        onClick={commentDisable ? null : () => setIsOpenModal(true)}
        className={`${writeYourWishClassname} py-2 px-4 flex items-center w-auto justify-center cursor-pointer`}
      >
        <AiOutlineComment size={20} />
        <div className="ml-2">Write your wish</div>
      </div>
      <hr className={`${bgHorizontalLine} h-1 my-8`} />
      <div className={`${wishBgColor} ${wishTextColor} ${wishBorder}mx-auto`}>
        {comments.map((comment, index) => (
          <div key={index} className="mb-3">
            <p className="font-bold">{comment.name}</p>
            <p>{comment.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
