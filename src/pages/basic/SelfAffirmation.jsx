import React, { useContext, useState } from "react";
import Button from "../../components/common/button";
import { ModalContext } from "../../contexts/ModalContext";
import Modal from '../../components/Modal'
import SelfAffirmationCardOpen from "../../components/Self Affirmation Cards/SelfAffirmationCardOpen";
import SelfAffirmationCardFlipped from "../../components/Self Affirmation Cards/SelfAffirmationCardFlipped";
import FlippedCards from "../../components/Self Affirmation Cards/FlippedCards";
import { quotes } from "../../data";

const SelfAffirmation = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext)
  const [flipped, setFlipped] = useState(false)
  const closeModal = () => {
    setIsModalOpen(false)
  }

  const [activeCard, setactiveCard] = useState(0);
  const [activeSavedCard, setActiveSavedCard] = useState(0);
  const [savedQuotes, setSavedQuotes] = useState([])

  return (
    <section>
      <p className="pt-5 text-[#595E5B] ml-4 font-semibold">
        Daily affirmation
      </p>
      <div className="flex flex-col  items-center md:items-start lg:items-center lg:flex-row">

        <SelfAffirmationCardOpen quotes={quotes[activeCard]} savedQuotes={savedQuotes} setSavedQuotes={setSavedQuotes} />
        

        <div className="flex justify-center items-center lg:ml-10 mt-6 lg:mt-0 lg:gap-4 lg:w-[30%] max-w-md">
            <img onClick={() => activeCard > 0 ? setactiveCard((prev) => prev - 1) : setactiveCard(quotes.length - 1)} src="/images/LeftSide.svg" alt="image" className="cursor-pointer" />
            <img onClick={() => activeCard < quotes.length - 1 ? setactiveCard((prev) => prev + 1) : setactiveCard(0)} src="/images/RightSide.svg" alt="image" className="cursor-pointer" />

            <p className="ml-10 font-semibold">
              {activeCard + 1} of {quotes.length}
            </p> 
        </div>
      </div>


      {/* Saved Cards */}
      <p className="text-[#595E5B] ml-4 font-semibold pt-11 pb-5">
        Saved cards
      </p>

      {/* Empty Cards */}
      {savedQuotes.length === 0 && 
      <div className="mt-4 empty-cards flex flex-col items-center md:items-start">
          <img src="/images/empty-cards.svg" alt="" className="" />
          <p className="font-medium text-sm mt-3">You currently do not have any saved cards</p>
      </div>}

      {savedQuotes.length > 0 && 
        <>
          <div className="flex flex-col items-center lg:flex-row  max-w-6xl">
            <SelfAffirmationCardFlipped setFlipped={setFlipped} />
            {flipped && <FlippedCards setFlipped={setFlipped} savedQuotes={savedQuotes} activeSavedCard={activeSavedCard} setSavedQuotes={setSavedQuotes} />}
          </div>

          {flipped &&
            <div className="flex justify-center items-center -ml-20 max-w-6xl lg:mt-8">
              <div className="flex items-center ml-10 justify-around lg:w-1/4 max-w-md py-6">
                <div className="flex">
                  <img onClick={() => activeSavedCard > 0 ? setActiveSavedCard((prev) => prev - 1) : setActiveSavedCard(savedQuotes.length - 1)} src="/images/LeftSide.svg" alt="image" className="cursor-pointer" />
                  <img onClick={() => activeSavedCard < savedQuotes.length - 1 ? setActiveSavedCard((prev) => prev + 1) : setActiveSavedCard(0) } src="/images/RightSide.svg" alt="image" className="cursor-pointer" />
                </div>
                <p className="font-bold ml-10 lg:ml-0"> 
                  {activeSavedCard + 1} of {savedQuotes.length}
                </p>
              </div>
            </div>
          }
        
        </>
        
      }



      <Modal>
        <div className="w-96 h-48 bg-white rounded-xl absolute transfrom -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-50">
          <button onClick={closeModal } className="text-3xl ml-auto absolute right-4 top-2">&times;</button>
          <div className="flex justify-center items-center pt-8">
            <img src="/images/sucessful-icon.svg" alt="" className="w-20" />
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
