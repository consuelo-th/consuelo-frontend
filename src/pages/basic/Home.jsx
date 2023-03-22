import { blogs } from "../../data";
import Stats from "../../components/Stats";
import { Link } from "react-router-dom";
import { userHomeData, userBlogHomeData } from "../../data";
import Button from "../../components/common.jsx/button";

export default () => {

    const mentalHealthData = userHomeData.map(item => {
        return (
            <div key={item.id}  class="flex flex-col items-center w-[145px] md:w-auto rounded-lg md:flex-row max-w-4xl">
                <img class="object-cover w-full h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="blog img" />
                                
                <div class="flex flex-col md:px-4 leading-normal gap-2">
                    <h2 class="text-xs pt-3  md:text-base font-semibold text-title">{item.title}</h2>
            
                    <p class="text-[10px] md:text-base text-helper">{item.descripton}</p>
                </div>
            </div>
        )
    })

    const blogData = userBlogHomeData.map(item => {
        return (
            <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-3 sm:p-6">
                <img alt="blog img" src={item.image} class="w-full object-cover" />
                     
                <div class="bg-white">
                    <Link to="">
                        <h3 class="mt-0.5 text-gray-900">
                            {item.title}
                        </h3>
                    </Link>
                            
                    <p class="mt-2 text-sm leading-relaxed text-gray-500 ">
                        {item.length} read
                    </p>
                    <p class="mt-2 text-sm leading-relaxed text-gray-500 ">
                        {item.date}
                    </p>
                </div>          
            </article>
        )
    })

    return (        
        <>
            <div class=" xl:grid xl:grid-cols-3 items-strech ">
                <div class="xl:col-span-2 pb-4">

                    <div class="rounded-xl bg-white p-6 mt-4">
                        <div class="flex justify-between">
                            <h2 class="mb-4 font-bold text-helper">Mental Health Tips</h2>
                            <Link to='/dashboard/mental-health-tips' className="text-primary-50 font-semibold">View more</Link>
                        </div>

                        <div class="flex flex-wrap md:flex-col space-y-3 justify-between items-center lg:block">
                            {mentalHealthData}
                        </div>
                    </div>              
                </div>

                <div class="py-4 row-[1/2] xl:ml-4 xl:col-[3] max-h-screen overflow-y-scroll">
                    <div class="bg-white rounded-xl flex flex-col px-3 py-6 gap-3">
                        <div class="">
                            <h2 class="mb-4 font-bold text-helper">Blog</h2>
                        </div>
                        {blogData}
                        
                    </div>
                </div>
            </div>
        </>
    )
}