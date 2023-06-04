import { Link } from "react-router-dom"
import { useState } from "react"
import {testimonialArr} from "../data"

export default function Features() {

    const [id, setId] = useState(0)
    const [testimony, setTestimony] = useState()

    const handleClick = (num) => {
        const testimonial = testimonialArr.find(testimony => testimony.id == num)
        setTestimony(testimonial)
        setId(testimonial.id)
    }
    const classes = 'border-solid border-4 border-white rounded-full scale-150';

    return (
        <section className="bg-primary-60 text-white">
          <div className="py-8 px-4 mx-auto max-w-screen-xl  lg:h-screen lg:py-16 lg:px-6">
            <h2 className="mb-4 text-center text-2xl lg:text-left lg:text-3xl font-bold">Hear from our <span className="font-extrabold">users</span> </h2>
                    
            <div className="grid place-items-center lg:grid-cols-2">
                <div className="testimonial-container relative w-full h-full hidden lg:block"> 
                    <div data-id="8" onClick={() => handleClick(8)} className={`testimonial-profile absolute cursor-pointer top-4 left-12 hover:-translate-y-2 transition-transform ${id === 8 ? classes : ''}`}>
                        <img className="testimonial-img " src="/images/user-8.png" alt="user" />
                    </div>
                    <div data-id="5" onClick={() => handleClick(5)}  className={`testimonial-profile absolute cursor-pointer top-32 left-36 hover:-translate-y-2 transition-transform ${id === 5 ? classes : ''}`}>
                        <img src="/images/user-5.png" alt="user" />
                    </div>
                    <div data-id="4" onClick={() => handleClick(4)}  className={`testimonial-profile absolute cursor-pointer top-24 right-28 hover:-translate-y-2 transition-transform ${id === 4 ? classes : ''}`}>
                        <img src="/images/user-4.png" alt="user" />
                    </div>
                    <div data-id="2" onClick={() => handleClick(2)}  className={`testimonial-profile absolute cursor-pointer top-48 left-72 hover:-translate-y-2 transition-transform ${id === 2 || id === 0 ? classes : ''}`}>
                        <img src="/images/user-2.png" alt="user" />
                    </div>
                    <div data-id="3" onClick={() => handleClick(3)}  className={`testimonial-profile absolute cursor-pointer top-1/2 right-0 hover:-translate-y-2 transition-transform ${id === 3 ? classes : ''}`}>
                        <img src="/images/user-3.png" alt="user" />
                    </div>
                    <div data-id="6" onClick={() => handleClick(6)}  className={`testimonial-profile absolute cursor-pointer top-80 right-32 hover:-translate-y-2 transition-transform ${id === 6 ? classes : ''}`}>
                        <img src="/images/user-6.png" alt="user" />
                    </div>
                    <div data-id="1" onClick={() => handleClick(1)}  className={`testimonial-profile absolute cursor-pointer top-52 left-5 hover:-translate-y-2 transition-transform ${id === 1 ? classes : ''}`}>
                        <img src="/images/user-1.png" alt="user" />
                    </div>
                    <div data-id="7" onClick={() => handleClick(7)}  className={`testimonial-profile absolute cursor-pointer top-80 left-36 hover:-translate-y-2 transition-transform ${id === 7 ? classes : ''}`}>
                      <img src="/images/user-7.png" alt="user" />
                    </div>
                </div>
                    
                <div>
                    <div className="text-center flex flex-col space-y-5 items-center place-self-center max-w-lg">
                        <i className="fa-solid fa-quote-left text-[#52B17C] text-9xl self-start"></i>
                        <div>
                            <h3 className="testimonial-text text-xl font-semibold sm:text-2xl">
                            {id === 0 ? 'I loved using Consuelo, it helped me through my problems and now I’m healed' : testimony.text}
                            </h3>
                                        
                            <footer className="testimonial-name mt-8 text-white">{id === 0 ? 'Grace Alojore' : testimony.name}</footer>
                        </div>
                        <i className="fa-solid fa-quote-right text-[#52B17C] text-9xl self-end"></i>
                    </div>
                </div>
            </div>
                       
          </div>
        </section>
    )
}
  