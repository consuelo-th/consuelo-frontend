

export default ({setFlipped}) => {
 const flipCard = () => {
    setFlipped(true)
 }
 return (
    <div class="max-w-4xl mt-5 z-10 relative">
        <div class="md:w-96 md:h-64 w-[300px] h-[186px] bg-card-border shadow-custom rounded-xl p-9 relative z-40 flex justify-center items-center">
            <p onClick={flipCard} class="font-semibold text-primary-50 hover:text-opacity-80 mt-5 cursor-pointer">Flip Cards</p>
            <img src="/images/card-lines/firstcard-up12.svg" alt="" class="absolute top-0 left-0 h-20 md:h-auto" />
            <img src="/images/card-lines/firstcard-up13.svg" alt="" class="absolute top-0 left-0 h-10 md:h-auto" />
            <img src="/images/card-lines/firstcard-down12.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-auto" />
            <img src="/images/card-lines/firstcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-20 md:h-auto" />
        </div>
        <div class="absolute shadow-custom rounded-xl left-6 top-5 md:top-4 md:left-20  z-30">
        <div class="md:w-80 md:h-56 w-[290px] h-[154px] bg-card-border rounded-xl relative">
            <img src="/images/card-lines/secondcard-down12.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-auto" />
            <img src="/images/card-lines/secondcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-16 md:h-36" />   
        </div>
        </div>
        <div class="absolute shadow-custom rounded-xl top-9 left-10 md:top-8 md:left-32">
        <div class="md:w-72 md:h-48 w-[285px] h-[122px] bg-card-border rounded-xl relative">
            <img src="/images/card-lines/thirdcard-down12.svg" alt="" class="absolute bottom-0 right-0  h-6 md:h-auto" />
            <img src="/images/card-lines/thirdcard-down13.svg" alt="" class="absolute bottom-0 right-0 h-10 md:h-32" />
        </div>
        </div>
    </div>

    )
}