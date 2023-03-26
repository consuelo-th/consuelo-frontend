import React, { useState } from "react";
import { userHomeData, mentalHealthTips } from "../../data";

const MentalHealthTips = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [clickedId, setClickedId] = useState(null);
    
    const handleCardClick = (id) => {
      setIsClicked(true);
      setClickedId(id);
    };
    
    const handleBackClick = () => {
      setIsClicked(false);
      setClickedId(null);
    };
    
    if (isClicked) {
      const selectedIssue = mentalHealthTips.find((issue) => issue.id === clickedId);
      return (
        <div className="px-4" id="main">
          <div className=" space-y-8 w-5/6">
            <div className="cursor-pointer flex space-x-2 " onClick={handleBackClick}>
            <img src="/images/arrow-left.svg" /><p>Back</p>
            </div>
            <h2 className=" text-xl font-semibold">{selectedIssue.title}</h2>
            <p>{selectedIssue.descripton}</p>
    
            <h2 className=" text-xl font-semibold">Tips on {selectedIssue.title}</h2>
            <div className=" space-y-6">
              {Object.values(selectedIssue.tips).map((tipText) => (
                <div className="flex" key={tipText}>
                  <img src="/images/bullet-point.svg"  className=" h-fit" />
                  <p className=" ml-3" key={tipText}>
                    {tipText}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="px-4" id="main">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {userHomeData.map((tips) => (
            <article
              className="tips-card max-w-md mx-auto bg-white mt-4 shadow-lg cursor-pointer border rounded-md duration-300 hover:shadow-sm"
              key={tips.id}
              onClick={() => handleCardClick(tips.id)}
            >
              <img
                className="object-cover w-full rounded-t-lg  h-auto "
                src={tips.image}
                alt={tips.title}
              />
              <div className=" p-4">
                <h2 className=" font-semibold text-xl">{tips.title}</h2>
                <p className=" text-helper text-base">{tips.descripton}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    );
    
};

export default MentalHealthTips;
