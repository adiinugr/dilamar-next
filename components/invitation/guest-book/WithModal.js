import { Dialog } from "@headlessui/react"
import { useState } from "react"
import {
  AiFillCheckCircle,
  AiOutlineClose,
  AiOutlineComment
} from "react-icons/ai"
import { Fade } from "react-reveal"
import Form from "../parts/Form"

const WithModal = ({
  title = "Guest Book",
  buttonTitle = "Write your wish",
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
  commentBorder,
  padding,
  commentDisable,
  children
}) => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  const onCloseModal = () => {
    setIsOpenModal(false)
    setError
  }

  return (
    <div
      className={`${bgColor} ${textColor} relative py-16 px-8 md:px-16 md:py-16 ${padding}`}
    >
      {children}

      <div className="max-w-2xl m-auto">
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

        <Fade bottom>
          <h1 className="text-center font-honey-carrot text-5xl mb-8">
            {title}
          </h1>
          <div
            onClick={commentDisable ? null : () => setIsOpenModal(true)}
            className={`${writeYourWishClassname} py-2 px-4 flex items-center w-auto justify-center cursor-pointer rounded-md`}
          >
            <AiOutlineComment size={20} />
            <div className="ml-2">{buttonTitle}</div>
          </div>
          <hr className={`${bgHorizontalLine} h-1 my-8`} />
        </Fade>
        <div className={`${wishBgColor} ${wishTextColor} ${wishBorder}mx-auto`}>
          {comments.map((comment, index) => (
            <div key={index} className={`mb-3 ${commentBorder}`}>
              <p className="font-bold">{comment.name}</p>
              <p>{comment.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WithModal
