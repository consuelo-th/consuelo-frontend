import { blogs } from "../../data";
import Stats from "../../components/Stats";
import { Link } from "react-router-dom";
import { userHomeData, userBlogHomeData } from "../../data";
import Button from "../../components/common/button";

export default () => {

    const mentalHealthData = userHomeData.map(item => {
        return (
            <div key={item.id}  className="flex flex-col items-center w-[145px] md:w-auto rounded-lg md:flex-row max-w-4xl">
                <img className="object-cover w-full h-auto rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.image} alt="blog img" />
                                
                <div className="flex flex-col md:px-4 leading-normal gap-2">
                    <h2 className="text-xs pt-3  md:text-base font-semibold text-title">{item.title}</h2>
            
                    <p className="text-[10px] md:text-base text-helper">{item.descripton}</p>
                </div>
            </div>
        )
    })

    const blogData = userBlogHomeData.map(item => {
        return (
            <article key={item.id} className="overflow-hidden rounded-lg shadow transition hover:shadow-lg p-3 sm:p-6">
                <img alt="blog img" src={item.image} className="w-full object-cover" />
                     
                <div className="bg-white">
                    <Link to="">
                        <h3 className="mt-0.5 text-gray-900">
                            {item.title}
                        </h3>
                    </Link>
                            
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 ">
                        {item.length} read
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-gray-500 ">
                        {item.date}
                    </p>
                </div>          
            </article>
        )
    })

    return (        
        <>
            <div className="xl:grid xl:grid-cols-3 items-strech ">
                <div className="xl:col-span-2 pb-4">

                    <div className="rounded-xl bg-white p-6 mt-4">
                        <div className="flex justify-between">
                            <h2 className="mb-4 font-bold text-helper">Mental Health Tips</h2>
                            <Link to='/dashboard/mental-health-tips' className="text-primary-50 font-semibold">View more</Link>
                        </div>

                        <div className="flex flex-wrap md:flex-col space-y-3 justify-between items-center lg:block">
                            {mentalHealthData}
                        </div>
                    </div>              
                </div>

                <div className="py-4 row-[1/2] xl:ml-4 xl:col-[3] max-h-screen overflow-y-scroll">
                    <div className="bg-white rounded-xl flex flex-col px-3 py-6 gap-3">
                        <div className="">
                            <h2 className="mb-4 font-bold text-helper">Blog</h2>
                        </div>
                        {blogData}
                        
                    </div>
                </div>
            </div>
        </>
    )
}