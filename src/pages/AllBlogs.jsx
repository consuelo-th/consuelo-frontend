import React from 'react';
import BlogCard from '../components/BlogCard';
import Button from '../components/common.jsx/button';

const Blogs = () => {
    return ( 
        <div className="bg-white p-4">
            <div className='flex justify-between items-center py-4'>
                <h1 className='font-bold text-primary-110'>Blog</h1>
                <Button size='' variant='light'>New Post</Button>
            </div>
            <div className='p-2 space-y-4'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
     );
}
 
export default Blogs;