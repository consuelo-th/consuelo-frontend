import React, {useEffect, useState} from 'react';
import { getOneBlog } from '../../services/blog';
import { useLocation } from 'react-router-dom';
import Spinner from '../../components/common.jsx/spinner';
import Modal from '../../components/common.jsx/modal';

const Blog = () => {
    const [ blog, setBlog ] = useState(null);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);
    const id = useLocation().pathname.split("/")[3];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data }  = await getOneBlog(id);
                setBlog(data)
                setLoading(false);
            }
            catch(error) {
                setError(true);
                setLoading(false);
            }
        } 
        fetchData();
    }, []);

    // console.log(blog)

    if (loading) {
        return <Spinner />
    }

    if (error) {
        return <div>An error occured...</div>
    }

    return (
        <div>
            <Modal type="proceed"/>
            <section className='text-center space-y-5'>
                <div>
                    <h1 className='text-left font-bold'>{blog.title}</h1> 
                
                </div>
                <div className='text-justify space-y-5'>
                    <div className='w-full'>
                        <img className='mx-auto object-contain' src="https://s3-alpha-sig.figma.com/img/4ec1/05f2/fdf03bc726d2201e926466bff0e75893?Expires=1679270400&Signature=nROduZKzHJ8a~qn0xZjBhtkHrp3sGLXJFecdgrvaAFNAXlgJ~Zk4lhAliboGcj3Scg4LfyI~VgM1V1QLW-vY6fcjXe6KSanycMyYbTz2oefYwCsIdw8jd58iT7dA75dnIYamMgg2zW4NaV8O3K1YSF5udl8diURrC6jeQ2-7szxXhK73KKwcM6bQfnbodbeEklrP8x1nhKpkspHR96IEBTYfkIqC3qZipqGdzI2bIvM0BCbOnGCL0teb666X-3pbDJ2QPGCcVFMds8hvt9siNBuh87EPtMnlz0bAAzYPLMCwxLjIjbk1hgHq-9qt6RCKgDtOmpFYicJTOrKpjoS~qw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="blog" />
                    </div>

                    <div>
                        <p>
                            {blog.body}
                        </p>
                        <p>
                            {blog.body}
                        </p>
                        <p>
                            {blog.body}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default Blog;