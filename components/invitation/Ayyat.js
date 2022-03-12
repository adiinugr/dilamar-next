import { GoBook } from "react-icons/go";
import { Fade } from "react-reveal";

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
  );
};
