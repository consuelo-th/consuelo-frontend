import { useState } from "react";

export default () => {
  //     const [state, setState] = useState(false)

  //   // Replace javascript:void(0) path with your path
  //   const navigation = [
  //       { title: "Customers", path: "" },
  //       { title: "Careers", path: "" },
  //       { title: "Guides", path: "" },
  //       { title: "Partners", path: "" }
  //   ]

  return (
    <>
      <div class="bg-gradient-to-r from-[#46A972] to-[#225A3B] text-white py-5">
        <header>
          <nav class="border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <a href="/" class="flex items-center">
                <img
                  alt="consuelo-logo"
                  src="/images/logo.png"
                  class="mr-3 h-6 sm:h-9"
                />
                <h1 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Consuelo
                </h1>
              </a>
              <div class="flex items-center">
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    class="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div
                class="hidden justify-between items-center w-full lg:flex lg:w-auto"
                id="mobile-menu-2"
              >
                <ul class="flex flex-col mt-4 font-medium lg:flex-row items-center lg:space-x-8 lg:mt-0">
                  <li>
                    <a
                      href="/#features"
                      class="features__link block hover:underline"
                    >
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/about" class="block hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/blog" class="block hover:underline">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/user/login"
                      class="block bg-white text-primary-60 justify-center items-center py-2 px-3 text-base font-semibold text-center rounded-sm"
                    >
                      Sign Up
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>

      {/* <!-- Article --> */}
      <section class="bg-white">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="text-center">
            <h1 class="mb-3 lg:mb-8 text-xl font-bold leading-none md:text-2xl xl:text-5xl md:max-w-md lg:max-w-3xl mx-auto">
              BUSTING 4 COMMON MENTAL ILLNESS MYTHS + FACTS{" "}
            </h1>
            <p class="text-body mb-3 lg:mb-8">Hussy Ameen - Nov 1, 2022</p>
          </div>
          <div class="my-4">
            <img src="/images/mental-health.png " alt="mental-health" />
          </div>
          <article class="text-justify mx-auto lg:mx-0 w-[96%] text-lg lg:text-[1.25rem] leading-8 mt-8">
            <p>
              To begin with, suicidal thoughts are these gentle whispers that
              clog your mind leaving you almost helpless. Hey! not to worry, we
              have highlighted critical steps you can take to deal with these
              thoughts. According to the Centers for Disease Control and
              Prevention (CDC) WISQARS, suicide is the second leading cause of
              death among individuals between the ages of 10–14 and 25–34.
              Shocking right? It even ranks higher than accidents. A very
              popular myth is that people who have suicidal thoughts are
              attention seekers. Nothing can be farther from the truth than
              this. To begin with, suicidal thoughts are these gentle whispers
              that clog your mind leaving you almost helpless. Hey! not to
              worry, we have highlighted critical steps you can take to deal
              with these thoughts. According to the Centers for Disease Control
              and Prevention (CDC) WISQARS, suicide is the second leading cause
              of death among individuals between the ages of 10–14 and 25–34.
              Shocking right? It even ranks higher than accidents. A very
              popular myth is that people who have suicidal thoughts are
              attention seekers. Nothing can be farther from the truth than
              this.
            </p>
          </article>
        </div>
      </section>

      {/* <!-- Blog --> */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 class="mb-4 text-4xl font-bold ">Read Our Latest</h2>

          <div class="grid gap-4 lg:grid-cols-3">
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="blog img"
                src="/images/blog-smile.png"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <a href="/blog">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    Smiling through the hardship
                  </h3>
                </a>

                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi olore sed nulla
                  ipsum eveniet corporis quidem,lpa eius atque dignissimos.
                  Molestias explicabo corporis voluptatem?
                </p>

                <p class="block text-sm text-gray-500 mt-2">
                  {" "}
                  blog / 3 mins read
                </p>
              </div>
            </article>

            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="blog img"
                src="/images/blog-smile.png"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <a href="/blog">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    Smiling through the hardship
                  </h3>
                </a>

                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi olore sed nulla
                  ipsum eveniet corporis quidem,lpa eius atque dignissimos.
                  Molestias explicabo corporis voluptatem?
                </p>

                <p class="block text-sm text-gray-500 mt-2">
                  {" "}
                  blog / 3 mins read
                </p>
              </div>
            </article>

            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
              <img
                alt="blog img"
                src="/images/blog-smile.png"
                class="h-56 w-full object-cover"
              />

              <div class="bg-white p-4 sm:p-6">
                <a href="/blog">
                  <h3 class="mt-0.5 text-lg text-gray-900">
                    Smiling through the hardship
                  </h3>
                </a>

                <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Recusandae dolores, possimus pariatur animi olore sed nulla
                  ipsum eveniet corporis quidem,lpa eius atque dignissimos.
                  Molestias explicabo corporis voluptatem?
                </p>

                <p class="block text-sm text-gray-500 mt-2">
                  {" "}
                  blog / 3 mins read
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer class="p-6 lg:px-4 lg:py-16 bg-[#2C6E49] text-white">
        <div class="mx-auto max-w-screen-xl">
          <div class="md:flex md:justify-between">
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase">
                  Main
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      FAQs
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/" class="hover:underline">
                      Support
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/about" class="hover:underline">
                      About Us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Products
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="/user/login" class="hover:underline ">
                      Login
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/#testimonials" class="hover:underline">
                      Testimonials
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="/#features" class="hover:underline">
                      Features
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="" class="hover:underline">
                      Mission
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Press
                </h2>
                <ul class="text-gray-600 dark:text-gray-400">
                  <li class="mb-4">
                    <a href="/blog" class="hover:underline">
                      Blog
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="#" class="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="mb-6 md:mb-0">
              <div class="text-left lg:text-center sm:text-left md:col-span-4 lg:col-span-2">
                <p class="text-lg font-medium uppercase">
                  Subscribe to our newsletter
                </p>

                <div class="mx-auto mt-8 max-w-md sm:ml-0">
                  <p class="text-center leading-relaxed text-gray-500 sm:text-left">
                    We share positive notes, mental health tips, stories, and
                    practical advice directly to your inbox.
                  </p>

                  <form class="mt-4">
                    <div class="flex justify-start items-center font-semibold">
                      <label for="email" class="sr-only">
                        Email
                      </label>
                      <input
                        class="w-full border-gray-200 px-6 py-3 shadow-sm text-black"
                        type="email"
                        placeholder="Your email address"
                      />

                      <button
                        class="block bg-primary-100 px-8 py-3 text-white transition max-w-xs"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <hr class="my-6 border-x-primary-110 sm:mx-auto lg:my-8" />
          <div class="sm:flex sm:items-center sm:justify-between">
            <a href="/" class="flex items-center">
              <img
                alt="consuelo-logo"
                src="/images/logo.png"
                class="mr-3 h-6 sm:h-9 w-10"
              />
              <h1 class="self-center text-xl font-semibold whitespace-nowrap">
                Consuelo
              </h1>
            </a>

            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              &copy; 2022{" "}
              <a href="/" class="hover:underline">
                Consuelo
              </a>
              . All Rights Reserved.
            </span>

            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0 text-3xl">
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i class="fa-brands fa-facebook"></i>
              </a>
              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i class="fa-brands fa-twitter"></i>
              </a>

              <a
                href="#"
                class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

//  <header>
//         <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
//           <div className="flex justify-between">
//             <a href="javascript:void(0)">
//               <img
//                 src="https://www.floatui.com/logo.svg"
//                 width={120}
//                 height={50}
//                 alt="Float UI logo"
//               />
//             </a>
//             <button
//               className="text-gray-500 outline-none md:hidden"
//               onClick={() => setState(!state)}
//             >
//               {state ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//           <ul
//             className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
//               state ? "" : "hidden"
//             }`}
//           >
//             <li className="order-2 pb-5 md:pb-0">
//               <a
//                 href="javascript:void(0)"
//                 className="py-3 px-6 rounded-md shadow-md text-white text-center bg-indigo-500 focus:shadow-none block md:inline"
//               >
//                 Sign In
//               </a>
//             </li>
//             <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
//               {navigation.map((item, idx) => (
//                 <li className="text-gray-500 hover:text-indigo-600" key={idx}>
//                   <a href={item.path}>{item.title}</a>
//                 </li>
//               ))}
//             </div>
//           </ul>
//         </nav>
//       </header>
//       <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
//         <div className="text-center space-y-4">
//           <h1 className="text-gray-800 font-bold text-4xl md:text-5xl">
//             Optimize your website for
//             <span className="text-indigo-600"> Search engine</span>
//           </h1>
//           <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">
//             It is a long established fact that a reader will be distracted by
//             the readable content of a page when looking at its layout. The point
//             of using Lorem Ipsum
//           </p>
//         </div>
//         <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
//           <a
//             href="javascript:void(0)"
//             className="px-10 py-3.5 w-full bg-indigo-600 text-white text-center rounded-md shadow-md block sm:w-auto"
//           >
//             Get started
//           </a>
//           <a
//             href="javascript:void(0)"
//             className="px-10 py-3.5 w-full text-gray-500 text-center border rounded-md duration-300 hover:text-indigo-600 hover:shadow block sm:w-auto"
//           >
//             Try it out
//           </a>
//         </div>
//       </section>
