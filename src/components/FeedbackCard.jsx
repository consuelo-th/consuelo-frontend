import React from "react";

const FeedbackCard = (image, userName, description, date) => {
  return (
    <div className="h-[15rem]  rounded p-4 shadow-md mt-7">
      <div className="flex ">
        <div className="w-full  flex items-center gap-3 ">
          <img
            src={image}
            alt="Profile picture"
            className="rounded-full w-11 h-11"
          />
          <p className="font-medium">{userName}</p>
        </div>
        <button>...</button>
      </div>
      <div className="pl-14 pr-10 pt-5 flex-col">
        <p>{description}</p>
        <p className="mt-5 text-[#6B6B6B]">{date}</p>
      </div>
    </div>
  );
};

export default FeedbackCard;
