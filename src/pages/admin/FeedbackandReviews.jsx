import React from "react";
import { Navigate } from "react-router-dom";
import { FeedbackData } from "../../data";
import user from "../../services/user";

const FeedBackandReviews = () => {
  
  if(!user.isAdmin) {
    return <Navigate to="/" />
  }

  return (
    <div className="h-[50rem] bg-white rounded p-5">
      <h3 className=" font-semibold">Feedback & Reviews </h3>
      <div>
        {FeedbackData.map((item, itemIndex) => (
          <div className="h-[12rem]  rounded p-4 shadow-md mt-7">
            <div className="flex ">
              <div className="w-full  flex items-center gap-3 ">
                <img
                  src={item.image}
                  alt="Profile picture"
                  className="rounded-full w-11 h-11"
                  key={itemIndex}
                />
                <p className="font-semibold">{item.userName}</p>
              </div>
              <button>...</button>
            </div>
            <div className="pl-14 pr-10 pt-5 flex-col">
              <p>{item.description}</p>
              <p className="mt-5 text-[#6B6B6B]">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackandReviews;
