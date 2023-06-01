import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

export default ({quotes, savedQuotes, setSavedQuotes}) => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const updateSavedQuotes = () => {
    const newQuote = savedQuotes.find((existingQuotes) => existingQuotes.id === quotes.id)
    if (!newQuote){
      setSavedQuotes(prev => {
        return [
          ...prev,
          {
            id: quotes.id,
            quote: quotes.quote
          }
        ]
      })
    };
    return savedQuotes;
    
    
  }
 
  const displayModal = () => {
    setIsModalOpen(true)
    updateSavedQuotes()
  }



  return (
        <div className=" md:w-1/2 max-w-4xl mt-5 relative z-10">
          <div className="md:w-96 md:h-64 w-[300px] h-[186px] shadow-custom bg-card-border rounded-xl relative z-30">
              <img src="/images/card-lines/firstcard-up12.svg" alt="" className="absolute top-0 left-0 h-20 md:h-auto" />
              <img src="/images/card-lines/firstcard-up13.svg" alt="" className="absolute top-0 left-0 h-10 md:h-auto" />
              <img src="/images/card-lines/firstcard-down12.svg" alt="" className="absolute bottom-0 right-0 h-10 md:h-auto" />
              <img src="/images/card-lines/firstcard-down13.svg" alt="" className="absolute bottom-0 right-0 h-20 md:h-auto" />
              
              <div className="absolute z-50 bg-white p-9 transform top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 h-[154px] md:h-56 rounded-xl">
                <p  className="font-medium text-sm md:text-lg text-center md:mt-6">{quotes.quote}</p>
                <span className="flex justify-center items-center">
                  <p onClick={displayModal}  className="save-btn font-semibold text-primary-50 text-sm mt-3 md:text-base hover:text-opacity-80 md:mt-5 cursor-pointer">Save Card</p>
                </span>
              </div>
          </div>

          <div className=" absolute shadow-custom rounded-xl left-6 top-5 md:top-4 md:left-20 z-20">
            <div className=" md:w-80 md:h-56 w-[290px] h-[154px] bg-card-border rounded-xl relative">
              <img src="/images/card-lines/secondcard-down12.svg" alt="" className="absolute bottom-0 right-0 h-10 md:h-auto" />
              <img src="/images/card-lines/secondcard-down13.svg" alt="" className="absolute bottom-0 right-0 h-16 md:h-36" />   
            </div>
          </div>
      </div>

    )
}