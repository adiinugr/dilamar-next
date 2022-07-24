const { GoBook } = require("react-icons/go")
const { Fade } = require("react-reveal")

const QsAzzariyat49 = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-700"
}) => {
  return (
    <section
      className={`${bgColor} ${textColor} py-16 px-8 md:px-48 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <Fade top>
          <GoBook size={70} className=" mb-4" />
        </Fade>
        <Fade bottom>
          <p className="text-center mb-2 ">
            “Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
            mengingat (kebesaran Allah)”
          </p>
          <p className="font-medium">(QS. Az-Zariyat ayat 49)</p>
        </Fade>
      </div>
    </section>
  )
}

export default QsAzzariyat49
