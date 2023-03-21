import React from "react";
import Button from "../../components/common.jsx/button";

const SelfAffirmation = () => {
  return (
    <div className="px-4 bg-white">
      <div className="flex justify-between items-center py-4">
        <h1 className="font-bold text-primary-110">Self Affirmation</h1>
        <Button size="" variant="light">
          New Post
        </Button>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-primary-110 mb-2">This week</h2>
        <div className="flex justify-between items-center gap-2">
          <div className="h-full bg-affirmation-bg p-8 rounded relative">
            <div className="relative border-2">
              <div className="w-36 h-36 border-2 border-primary-70 rounded-full absolute -top-20 -left-24">
                1
              </div>
              <div className="w-36 h-36 border-2 border-primary-70 rounded-full absolute -top-32 -left-10">
                2
              </div>
            </div>
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-primary-110 mb-2">Last week</h2>
        <div className="flex justify-between items-center gap-2">
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="font-bold text-primary-110 mb-2">Last month</h2>
        <div className="flex justify-between items-center gap-2">
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
          <div className="h-full bg-affirmation-bg p-8 rounded">
            <p className="leading-relaxed mb-6">
              Synth chartreuse iPhone lomo cray raw denim brunch everyday carry
              neutra before they sold out fixie 90's microdosing. Tacos
              pinterest fanny pack venmo, post-ironic heirloom try-hard pabst
              authentic iceland.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfAffirmation;

// import React, { useState } from "react";

// const SelfAffirmation = () => {
//   const quotes = [
//     "I am a force that the world needs. I belong here.",
//     "I am a aisha that the world needs. I belong here.",
//     "I am a task the world needs. I belong here.",
//     "I am a musa that the world needs. I belong here.",
//     "I am a awwal that the world needs. I belong here.",
//   ];
//   const [activeCard, setactiveCard] = useState(0);
//   return (
//     <section>
//       <div className="flex items-center">
//         <div className="relative mr-32">
//           <p className="absolute top-[5.9rem] mx-[5.25rem] ">
//             {quotes[activeCard]}
//           </p>
//           <img src="/images/Card.svg" alt="image" />
//         </div>
//         <img
//           onClick={() =>
//             activeCard > 0
//               ? setactiveCard((prev) => prev - 1)
//               : setactiveCard(quotes.length - 1)
//           }
//           src="/images/LeftSide.svg"
//           alt="image"
//         />
//         <img
//           onClick={() =>
//             activeCard < quotes.length - 1
//               ? setactiveCard((prev) => prev + 1)
//               : setactiveCard(0)
//           }
//           src="/images/RightSide.svg"
//           alt="image"
//         />

//         <p className="ml-20">
//           {activeCard + 1} 0f {quotes.length}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default SelfAffirmation;
