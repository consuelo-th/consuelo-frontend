import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

export default ({savedQuotes, setFlipped, activeSavedCard, setSavedQuotes}) => {

  const updateSavedQuotes = () => {
    const updatedQuotes = savedQuotes.filter((existingQuote) => existingQuote.id !== savedQuotes[activeSavedCard].id);   
    setSavedQuotes(updatedQuotes)
    if(savedQuotes.length === 1){
        setFlipped(false)
    }
  }
 
  return (
    <div class="max-w-4xl mt-5 lg:ml-48 relative z-10">
        <div class="md:w-96 md:h-64 w-[300px] h-[186px] shadow-custom bg-card-border rounded-xl relative z-40">
            <img src="/images/card-lines/firstcard-up12.svg" alt="" class="absolute top-0 left-0 h-20 md:h-auto" />
            <img src="/images/card-lines/firstcard-up13.svg" alt="" class="absolute top-0 left-0 h-10 md:h-auto" />
            <img src="/images/card-lines/firstcard-down12.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-auto" />
            <img src="/images/card-lines/firstcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-20 md:h-auto" />
            <div class="absolute z-50 bg-white p-9 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-[154px] md:h-56 rounded-xl">
            <p  class="font-medium text-sm md:text-lg text-center md:mt-6">{savedQuotes[activeSavedCard].quote}</p>
            <span class="flex justify-center items-center">
                <p onClick={updateSavedQuotes} class="font-semibold text-semantics hover:text-opacity-80 text-sm text-[#840B0B] md:text-base mt-3 md:mt-5 cursor-pointer">Unsave Card</p>
            </span>
            </div>
        </div>
        <div class="absolute shadow-custom rounded-xl left-6 top-5 md:top-4 md:left-20 z-30">
        <div class="md:w-80 md:h-56 w-[290px] h-[154px] bg-card-border rounded-xl relative">
            <img src="/images/card-lines/secondcard-down12.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-auto" />
            <img src="/images/card-lines/secondcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-16 md:h-36" />   
        </div>
        </div>
        <div class="absolute shadow-custom rounded-xl top-9 left-10 md:top-8 md:left-32">
        <div class="md:w-72 md:h-48 w-[285px] h-[122px] bg-card-border rounded-xl relative">
            <img src="/images/card-lines/thirdcard-down12.svg" alt="" class="absolute bottom-0 right-0 h-6 md:h-auto" />
            <img src="/images/card-lines/thirdcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-32" />
        </div>
        </div>
    </div>

    )
}