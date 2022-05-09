import { GoBook } from "react-icons/go"
import { Fade } from "react-reveal"

export const QsArrum21 = ({
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
            “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
            untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
            tenteram di samping-Nya dan dijadikan-Nya rasa kasih dan sayang di
            antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan
            Allah bagi kaum yang berpikir.”
          </p>
          <p className="font-medium">(QS. Ar-Rum ayat 21)</p>
        </Fade>
      </div>
    </section>
  )
}

export const Bismillah = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-700"
}) => {
  return (
    <section
      className={`${bgColor} ${textColor} pb-16 px-8 md:px-48 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <Fade bottom>
          <p className="text-center mb-4 text-2xl md:text-4xl">
            بِسْمِ اللهِ الرَّحْمنِ الرَّحِيمِ
          </p>
          <p className="text-lg text-center">
            In the Prayers and love of our parent, they raised us their
            daughter's and son's. Allah SWT unites our hearts to share love,
            hope and life together. We are pleased to announce our wedding :
          </p>
        </Fade>
      </div>
    </section>
  )
}
