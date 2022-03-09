import Image from "next/image";
import React from "react";

export const StoryOne = ({
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  firstMeetText,
  firstDateText,
  proposalText,
  firstMeetImagePath = "/images/first-meet.jpg",
  firstDateImagePath = "/images/first-date.jpg",
  proposalImagePath = "/images/the-proposal.jpg"
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} flex flex-col justify-center items-center overflow-hidden`}
    >
      <div className="text-center font-display text-4xl md:text-5xl my-12">
        Our Story
      </div>
      <div className="overflow-x-hidden px-8 md:px-60 pb-10">
        <div
          className="md:w-2/3 mr-auto mb-12 rounded-md flex flex-col items-start justify-between p-6"
          data-aos="fade-right"
        >
          <div className="text-2xl font-medium mb-4 underline">First Meet</div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex-1 mr-8 mt-6 md:mt-0">{firstMeetText}</div>
            <Image
              src={firstMeetImagePath}
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
        <div
          className="md:w-2/3 mb-12 ml-auto rounded-md flex flex-col items-end justify-between p-6"
          data-aos="fade-left"
        >
          <div className="text-2xl font-medium mb-4 underline">First Date</div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Image
              src={firstDateImagePath}
              width={150}
              height={150}
              className="rounded-full"
            />

            <div className="flex-1 ml-8 mt-6 md:mt-0">{firstDateText}</div>
          </div>
        </div>
        <div
          className="md:w-2/3 mr-auto mb-12 rounded-md flex flex-col items-start justify-between p-6"
          data-aos="fade-right"
        >
          <div className="text-2xl font-medium mb-4 underline">
            The Proposal
          </div>
          <div className="flex flex-col-reverse md:flex-row justify-between items-center">
            <div className="flex-1 mr-8 mt-6 md:mt-0">{proposalText}</div>
            <Image
              src={proposalImagePath}
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const StoryTwo = ({
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  children,
  imageOnePath,
  imageTwoPath,
  storyData,
  lineBorderColor = "border-gray-800"
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} relative px-8 py-16 overflow-hidden flex flex-col items-center justify-center`}
    >
      {children}

      <h1 className="mb-8 font-yellowtail text-3xl">Our Story</h1>

      <div className="w-full h-40 relative rounded-lg overflow-hidden">
        <Image
          src={imageOnePath}
          layout="fill"
          objectFit="cover"
          alt="katanikah website undangan pernikahan online"
        />
      </div>

      <div className="relative my-6 w-full">
        <div
          className={`border-2 ${lineBorderColor} top-0 left-7 absolute h-full`}
        />

        <ul className="list-none">
          {storyData.map((story) => (
            <li className="mb-4 flex items-center">
              <div className="self-start mr-4">
                <div className="rounded-full w-14 h-14 relative overflow-hidden">
                  <Image
                    src={story.imagePath}
                    layout="fill"
                    objectFit="cover"
                    alt="katanikah website undangan pernikahan online"
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 text-lg font-semibold">{story.title}</div>
                <div className={`${textColor} text-opacity-60`}>
                  {story.description}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-40 relative rounded-lg overflow-hidden">
        <Image
          src={imageTwoPath}
          layout="fill"
          objectFit="cover"
          alt="katanikah website undangan pernikahan online"
        />
      </div>
    </div>
  );
};
