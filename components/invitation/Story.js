import Image from "next/image";
import React from "react";

const Story = ({
  bgColor = "bg-gray-700",
  textColor = "text-gray-200",
  firstMeetText,
  firstDateText,
  proposalText,
  firstMeetImagePath = "/images/first-meet.jpg",
  firstDateImagePath = "/images/first-date.jpg",
  proposalImagePath = "/images/the-proposal.jpg",
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

export default Story;
