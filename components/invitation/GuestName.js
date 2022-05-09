import { GoBook } from "react-icons/go"
import { Fade } from "react-reveal"

export const GuestName = ({
  namaTamu,
  bgColor = "bg-gray-200",
  textColor = "text-gray-700"
}) => {
  return (
    <section
      className={`${bgColor} ${textColor} py-16 px-8 md:px-48 flex flex-col items-center justify-center overflow-hidden`}
    >
      <div className="flex flex-col items-center justify-center">
        <Fade bottom>
          <p className="text-center mb-2 font-yellowtail text-4xl">
            Dear {namaTamu}
          </p>
          <p className="font-medium text-lg">
            You are invited to our wedding &#10084;
          </p>
        </Fade>
      </div>
    </section>
  )
}
