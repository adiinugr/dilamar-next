import { GoBook } from "react-icons/go";

const QsArrum = () => {
  return (
    <div className="bg-suta-gunmetal py-16 flex flex-col items-center justify-center overflow-hidden">
      <div
        data-aos="zoom-in"
        className="w-3/4 flex flex-col items-center justify-center"
      >
        <GoBook size={80} className="text-gray-300 mb-4" />
        <p className="text-center text-gray-300 mb-2 ">
          “Dan di antara tanda-tanda kekuasaan Allah ialah diciptakan-Nya
          untukmu pasangan hidup dari jenismu sendiri supaya kamu merasa
          tenteram di samping-Nya dan dijadikan-Nya rasa kasih dan sayang di
          antara kamu. Sesungguhnya yang demikian itu menjadi bukti kekuasaan
          Allah bagi kaum yang berpikir.”
        </p>
        <p className="text-gray-300 font-medium">(QS. Ar-Rum ayat 21)</p>
      </div>
    </div>
  );
};

export default QsArrum;
