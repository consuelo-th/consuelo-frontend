// import React from 'react';
// import Button from '../../components/common.jsx/button';

// const SelfAffirmation = () => {
//     return (
//         <div className='px-4 bg-white'>
//             "Basic Self Affirmation"
//         </div>
//      );
// }

// export default SelfAffirmation;

import React, { useState } from "react";
import Button from "../../components/common.jsx/button";

const SelfAffirmation = () => {
  const quotes = [
    "I am a force that the world needs. I belong here.",
    "I am a super-hero that the world needs. I belong here.",
    "I am the help the world needs. I belong here.",
    "I am the liberator that the world needs. I belong here.",
    "I am the hustle that the world needs. I belong here.",
  ];
  const [activeCard, setactiveCard] = useState(0);
  return (
    <section>
      <p className="pt-5 text-[#595E5B] ml-4 font-semibold">
        Daily affirmation
      </p>
      <div className="flex items-center pt-6">
        <div className="relative mr-32  ">
          <p className="absolute top-[9rem] mx-[5.25rem]  ">
            {quotes[activeCard]}
          </p>
          <button className=" text-green-600 font-semibold absolute top-[13rem] mx-[13rem]">
            Save Card
          </button>
          <img src="/images/SelfAffirmationCard.svg" alt="image" />
        </div>
        <img
          onClick={() =>
            activeCard > 0
              ? setactiveCard((prev) => prev - 1)
              : setactiveCard(quotes.length - 1)
          }
          src="/images/LeftSide.svg"
          alt="image"
        />
        <img
          onClick={() =>
            activeCard < quotes.length - 1
              ? setactiveCard((prev) => prev + 1)
              : setactiveCard(0)
          }
          src="/images/RightSide.svg"
          alt="image"
        />

        <p className="ml-20 font-semibold">
          {activeCard + 1} of {quotes.length}
        </p>
      </div>
      <p className="text-[#595E5B] ml-4 font-semibold pt-11 pb-5">
        Saved cards
      </p>
      <img src="/public/images/FlipCards.svg" alt="flipcards" />
    </section>
  );
};

export default SelfAffirmation;
