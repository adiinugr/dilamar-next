import React from "react";
import { AiOutlineComment, AiOutlineLoading3Quarters } from "react-icons/ai";

const GuestBook = ({
  comments,
  name,
  setName,
  comment,
  setComment,
  error,
  handleSubmit,
  isLoading,
  customColor,
  buttonCustomColor,
}) => {
  const containerClassName = () =>
    customColor ? `${customColor}` : "bg-gray-300";

  const buttonClassName = () =>
    buttonCustomColor
      ? `${buttonCustomColor} btn border py-2 px-4 font-body cursor-pointer ml-auto mt-4 flex justify-center items-center`
      : "btn border py-2 px-4 font-body cursor-pointer text-gray-200 ml-auto mt-4 bg-gray-700 flex justify-center items-center";

  return (
    <div className={containerClassName()}>
      <div className="flex flex-col items-center justify-center py-6">
        <div className="font-display text-4xl mb-4">Guest Book</div>
        <div className="border-nurul-gold border-2 py-1 px-4 flex items-center justify-center font-body cursor-pointer">
          <AiOutlineComment size={20} />
          <div className="ml-2">Write your wish</div>
        </div>
      </div>
      <div className="w-4/5 border-nurul-gold border-t-2 py-4 text-nurul-gold mx-auto">
        {comments.map((comment, index) => (
          <div key={index} className="mb-2">
            <p className="font-body font-semibold mb-1">{comment.name}</p>
            <p className="font-body">{comment.message}</p>
          </div>
        ))}
        <form onSubmit={handleSubmit}>
          <div className="editor flex flex-col text-nurul-gold max-w-2xl mt-6">
            {error && (
              <div className="mb-2 font-body text-red-800">
                Harus diisi semua ya!
              </div>
            )}
            <input
              className="bg-gray-100 border border-gray-300 p-2 mb-4 outline-none font-body"
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
              <button type="submit" className={buttonClassName()}>
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

export default GuestBook;
