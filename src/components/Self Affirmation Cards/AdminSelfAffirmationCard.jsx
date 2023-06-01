
export default ({quote}) => {

  return (
        <div className="mt-5 relative z-10">
            <div className="flex justify-center items-center md:w-96 md:h-64 w-[300px] h-[186px] shadow-custom bg-card-border rounded-xl relative">
                <img src="/images/card-lines/firstcard-up12.svg" alt="" className="absolute top-0 left-0 h-20 w-20 md:h-auto" />
                <img src="/images/card-lines/firstcard-up13.svg" alt="" className="absolute top-0 left-0  h-10 w-40 md:h-auto" />
                <img src="/images/card-lines/firstcard-down12.svg" alt="" className="absolute bottom-0 right-0 h-10 w-36 md:h-auto" />
                <img src="/images/card-lines/firstcard-down13.svg" alt="" className="absolute bottom-0 right-0 h-20 w-16 md:h-auto" />

                <p  className="p-6 font-medium text-sm md:text-lg text-center md:mt-6">{quote}</p>
            </div>
        </div>

    )
}