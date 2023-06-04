
import Team from "../../components/Team";

export default function ABoutUs() {
    return (
        <>
            <div className="bg-gradient-to-r from-[#46A972] to-[#225A3B] text-white py-5">
                <section className="lg:bg-[url('/images/hand-drawn.svg')] bg-no-repeat bg-right-bottom">
                <div className="py-10 mx-auto max-w-screen-xl text-center lg:py-40">
                        <h1 className="mb-4 text-3xl font-bold leading-none md:text-4xl xl:text-5xl">She who brings consolation</h1>
                </div>
                </section>
            </div>
            
            <section className="bg-white">
                <div className="pt-8 lg:pt-16">
                    <div className="flex justify-center">
                        <img src="/images/team.png" alt="team" className="object-contain" />
                    </div>

                    <div className="lg:flex justify-between pt-6 px-4 mx-auto max-w-screen-xl lg:pt-16 lg:pb-4 lg:px-6">
                        <div className="lg:w-[43%] flex flex-col justify-center items-center lg:block text-center lg:text-start max-w-[40rem] mx-auto">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-primary-60">Who We Are</h2>
                            <p className="md:text-[1.25rem] leading-8">To begin with, suicidal thoughts are these gentle whispers that clog 
                                your mind leaving you almost helpless. Hey! not to worry, we have 
                                highlighted critical steps you can take to deal with these thoughts. 
                                According to the Centers for Disease Control and Prevention (CDC) WISQARS, 
                                suicide is the second leading cause of death among individuals between the ages 
                                of 10–14 and 25–34. Shocking right? It even ranks higher than accidents. 
                            </p>
                        </div>
                        <div className="lg:w-[43%] lg:flex flex-col justify-between mt-6 lg:mt-0 text-center lg:text-start max-w-[40rem] mx-auto">
                            <div className="">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-primary-60">Our Vision</h2>
                                <p className="md:text-[1.25rem] leading-8">
                                    To begin with, suicidal thoughts are these gentle whispers 
                                    that clog your mind leaving you almost helpless. 
                                </p>
                            </div>
                            <div className="mt-6 lg:mt-0">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold text-primary-60">Our Mission</h2>
                                <p className="md:text-[1.25rem] leading-8">
                                    To begin with, suicidal thoughts are these gentle whispers 
                                    that clog your mind leaving you almost helpless. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Team />
        </>
    );
}
