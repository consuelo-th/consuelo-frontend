import { useState } from "react";
import { Link } from "react-router-dom";
import  ReactDOM  from 'react-dom'


export default function LandingPageHeader() {
  const [open, setOpen] = useState(false);
  // const [clickOverlay, setClickOverlay] = useState(false);
   

  const handleClick = () => {
    setOpen((prev => !prev))
  }
  const closeHamburger = () => {
    if(open){
      setOpen(false)
    }
  }
  const Backdrop = () => {
    return (
      <div onClick={closeHamburger} className={`${open ? 'block' : 'hidden'}  fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 transition-all duration-500 ease-in-out z-3`}></div>            
    )
  }
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, document.querySelector('body'))}
      <div className="bg-gradient-to-r from-[#46A972] to-[#225A3B] text-white py-5">
        <header className="bg-gradient-to-r from-[#46A972] to-[#225A3B]">
          <nav className="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <Link to="/" className="flex items-center">
                <img
                  alt="consuelo-logo"
                  src="/images/logo.png"
                  className="mr-3 h-6 sm:h-9"
                />
                <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Consuelo
                </h1>
              </Link>

              <div onClick={handleClick}  className={`md:hidden w-[35px] h-[24px] flex flex-col justify-center cursor-pointer ${open ? 'fixed right-4 z-50' : ''}`}>
                <div className={`mb-1  w-6 h-[2px] transition-all duration-150 ease-in bg-white ${open ? 'rotate-45 translate-y-1' : ''}`}></div>
                <div className={`w-6 h-[2px] transition-all duration-150 ease-in bg-white ${open ? 'opacity-0' : ''}`}></div>
                <div className={`mt-1 w-6 h-[2px] transition-all duration-150 ease-in bg-white ${open ? '-rotate-45 -translate-y-2' : ''}`}></div>
              </div>

              {/* Mobile Nav */}
              <div
                className={`md:hidden fixed z-40 left-0 right-0 bottom-0 w-1/2 h-[100vh] transition-all duration-500 translate-x-[200%] md:-translate-x-0 md:static md:h-auto justify-between items-center md:w-auto bg-[#225A3B] md:bg-opacity-0 ${open ? 'translate-x-full' : ''}`}
                id="mobile-menu-2">
                <ul className="flex flex-col mt-20 font-medium md:flex-row items-center md:space-x-8 md:mt-0">
                  <li>
                    <Link
                      to={location.pathname === '/' ? "#features" : '/'}
                      onClick={closeHamburger}
                      className="features__link block hover:underline pt-6 md:pt-0">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" onClick={closeHamburger} className="block hover:underline pt-6 md:pt-0">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" onClick={closeHamburger} className="block hover:underline pt-6 md:pt-0">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auth"
                      onClick={closeHamburger}
                      className="block bg-white text-primary-60 justify-center items-center py-2 px-3 text-base font-semibold text-center rounded-sm mt-6 md:mt-0">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>

              {/* desktop nav */}
              <div
                className="hidden navbar md:static md:h-auto justify-between items-center md:flex md:w-auto bg-[#225A3B] md:bg-opacity-0"
                id="mobile-menu-2">
                <ul className="flex font-medium flex-row items-center space-x-8 ">
                  <li>
                    <a
                      href={location.pathname === '/' ? "/#features" : '/'}
                      className="features__link block hover:underline pt-6 md:pt-0">
                      Features
                    </a>
                  </li>
                  <li>
                    <Link to="/about" className="block hover:underline pt-6 md:pt-0">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" className="block hover:underline pt-6 md:pt-0">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auth"
                      className="block bg-white text-primary-60 justify-center items-center py-2 px-3 text-base font-semibold text-center rounded-sm mt-6 md:mt-0">
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>

            </div>
          </nav>
        </header>
      </div>
    </>
  );
}
