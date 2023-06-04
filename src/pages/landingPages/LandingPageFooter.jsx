import { Link } from "react-router-dom";
export default function LandingPageFooter() {
  return (

    <>
        <footer className="p-6 lg:px-4 lg:py-16 bg-[#2C6E49] text-white">
            <div className="mx-auto max-w-screen-xl">
                <div className="md:flex md:justify-between pt-6">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Main</h2>
                            <ul className="text-white">
                              <li className="mb-4">
                                   <Link to="/" className="hover:underline">FAQs</Link>
                              </li>
                              <li className="mb-4">
                                   <Link to="/" className="hover:underline">Support</Link>
                              </li>
                              <li className="mb-4">
                                   <Link to="/about" className="hover:underline">About Us</Link>
                              </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-whiteuppercase dark:text-white">Products</h2>
                            <ul className="text-white">
                                <li className="mb-4">
                                    <Link to="/user/login" className="hover:underline ">Login</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#testimonials" className="hover:underline">Testimonials</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#features" className="hover:underline">Features</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="" className="hover:underline">Mission</Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-whiteuppercase dark:text-white">Press</h2>
                            <ul className="text-white">
                                <li className="mb-4">
                                    <Link to="/blog" className="hover:underline">Blog</Link>
                                </li>
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">Terms &amp; Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mb-6 md:mb-0">
                        <div className="text-left lg:text-center sm:text-left md:col-span-4 lg:col-span-2">
                            <p className="text-lg font-medium uppercase">Subscribe to our newsletter</p>
                      
                            <div className="mx-auto mt-8 max-w-md sm:ml-0">
                                <p className="text-center leading-relaxed text-white sm:text-left">
                                   We share positive notes, mental health tips, stories, and
                                   practical advice directly to your inbox.
                                </p>
                      
                                <form className="mt-4">
                                   <div className="flex justify-start items-center font-semibold">
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input className="w-full border-gray-200 px-6 py-3 shadow-sm text-black" type="email" placeholder="Your email address" />
                      
                                    <button className="block bg-primary-100 px-8 py-3 text-white transition max-w-xs" type="submit" >
                                      Subscribe
                                    </button>
                                  </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>

            <div className="mx-auto max-w-screen-xl">

                <hr className="my-6 border-x-white sm:mx-auto lg:my-8" />
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div href="/" className="flex items-center">
                        <img alt="consuelo-logo" src="/images/logo.png" className="mr-3 h-6 sm:h-9" />
                        <h1 className="self-center text-xl font-semibold whitespace-nowrap">Consuelo</h1>
                    </div>
      
                    <span className="text-sm mt-4 md:mt-0 text-white sm:text-center">
                            &copy; 2022 <Link to="/" className="hover:underline">Consuelo</Link>. 
                            All Rights Reserved.
                    </span>
      
                    <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-3xl">
                        <Link to="https://twitter.com/yourconsuelo" target="_blank" className="text-gray-500"> 
                          <i className="fa-brands fa-twitter"></i> 
                        </Link>
                        <Link to="https://instagram.com/yourconsuelo" target="_blank" className="text-gray-500">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                                              
                        <Link to="#" target="_blank" className="text-gray-500" >
                          <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
            </div>        
        </footer>
    </>
  );
}
