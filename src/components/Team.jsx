


export default function Team() {
    return (
        <section className="bg-white">
            <div className=" items-center py-6 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div className="font-light text-gray-500 sm:text-lg text-center max-w-xl mx-auto">
                    <h2 className="mb-4 text-3xl lg:text-4xl font-bold ">Meet Our Team</h2>
                    <p className="mb-4">Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do you best work.</p>
                </div>
                <div className="text-center grid lg:grid-cols-4 place-items-center">
                    <div className="overflow-hidden rounded-lg shadow-sm">
                        <img alt="hassanat-ceo" src="/images/hassanat.png" className="object-cover"/>
                    
                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900"> Hassanat Abubakar </h3>
                            </a>
                    
                            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"> CEO </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg  shadow-sm">
                        <img alt="hassanat-ceo" src="/images/posi.png" className="object-cover"/>
                    
                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900"> Olamiposi Oluwasexy </h3>
                            </a>
                    
                            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"> Product Manager </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg shadow-sm">
                        <img alt="hassanat-ceo" src="/images/danny.png" className="object-cover"/>
                    
                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900"> Danny Ombeh </h3>
                            </a>
                    
                            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"> Product Designer </p>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-lg shadow-sm">
                        <img alt="hassanat-ceo" src="/images/hassan.png" className="object-cover"/>
                    
                        <div className="p-4 sm:p-6">
                            <a href="#">
                                <h3 className="text-lg font-medium text-gray-900"> Hassan Yahya </h3>
                            </a>
                    
                            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3"> Software Engineer </p>
                        </div>
                    </div>
    
                </div>
            </div>
        </section>
    );
}
  