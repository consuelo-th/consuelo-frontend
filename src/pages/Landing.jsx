import Article from "../components/Article";
import Team from "../components/Team";
import Features from "../components/Features";
import Testimonial from "../components/Testimonial";
import { Link } from "react-router-dom";
export default ()  => {
    return (
      <>

        <div className="bg-gradient-to-r from-[#46A972] to-[#225A3B] text-white py-5">
          <section className="px-6 ">
            <div className="grid py-10 mx-auto max-w-screen-xl text-center lg:text-left lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="place-self-center mx-auto lg:col-span-7">
                <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl">Affordable mental healthcare for everyone</h1>
                <p className="mb-6 max-w-2xl font-normal text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Your go-to solution to help improve your mental health and growth.</p>
                          
                <Link to="/auth" className="inline-flex bg-white text-primary-60 justify-center items-center py-3 px-6 text-base font-semibold text-center rounded-md">
                  Get Started
                </Link> 
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-end">
                <div className="max-w-md">
                  <img src="/images/mental-health-bro.png" alt="mockup" className="-ml-10"/> 
                </div>
              </div>                
            </div>
          </section>
        </div>
            

        <Features />

                
        {/* <!-- Advice Word --> */}
        <section className="bg-[#2C6E49] text-white">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center" >
            <div className="mx-auto text-center">
              <h1 className="max-w-4xl mx-auto font-extrabold text-xl lg:text-4xl">
                We believe in healthy mental wellness, <br/> and the need to continually break the stigmas.
              </h1>
        
              <p className="mt-4 sm:text-xl sm:leading-relaxed">
                Our goal is to help you improve your health and happiness. We're dedicated to walking this path with you.
              </p>
        
            </div>
          </div>
        </section>

        <Team />

        <Testimonial />

        <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <h2 className="mb-4 text-4xl font-bold ">Read Our Latest</h2>
            <Article />
          </div>
        </section>
      </>
    );
}
