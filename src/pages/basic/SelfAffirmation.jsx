import React, { useContext, useState } from "react";
import Button from "../../components/common/button";
import { ModalContext } from "../../contexts/ModalContext";
import Modal from '../../components/Modal'

const SelfAffirmation = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const displayModal = () => {
    setIsModalOpen(true)
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
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
        <div className="relative mr-32 -z-10">
          <p className="absolute top-[9rem] mx-[5.25rem]  ">
            {quotes[activeCard]}
          </p>
          <button onClick={displayModal} className=" text-green-600 font-semibold absolute top-[13rem] mx-[13rem]">
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
      <img src="/images/FlipCards.svg" alt="flipcards" />
      
      <Modal>
        <div className="w-96 h-48 bg-white rounded-xl absolute transfrom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50">
          <button onClick={closeModal } className="text-3xl ml-auto absolute right-4 top-2">&times;</button>
          <div className="flex justify-center items-center pt-8">
            <img src="/images/sucessful-icon.svg" alt="" class="w-20" />
          </div>
          <div className="flex flex-col justify-center items-center mt-2">
            <p className="font-semibold text-lg">Self affirmation card saved</p>
            <p className="text-sm text-modal leading-6">
              Self affirmation card added to saved cards
            </p>
          </div>
        </div>
      </Modal> 
    </section>
  );
};

export default SelfAffirmation;
