import { Link } from "react-router-dom"
import { useState } from "react"


export default function Features() {

    const [state, setState] = useState('1')

    const handleClick = (num) => {
        setState(num)
    }
    return (
        <section className="bg-white" id="features">
          <div className="py-8 lg:py-16">
            <h2 className="text-3xl font-bold mb-3 tracking-tight leading-tight text-center md:text-4xl">Our <span className="text-primary-60">amazing</span> features </h2>
            <p className="text-center">...providing solace and comfort to our users at scale.</p>
               
            <div className="mx-auto max-w-screen-2xl py-12">
              <div className="flex justify-between items-center pl-4 lg:pl-24">
                <nav className="features-container flex flex-col border-l-2 border-[#F2F4F7] ">
                  <div data-img="1" onClick={() => setState("1")} className={`features cursor-pointer -ml-px border-l-2 p-4 max-w-lg hover:border-primary-50 ${state === '1' ?  'border-primary-60' : 'border-l-[transparent]'}`}>
                    <p className="font-semibold text-primary-60 mb-2">
                      Self Affirmation
                    </p>
                    <p>Self-affirmations to help you stay motivated everyday.</p>
                  </div>
                         
                  <div data-img="2" onClick={() => setState("2")} className={`features cursor-pointer -ml-px border-l-2 p-4 max-w-lg hover:border-primary-50 ${state === '2' ?  'border-primary-60' : 'border-l-[transparent]'}`}>
                    <p className="font-semibold text-primary-60 mb-2">
                      Mental Health Tips
                    </p>
                    <p>Everyday tips to elevate your mental well-being</p>
                  </div>
                         
                  <div data-img="3" onClick={() => setState("3")} className={`features cursor-pointer -ml-px border-l-2 p-4 max-w-lg hover:border-primary-50 ${state === '3' ?  'border-primary-60' : 'border-l-[transparent]'}`}>
                    <p className="font-semibold text-primary-60 mb-2">
                      Blog Post
                    </p>
                    <p>Our blog features different perspectives and insights on mental health issues and topics.</p>
                  </div>
                         
                  <div data-img="4" onClick={() => setState("4")} className={`features cursor-pointer -ml-px border-l-2 p-4 max-w-lg hover:border-primary-50 ${state === '4' ?  'border-primary-60' : 'border-l-[transparent]'}`}>
                    <p className="font-semibold text-primary-60 mb-2">
                      Community
                    </p>
                    <p>Our community is created to help you Feel. Feel connected, accepted, and supported. Come around the forum every time you feel alone.</p>
                  </div>
                                                  
                              
                </nav>

                <div className="hidden lg:block">
                  <img alt="House" src={`/images/macbook-laptop-${state}.png`} className="max-w-xl features-img"/>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <Link to="/auth" className="inline-flex bg-primary-60 hover:bg-primary-70 text-white justify-center items-center py-3 px-12 text-base text-center rounded-sm">
                Get Started
              </Link> 
            </div>
          </div>
        </section>
    )
}
  