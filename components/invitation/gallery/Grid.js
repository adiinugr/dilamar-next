import Image from "next/image"
import { Fade } from "react-reveal"

const Grid = ({
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  imageData,
  height,
  width,
  numberOfGridCols
}) => {
  const gridColsClassName = () => {
    if (numberOfGridCols === 2) {
      return "grid grid-cols-1 md:grid-cols-2 gap-4 relative mt-4"
    } else if (numberOfGridCols === 3) {
      return "grid grid-cols-1 md:grid-cols-3 gap-2 relative mt-4"
    }
  }

  return (
    <div className={`${bgColor} ${textColor} flex justify-center items-center`}>
      <div className="flex flex-col py-8 md:py-10 px-6 md:px-44">
        <Fade bottom>
          <div className="text-center font-honey-carrot text-5xl md:text-5xl mb-6">
            Moment Kebersamaan
          </div>
          <p className="text-center">
            Merajut mimpi menuju sakinah, mawadah, warohmah.
          </p>
        </Fade>
        <div className={gridColsClassName()}>
          {imageData.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              height={height}
              width={width}
              objectFit="cover"
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grid
