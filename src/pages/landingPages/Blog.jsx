
import Article from "../../components/Article";

export default function () {
    return (
        <>
            {/*  Article  */}
            <section className="bg-white">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div className="text-center">
                        <h1 className="mb-3 lg:mb-8 text-xl font-bold leading-none md:text-2xl xl:text-5xl md:max-w-md lg:max-w-3xl mx-auto">BUSTING 4 COMMON MENTAL ILLNESS MYTHS + FACTS </h1>
                        <p className="text-body mb-3 lg:mb-8">Hussy Ameen - Nov 1, 2022</p>
                    </div>
                    <div className="my-4">
                        <img src="/images/mental-health.png" alt="mental-health" />
                    </div>
                    <article className="text-justify mx-auto lg:mx-0 w-[96%] text-lg lg:text-[1.25rem] leading-8 mt-8">
                        <p>To begin with, suicidal thoughts are these gentle whispers that clog
                            your mind leaving you almost helpless. Hey! not to worry, we have 
                            highlighted critical steps you can take to deal with these thoughts. 
                            According to the Centers for Disease Control and Prevention (CDC) WISQARS, 
                            suicide is the second leading cause of death among individuals between the ages 
                            of 10–14 and 25–34. Shocking right? It even ranks higher than accidents. 
                            A very popular myth is that people who have suicidal thoughts are attention seekers. 
                            Nothing can be farther from the truth than this. To begin with, suicidal thoughts 
                            are these gentle whispers that clog your mind leaving you almost helpless. Hey! not to worry, 
                            we have highlighted critical steps you can take to deal with these thoughts. 
                            According to the Centers for Disease Control and Prevention (CDC) WISQARS, suicide is 
                            the second leading cause of death among individuals between the ages of 10–14 and 25–34. 
                            Shocking right? It even ranks higher than accidents. A very popular myth is that people who 
                            have suicidal thoughts are attention seekers. Nothing can be farther from the truth than this.
                        </p>
                    </article>
                </div>
            </section>
                
            {/* Blog  */}
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <h2 className="mb-4 text-4xl font-bold ">Read Our Latest</h2>
                    <Article />
                </div>
            </section>
        </>
    );
}
