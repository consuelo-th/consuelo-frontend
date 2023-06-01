import { blogs } from "../../data";
import Stats from "../../components/Stats";
import { Link } from "react-router-dom";
import Button from "../../components/common/button";

export default () => {
    return (
        <div className=" py-12 px-6">
            <div>
                <h1 className="heading-5 pb-3">Welcome back Hassy,</h1>
                <div className="mb-4">
                    <Stats />
                </div>
            </div>
            <div className="pt-4">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-primary-60 font-bold">Recent blog post</h4>
                    <Link to="/" className="text-helper">See All</Link>
                </div>
                <div className="flex flex-col gap-2">
                    {
                        blogs.map((blog, idx) => {
                            return (
                                <div key={blog.id} className="h-full  rounded-lg overflow-hidden grid grid-cols-6">
                                    <div className="p-6 col-span-5">
                                        <h1 className="font-bold text-primary-110 mb-3">{blog.title}</h1>
                                        <p className="leading-relaxed mb-3">{blog.content}</p>
                                    </div>
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://s3-alpha-sig.figma.com/img/4ec1/05f2/fdf03bc726d2201e926466bff0e75893?Expires=1679270400&Signature=nROduZKzHJ8a~qn0xZjBhtkHrp3sGLXJFecdgrvaAFNAXlgJ~Zk4lhAliboGcj3Scg4LfyI~VgM1V1QLW-vY6fcjXe6KSanycMyYbTz2oefYwCsIdw8jd58iT7dA75dnIYamMgg2zW4NaV8O3K1YSF5udl8diURrC6jeQ2-7szxXhK73KKwcM6bQfnbodbeEklrP8x1nhKpkspHR96IEBTYfkIqC3qZipqGdzI2bIvM0BCbOnGCL0teb666X-3pbDJ2QPGCcVFMds8hvt9siNBuh87EPtMnlz0bAAzYPLMCwxLjIjbk1hgHq-9qt6RCKgDtOmpFYicJTOrKpjoS~qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}