export const TitleWithBackground = ({
  title,
  anchorId,
  bgColor = "bg-gray-200",
  textColor = "text-gray-800",
  textSize = "text-4xl",
  fontStyle = "font-display",
  borderColor = "border-gray-800"
}) => {
  return (
    <div
      id={anchorId}
      className={`${bgColor} ${textColor} pt-16 pb-2 flex justify-center`}
    >
      <div
        className={`${textSize} ${fontStyle} py-2 border-t border-b ${borderColor}`}
      >
        {title}
      </div>
    </div>
  )
}

export const TitleH1 = ({
  children,
  textSize = "text-4xl",
  fontStyle = "font-yellowtail"
}) => {
  return (
    <h1
      className={`text-center mb-8 md:mb-16 font-yellowtail text-4xl md:text-5xl ${textSize} ${fontStyle}`}
    >
      {children}
    </h1>
  )
}
